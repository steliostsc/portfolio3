"use client";

import { useState, useEffect } from "react";

const ADMIN_PASSWORD = "stelios2026";

const DEFAULTS = {
  hero_video_enabled: "true",
  hero_video_url:
    "https://www.youtube.com/embed/-WsR7YWjVj8?autoplay=1&mute=1&loop=1&playlist=-WsR7YWjVj8&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0",
  hero_available_badge: "true",
  hero_available_text: "Available for Hire",
  hero_subtitle: "Where creativity meets precision in every frame.",
  hero_cta_primary_text: "View Work",
  hero_cta_secondary_text: "Contact Me",
  hero_cta_secondary_href: "/contact",
  hero_archive_button: "true",
  maintenance_mode: "false",
  announcement_enabled: "false",
  announcement_text: "🎉 Now booking for Summer 2026",
  custom_cursor: "true",
};

function Toggle({
  label,
  description,
  enabled,
  onToggle,
  accent = "blue",
}: {
  label: string;
  description: string;
  enabled: boolean;
  onToggle: () => void;
  accent?: "blue" | "orange" | "green";
}) {
  const colors = { blue: "bg-blue-600", orange: "bg-orange-500", green: "bg-green-600" };
  return (
    <div className="flex items-center justify-between py-3.5 border-b border-white/5 last:border-0">
      <div>
        <p className="text-white font-medium text-sm">{label}</p>
        <p className="text-white/40 text-xs mt-0.5">{description}</p>
      </div>
      <button
        onClick={onToggle}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none shrink-0 ml-4 ${
          enabled ? colors[accent] : "bg-white/15"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${
            enabled ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

function TextInput({
  label,
  description,
  value,
  onChange,
  onSave,
  placeholder,
  mono = false,
}: {
  label: string;
  description?: string;
  value: string;
  onChange: (v: string) => void;
  onSave: () => void;
  placeholder?: string;
  mono?: boolean;
}) {
  return (
    <div className="py-3.5 border-b border-white/5 last:border-0">
      <p className="text-white font-medium text-sm mb-0.5">{label}</p>
      {description && <p className="text-white/40 text-xs mb-2">{description}</p>}
      <div className="flex gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`flex-1 min-w-0 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-blue-500 transition-colors text-xs ${mono ? "font-mono" : ""}`}
        />
        <button
          onClick={onSave}
          className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors shrink-0"
        >
          Save
        </button>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <h2 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">{title}</h2>
      {children}
    </div>
  );
}

export default function SecretAdmin() {
  const [input, setInput] = useState("");
  const [authed, setAuthed] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"hero" | "site" | "settings">("hero");

  // Hero
  const [videoEnabled, setVideoEnabled] = useState(true);
  const [videoUrl, setVideoUrl] = useState(DEFAULTS.hero_video_url);
  const [videoUrlInput, setVideoUrlInput] = useState(DEFAULTS.hero_video_url);
  const [availableBadge, setAvailableBadge] = useState(true);
  const [availableText, setAvailableText] = useState(DEFAULTS.hero_available_text);
  const [availableTextInput, setAvailableTextInput] = useState(DEFAULTS.hero_available_text);
  const [subtitle, setSubtitle] = useState(DEFAULTS.hero_subtitle);
  const [subtitleInput, setSubtitleInput] = useState(DEFAULTS.hero_subtitle);
  const [ctaPrimary, setCtaPrimary] = useState(DEFAULTS.hero_cta_primary_text);
  const [ctaPrimaryInput, setCtaPrimaryInput] = useState(DEFAULTS.hero_cta_primary_text);
  const [ctaSecondary, setCtaSecondary] = useState(DEFAULTS.hero_cta_secondary_text);
  const [ctaSecondaryInput, setCtaSecondaryInput] = useState(DEFAULTS.hero_cta_secondary_text);
  const [ctaHref, setCtaHref] = useState(DEFAULTS.hero_cta_secondary_href);
  const [ctaHrefInput, setCtaHrefInput] = useState(DEFAULTS.hero_cta_secondary_href);
  const [archiveButton, setArchiveButton] = useState(true);

  // Site
  const [maintenance, setMaintenance] = useState(false);
  const [announcementEnabled, setAnnouncementEnabled] = useState(false);
  const [announcementText, setAnnouncementText] = useState(DEFAULTS.announcement_text);
  const [announcementTextInput, setAnnouncementTextInput] = useState(DEFAULTS.announcement_text);
  const [customCursor, setCustomCursor] = useState(true);

  // Settings
  const [newPassword, setNewPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState(ADMIN_PASSWORD);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  useEffect(() => {
    const g = (k: string) => localStorage.getItem(k);
    if (g("hero_video_enabled") !== null) setVideoEnabled(g("hero_video_enabled") === "true");
    if (g("hero_video_url")) { setVideoUrl(g("hero_video_url")!); setVideoUrlInput(g("hero_video_url")!); }
    if (g("hero_available_badge") !== null) setAvailableBadge(g("hero_available_badge") === "true");
    if (g("hero_available_text")) { setAvailableText(g("hero_available_text")!); setAvailableTextInput(g("hero_available_text")!); }
    if (g("hero_subtitle")) { setSubtitle(g("hero_subtitle")!); setSubtitleInput(g("hero_subtitle")!); }
    if (g("hero_cta_primary_text")) { setCtaPrimary(g("hero_cta_primary_text")!); setCtaPrimaryInput(g("hero_cta_primary_text")!); }
    if (g("hero_cta_secondary_text")) { setCtaSecondary(g("hero_cta_secondary_text")!); setCtaSecondaryInput(g("hero_cta_secondary_text")!); }
    if (g("hero_cta_secondary_href")) { setCtaHref(g("hero_cta_secondary_href")!); setCtaHrefInput(g("hero_cta_secondary_href")!); }
    if (g("hero_archive_button") !== null) setArchiveButton(g("hero_archive_button") === "true");
    if (g("maintenance_mode") !== null) setMaintenance(g("maintenance_mode") === "true");
    if (g("announcement_enabled") !== null) setAnnouncementEnabled(g("announcement_enabled") === "true");
    if (g("announcement_text")) { setAnnouncementText(g("announcement_text")!); setAnnouncementTextInput(g("announcement_text")!); }
    if (g("custom_cursor") !== null) setCustomCursor(g("custom_cursor") === "true");
    if (g("admin_password")) setCurrentPassword(g("admin_password")!);
    if (g("admin_last_saved")) setLastSaved(g("admin_last_saved"));
  }, []);

  const flash = () => {
    const now = new Date().toLocaleString("en-GB", { dateStyle: "short", timeStyle: "short" });
    localStorage.setItem("admin_last_saved", now);
    setLastSaved(now);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === currentPassword) setAuthed(true);
    else { alert("Wrong password"); setInput(""); }
  };

  const set = (key: string, value: string) => localStorage.setItem(key, value);

  const handleToggle = (key: string, value: boolean, setter: (v: boolean) => void) => {
    setter(!value);
    set(key, String(!value));
    flash();
  };

  const handleVideoUrlSave = () => {
    let url = videoUrlInput.trim();
    const idMatch =
      url.match(/(?:youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/) ||
      url.match(/(?:v=)([a-zA-Z0-9_-]{11})/) ||
      url.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
    if (idMatch) {
      const id = idMatch[1];
      url = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&disablekb=1&fs=0`;
    }
    setVideoUrl(url);
    setVideoUrlInput(url);
    set("hero_video_url", url);
    flash();
  };

  const handleReset = () => {
    if (!confirm("Reset all settings to defaults?")) return;
    Object.entries(DEFAULTS).forEach(([k, v]) => set(k, v));
    setVideoEnabled(true);
    setVideoUrl(DEFAULTS.hero_video_url); setVideoUrlInput(DEFAULTS.hero_video_url);
    setAvailableBadge(true);
    setAvailableText(DEFAULTS.hero_available_text); setAvailableTextInput(DEFAULTS.hero_available_text);
    setSubtitle(DEFAULTS.hero_subtitle); setSubtitleInput(DEFAULTS.hero_subtitle);
    setCtaPrimary(DEFAULTS.hero_cta_primary_text); setCtaPrimaryInput(DEFAULTS.hero_cta_primary_text);
    setCtaSecondary(DEFAULTS.hero_cta_secondary_text); setCtaSecondaryInput(DEFAULTS.hero_cta_secondary_text);
    setCtaHref(DEFAULTS.hero_cta_secondary_href); setCtaHrefInput(DEFAULTS.hero_cta_secondary_href);
    setArchiveButton(true);
    setMaintenance(false);
    setAnnouncementEnabled(false);
    setAnnouncementText(DEFAULTS.announcement_text); setAnnouncementTextInput(DEFAULTS.announcement_text);
    setCustomCursor(true);
    flash();
  };

  const handlePasswordChange = () => {
    if (!newPassword.trim()) return alert("Password cannot be empty");
    if (!confirm(`Change password to "${newPassword}"?`)) return;
    setCurrentPassword(newPassword);
    set("admin_password", newPassword);
    setNewPassword("");
    flash();
  };

  const tabs = [
    { id: "hero", label: "Hero" },
    { id: "site", label: "Site" },
    { id: "settings", label: "Settings" },
  ] as const;

  const statusItems = [
    { label: "Video", value: videoEnabled ? "On" : "Off", ok: videoEnabled },
    { label: "Badge", value: availableBadge ? "Visible" : "Hidden", ok: availableBadge },
    { label: "Archive Btn", value: archiveButton ? "Visible" : "Hidden", ok: archiveButton },
    { label: "Announcement", value: announcementEnabled ? "On" : "Off", ok: announcementEnabled },
    { label: "Cursor", value: customCursor ? "On" : "Off", ok: customCursor },
    { label: "Maintenance", value: maintenance ? "On" : "Off", ok: !maintenance },
    { label: "Site", value: maintenance ? "Hidden" : "Live", ok: !maintenance },
  ];

  if (!authed) {
    return (
      <div className="min-h-dvh flex items-center justify-center bg-[#050507]">
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4 w-full max-w-sm p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-bold">A</div>
            <h1 className="text-white text-lg font-bold tracking-tight">Admin Panel</h1>
          </div>
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 outline-none focus:border-blue-500 transition-colors text-sm"
          />
          <button type="submit" className="px-4 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-colors text-sm">
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-dvh bg-[#050507] py-10 px-4">
      <div className="max-w-lg mx-auto flex flex-col gap-5">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-sm font-bold">A</div>
            <div>
              <h1 className="text-white font-bold tracking-tight text-sm">Admin Panel</h1>
              <p className="text-white/30 text-xs">stsekouras.vercel.app</p>
            </div>
          </div>
          <div className="text-right">
            {saved && <p className="text-green-400 text-xs font-medium">✓ Saved</p>}
            {!saved && lastSaved && <p className="text-white/20 text-xs">Last saved {lastSaved}</p>}
          </div>
        </div>

        {/* Maintenance Banner */}
        {maintenance && (
          <div className="rounded-2xl border border-orange-500/40 bg-orange-500/10 px-5 py-3 flex items-center gap-3">
            <span className="text-orange-300 text-lg">🚧</span>
            <div>
              <p className="text-orange-300 font-semibold text-sm">Maintenance Mode is ON</p>
              <p className="text-orange-300/60 text-xs">Visitors see a coming soon page</p>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 p-1 rounded-xl bg-white/5 border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all duration-200 ${
                activeTab === tab.id ? "bg-white/10 text-white" : "text-white/40 hover:text-white/60"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Hero Tab ── */}
        {activeTab === "hero" && (
          <>
            <Section title="Video">
              <Toggle
                label="Background Video"
                description={videoEnabled ? "Playing on hero" : "Disabled — solid background shown"}
                enabled={videoEnabled}
                onToggle={() => handleToggle("hero_video_enabled", videoEnabled, setVideoEnabled)}
              />
              <TextInput
                label="Video URL"
                description="Paste any YouTube link — embed URL built automatically"
                value={videoUrlInput}
                onChange={setVideoUrlInput}
                onSave={handleVideoUrlSave}
                placeholder="https://youtube.com/watch?v=..."
                mono
              />
            </Section>

            <Section title="Badge">
              <Toggle
                label="Available for Hire Badge"
                description={availableBadge ? "Visible in hero" : "Hidden"}
                enabled={availableBadge}
                onToggle={() => handleToggle("hero_available_badge", availableBadge, setAvailableBadge)}
              />
              <TextInput
                label="Badge Text"
                value={availableTextInput}
                onChange={setAvailableTextInput}
                onSave={() => { setAvailableText(availableTextInput); set("hero_available_text", availableTextInput); flash(); }}
                placeholder="Available for Hire"
              />
            </Section>

            <Section title="Content">
              <TextInput
                label="Subtitle"
                value={subtitleInput}
                onChange={setSubtitleInput}
                onSave={() => { setSubtitle(subtitleInput); set("hero_subtitle", subtitleInput); flash(); }}
                placeholder="Where creativity meets precision in every frame."
              />
              <TextInput
                label="Primary Button Text"
                value={ctaPrimaryInput}
                onChange={setCtaPrimaryInput}
                onSave={() => { setCtaPrimary(ctaPrimaryInput); set("hero_cta_primary_text", ctaPrimaryInput); flash(); }}
                placeholder="View Work"
              />
              <TextInput
                label="Secondary Button Text"
                value={ctaSecondaryInput}
                onChange={setCtaSecondaryInput}
                onSave={() => { setCtaSecondary(ctaSecondaryInput); set("hero_cta_secondary_text", ctaSecondaryInput); flash(); }}
                placeholder="Contact Me"
              />
              <TextInput
                label="Secondary Button Link"
                value={ctaHrefInput}
                onChange={setCtaHrefInput}
                onSave={() => { setCtaHref(ctaHrefInput); set("hero_cta_secondary_href", ctaHrefInput); flash(); }}
                placeholder="/contact"
                mono
              />
              <Toggle
                label="Archive Button"
                description={archiveButton ? "Visible on homepage" : "Hidden"}
                enabled={archiveButton}
                onToggle={() => handleToggle("hero_archive_button", archiveButton, setArchiveButton)}
              />
            </Section>
          </>
        )}

        {/* ── Site Tab ── */}
        {activeTab === "site" && (
          <>
            <Section title="Maintenance">
              <Toggle
                label="Maintenance Mode"
                description={maintenance ? "Site hidden — coming soon page shown" : "Site is live"}
                enabled={maintenance}
                onToggle={() => handleToggle("maintenance_mode", maintenance, setMaintenance)}
                accent="orange"
              />
            </Section>

            <Section title="Announcement Banner">
              <Toggle
                label="Show Banner"
                description={announcementEnabled ? "Banner visible at top of site" : "Banner hidden"}
                enabled={announcementEnabled}
                onToggle={() => handleToggle("announcement_enabled", announcementEnabled, setAnnouncementEnabled)}
                accent="green"
              />
              <TextInput
                label="Banner Text"
                value={announcementTextInput}
                onChange={setAnnouncementTextInput}
                onSave={() => { setAnnouncementText(announcementTextInput); set("announcement_text", announcementTextInput); flash(); }}
                placeholder="🎉 Now booking for Summer 2026"
              />
              {announcementEnabled && (
                <div className="mt-3 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-300 text-xs text-center">
                  {announcementText || "No text set"}
                </div>
              )}
            </Section>

            <Section title="Misc">
              <Toggle
                label="Custom Cursor"
                description={customCursor ? "Custom cursor active" : "Default browser cursor"}
                enabled={customCursor}
                onToggle={() => handleToggle("custom_cursor", customCursor, setCustomCursor)}
              />
            </Section>

            <Section title="Current State">
              <div className="grid grid-cols-2 gap-2 pt-1">
                {statusItems.map((item) => (
                  <div key={item.label} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5">
                    <span className="text-white/50 text-xs">{item.label}</span>
                    <span className={`text-xs font-medium ${item.ok ? "text-green-400" : "text-orange-400"}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ── Settings Tab ── */}
        {activeTab === "settings" && (
          <>
            <Section title="Security">
              <div className="py-3.5">
                <p className="text-white font-medium text-sm mb-0.5">Change Password</p>
                <p className="text-white/40 text-xs mb-2">You'll need the new password next time you log in</p>
                <div className="flex gap-2">
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="New password"
                    className="flex-1 min-w-0 px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/20 outline-none focus:border-blue-500 transition-colors text-xs"
                  />
                  <button
                    onClick={handlePasswordChange}
                    className="px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition-colors shrink-0"
                  >
                    Update
                  </button>
                </div>
              </div>
            </Section>

            <Section title="Data">
              <div className="py-3.5">
                <p className="text-white font-medium text-sm mb-0.5">All Settings</p>
                <p className="text-white/40 text-xs mb-3">Stored in localStorage on this device</p>
                <div className="space-y-1.5">
                  {Object.keys(DEFAULTS).map((key) => (
                    <div key={key} className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/5">
                      <span className="text-white/40 text-xs font-mono">{key}</span>
                      <span className="text-white/60 text-xs font-mono truncate max-w-[120px]">
                        {localStorage.getItem(key) ?? "default"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            <button
              onClick={handleReset}
              className="w-full py-3 rounded-xl border border-red-500/20 text-red-400/60 hover:text-red-400 hover:border-red-500/40 text-sm transition-colors"
            >
              Reset all to defaults
            </button>
          </>
        )}

      </div>
    </div>
  );
}