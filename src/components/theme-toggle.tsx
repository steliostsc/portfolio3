"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setIsDark(true);
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDark(false);
    }
  }, []);

  const updateThemeColor = (theme: "dark" | "light") => {
    // Remove all existing theme-color metas
    document.querySelectorAll('meta[name="theme-color"]').forEach((el) => el.remove());

    // Insert a single unconditional one with the correct color
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = theme === "dark" ? "#050507" : "#3676e4";
    document.head.appendChild(meta);
  };

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIsDark(!isDark);
    updateThemeColor(next); // ← instant update
  };

  return (
    <button
      onClick={toggle}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-9 h-9 rounded-full flex items-center justify-center border border-white/10 bg-white/5 hover:bg-white/15 transition-all duration-300"
    >
      {isDark ? <Sun size={15} className="text-white" /> : <Moon size={15} className="text-white" />}
    </button>
  );
}