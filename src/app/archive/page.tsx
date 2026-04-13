// src/app/archive/page.tsx
"use client";

import { fetchTikTokThumbnail } from "@/lib/helper";
import ProjectCard from "@/components/ProjectCard";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2, Filter, ArrowUpDown } from "lucide-react";
import type { VideoProject } from "@/types/videos";
import MouseMoveEffect from "@/components/mouse-move-effect";
import { archivedVideoProjects } from "@/db/archivedProjects";

function getArchivedByCategory(category: string): VideoProject[] {
  if (category === "All") return archivedVideoProjects;
  return archivedVideoProjects.filter((p) => p.category.includes(category));
}

function getArchivedCategoriesWithCount() {
  const counts: Record<string, number> = {};
  archivedVideoProjects.forEach((p) =>
    p.category.forEach((c) => { counts[c] = (counts[c] ?? 0) + 1; })
  );
  return [
    { category: "All", count: archivedVideoProjects.length },
    ...Object.entries(counts).map(([category, count]) => ({ category, count })),
  ];
}

function parseDuration(duration?: string): number {
  if (!duration) return 0;
  const parts = duration.split(":").map(Number);
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return parts[0] ?? 0;
}

function parseDate(dateStr?: string): number {
  if (!dateStr) return 0;
  return new Date(dateStr).getTime();
}

type SortOption = "default" | "date-desc" | "date-asc" | "duration-desc" | "duration-asc";

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default",       label: "Default"        },
  { value: "date-desc",     label: "Newest First"   },
  { value: "date-asc",      label: "Oldest First"   },
  { value: "duration-desc", label: "Longest First"  },
  { value: "duration-asc",  label: "Shortest First" },
];

function sortProjects(projects: VideoProject[], sort: SortOption): VideoProject[] {
  if (sort === "default") return projects;
  return [...projects].sort((a, b) => {
    if (sort === "date-desc")     return parseDate(b.publish_date) - parseDate(a.publish_date);
    if (sort === "date-asc")      return parseDate(a.publish_date) - parseDate(b.publish_date);
    if (sort === "duration-desc") return parseDuration(b.duration) - parseDuration(a.duration);
    if (sort === "duration-asc")  return parseDuration(a.duration) - parseDuration(b.duration);
    return 0;
  });
}

const categories = getArchivedCategoriesWithCount();

export default function ArchivePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<SortOption>("default");
  const [sortOpen, setSortOpen] = useState(false);
  const [displayedProjects, setDisplayedProjects] = useState<VideoProject[]>([]);
  const [allProjects, setAllProjects] = useState<VideoProject[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [showCategories, setShowCategories] = useState(false);
  const [tiktokThumbs, setTikTokThumbs] = useState<Record<string, string>>({});

  const ITEMS_PER_PAGE = 9;

  useEffect(() => {
    const projects = sortProjects(getArchivedByCategory(selectedCategory), sortBy);
    setAllProjects(projects);
    setDisplayedProjects(projects.slice(0, ITEMS_PER_PAGE));
    setCurrentPage(1);
    setHasMore(projects.length > ITEMS_PER_PAGE);
  }, [selectedCategory, sortBy]);

  const loadMoreProjects = useCallback(() => {
    if (loading || !hasMore) return;
    setLoading(true);
    setTimeout(() => {
      const nextPage = currentPage + 1;
      const start = (nextPage - 1) * ITEMS_PER_PAGE;
      const end = start + ITEMS_PER_PAGE;
      setDisplayedProjects((prev) => [...prev, ...allProjects.slice(start, end)]);
      setCurrentPage(nextPage);
      setHasMore(end < allProjects.length);
      setLoading(false);
    }, 500);
  }, [currentPage, allProjects, loading, hasMore]);

  useEffect(() => {
    if (selectedCategory === "All") return;
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000)
        loadMoreProjects();
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [selectedCategory, loadMoreProjects]);

  useEffect(() => {
    displayedProjects.forEach((project) => {
      if (project.video_link.includes("tiktok.com") && !tiktokThumbs[project.id]) {
        fetchTikTokThumbnail(project.video_link).then((thumb) => {
          if (thumb) setTikTokThumbs((prev) => ({ ...prev, [project.id]: thumb }));
        });
      }
    });
  }, [displayedProjects, tiktokThumbs]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MouseMoveEffect />

      <section id="projects" className="relative py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 relative pt-20"
          >
            
            <h1 className="text-4xl md:text-6xl font-bold mb-3 text-white tracking-tight">
              The{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Archive
              </span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
              Older work and early projects — not listed publicly.
            </p>
          </motion.div>

          {/* Controls Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 flex items-center gap-2 w-[200px] justify-center"
            >
              <Filter size={16} />
              {showCategories ? "Hide Categories" : "Show Categories"}
            </button>

            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                title="Sort projects"
                className={`
                  w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300
                  ${sortBy !== "default"
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    : "bg-white/10 text-white border border-white/10 hover:bg-white/20"
                  }
                `}
              >
                <ArrowUpDown size={16} />
              </button>

              {sortOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-2 right-0 w-48 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl"
                >
                  {SORT_OPTIONS.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => { setSortBy(option.value); setSortOpen(false); }}
                      className={`
                        w-full text-left px-4 py-3 text-sm transition-colors duration-150 flex items-center gap-2
                        ${sortBy === option.value
                          ? "bg-white/10 text-white font-medium"
                          : "text-gray-400 hover:bg-white/5 hover:text-white"
                        }
                      `}
                    >
                      <span
                        className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0 transition-opacity"
                        style={{ opacity: sortBy === option.value ? 1 : 0 }}
                      />
                      {option.label}
                    </button>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={false}
            animate={{
              height: showCategories ? "auto" : 0,
              opacity: showCategories ? 1 : 0,
              marginBottom: showCategories ? 64 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], opacity: { duration: 0.3 } }}
            style={{ overflow: "visible" }}
          >
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(({ category, count }) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                    ${selectedCategory === category
                      ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                >
                  {category}
                  <span className={`ml-2 text-[10px] px-1.5 py-0.5 rounded-full transition-colors
                    ${selectedCategory === category ? "bg-black text-white" : "bg-white/10 text-gray-400"}`}
                  >
                    {count}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              >
                <ProjectCard
                  project={project}
                  index={index}
                  tiktokThumb={tiktokThumbs[project.id] || null}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Load More */}
          {selectedCategory === "All" && hasMore && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-20">
              <Button
                onClick={loadMoreProjects}
                disabled={loading}
                size="lg"
                className="bg-white text-black hover:bg-gray-200 rounded-full px-8 h-12 font-medium transition-all hover:scale-105"
              >
                {loading ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Loading...</>
                ) : (
                  <>Load More Projects<ArrowRight className="ml-2" size={16} /></>
                )}
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}