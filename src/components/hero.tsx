"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import MagneticButton from "./magnetic-button";
import { useLenis } from "lenis/react";

const DEFAULT_VIDEO_URL =
  "https://www.youtube.com/embed/-WsR7YWjVj8?autoplay=1&mute=1&loop=1&playlist=-WsR7YWjVj8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0";

export default function Hero() {
  const lenis = useLenis();

  const [videoEnabled, setVideoEnabled] = useState(true);
  const [videoUrl, setVideoUrl] = useState(DEFAULT_VIDEO_URL);
  const [availableBadge, setAvailableBadge] = useState(true);
  const [availableText, setAvailableText] = useState("Available for Hire");
  const [subtitle, setSubtitle] = useState("Where creativity meets precision in every frame.");
  const [ctaPrimary, setCtaPrimary] = useState("View Work");
  const [ctaSecondary, setCtaSecondary] = useState("Contact Me");
  const [ctaHref, setCtaHref] = useState("/contact");
  const [archiveButton, setArchiveButton] = useState(true);

  useEffect(() => {
    const g = (k: string) => localStorage.getItem(k);
    if (g("hero_video_enabled") !== null) setVideoEnabled(g("hero_video_enabled") === "true");
    if (g("hero_video_url")) setVideoUrl(g("hero_video_url")!);
    if (g("hero_available_badge") !== null) setAvailableBadge(g("hero_available_badge") === "true");
    if (g("hero_available_text")) setAvailableText(g("hero_available_text")!);
    if (g("hero_subtitle")) setSubtitle(g("hero_subtitle")!);
    if (g("hero_cta_primary_text")) setCtaPrimary(g("hero_cta_primary_text")!);
    if (g("hero_cta_secondary_text")) setCtaSecondary(g("hero_cta_secondary_text")!);
    if (g("hero_cta_secondary_href")) setCtaHref(g("hero_cta_secondary_href")!);
    if (g("hero_archive_button") !== null) setArchiveButton(g("hero_archive_button") === "true");
  }, []);

  const scrollToProjects = (e?: React.MouseEvent) => {
    e?.preventDefault();
    if (lenis) {
      lenis.scrollTo("#projects", {
        duration: 2,
        offset: -100,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    }
  };

  return (
    <section
      className="relative flex items-center justify-center overflow-hidden isolate"
      style={{
        backgroundColor: "#050507",
        height: "100dvh",
        minHeight: "800px",
      }}
    >
      {/* ── YouTube Video Background ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {videoEnabled && (
          <>
            <iframe
              src={videoUrl}
              title="Background video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
              style={{
                width: "calc(100vw + 200px)",
                height: "calc(56.25vw + 200px)",
                minWidth: "calc(177.78vh + 200px)",
                minHeight: "calc(100dvh + 200px)",
              }}
            />

            {/* Dark tint */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Vignette */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.6) 100%)",
              }}
            />

            {/* Side fades */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />

            {/* Top fade */}
            <div
              className="absolute top-0 left-0 right-0 z-[2] pointer-events-none"
              style={{
                height: "180px",
                background: "linear-gradient(to bottom, #050507 0%, transparent 100%)",
              }}
            />
          </>
        )}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {availableBadge && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-6"
          >
            <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-xs font-medium text-blue-200 tracking-widest uppercase">
              {availableText}
            </div>
          </motion.div>
        )}

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[0.9]">
          <motion.span
            initial={{ opacity: 0, y: 50, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="block bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent"
          >
            CINEMATIC
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 pb-4"
          >
            EDITOR
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed mb-12"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <MagneticButton>
            <button
              onClick={scrollToProjects}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              <span className="relative z-10 flex items-center">{ctaPrimary}</span>
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href={ctaHref}
              className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20"
            >
              {ctaSecondary}
            </a>
          </MagneticButton>

          {archiveButton && (
            <MagneticButton>
              <a
                href="/archive"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white/50 hover:text-white/80 transition-all duration-300"
              >
                Archive →
              </a>
            </MagneticButton>
          )}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center gap-2 text-white hover:text-white transition-colors duration-300"
        >
          <span className="text-[10px] tracking-widest uppercase">Scroll</span>
          <ArrowDown className="animate-bounce" size={20} />
        </button>
      </motion.div>

      {/* ── Bottom fade ── */}
      <div
        className="hero-bottom-fade absolute bottom-0 left-0 right-0 z-[2] pointer-events-none"
        style={{ height: "50vh", marginBottom: "-4px" }}
      />
    </section>
  );
}