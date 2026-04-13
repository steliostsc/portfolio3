"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const updateThemeColor = (theme: "dark" | "light") => {
  document.querySelectorAll('meta[name="theme-color"]').forEach((el) => el.remove());
  const meta = document.createElement("meta");
  meta.name = "theme-color";
  meta.content = theme === "dark" ? "#050507" : "#3676e4";
  document.head.appendChild(meta);
};

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const theme =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

    document.documentElement.setAttribute("data-theme", theme);
    setIsDark(theme === "dark");
    updateThemeColor(theme);
  }, []);

  const toggle = () => {
    const next = isDark ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setIsDark(!isDark);
    updateThemeColor(next);
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