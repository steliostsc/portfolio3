"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "Stelios7!7"; // ← change this to whatever you want

export default function SecretAdmin() {
  const [input, setInput] = useState("");
  const [authed, setAuthed] = useState(false);
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hero_video_enabled");
    if (stored !== null) setVideoEnabled(stored === "true");
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === ADMIN_PASSWORD) {
      setAuthed(true);
    } else {
      alert("Wrong password");
      setInput("");
    }
  };

  const handleToggle = () => {
    const newVal = !videoEnabled;
    setVideoEnabled(newVal);
    localStorage.setItem("hero_video_enabled", String(newVal));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (!authed) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-[#050507]">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <h1 className="text-white text-xl font-bold tracking-tight">Admin Panel</h1>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-dvh flex items-center justify-center bg-[#050507]">
      <div className="flex flex-col gap-6 w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
        <h1 className="text-white text-xl font-bold tracking-tight">Hero Video</h1>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-medium">Background Video</p>
            <p className="text-white/40 text-sm mt-0.5">
              {videoEnabled ? "Currently playing" : "Currently disabled"}
            </p>
          </div>

          {/* Toggle switch */}
          <button
            onClick={handleToggle}
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus:outline-none ${
              videoEnabled ? "bg-blue-600" : "bg-white/20"
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform duration-300 ${
                videoEnabled ? "translate-x-7" : "translate-x-0"
              }`}
            />
          </button>
        </div>

        {saved && (
          <p className="text-green-400 text-sm text-center animate-pulse">
            ✓ Saved
          </p>
        )}

        <p className="text-white/20 text-xs text-center">
          Changes apply immediately on this device.
        </p>
      </div>
    </div>
  );
}