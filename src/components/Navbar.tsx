"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, ArrowUpRight, FileDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("HERO");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 20);

      // Calculate scroll progress percentage (0 - 100)
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (currentScroll / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, Math.round(progress))));

      // Determine active section for terminal readout
      const sections = [
        { id: "contact", name: "CONTACT" },
        { id: "projects", name: "PROJECTS" },
        { id: "terminal", name: "TERMINAL" },
        { id: "skills", name: "SKILLS" },
        { id: "experience", name: "EXPERIENCE" },
        { id: "about", name: "ABOUT" },
        { id: "engineering", name: "METRICS" },
      ];

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 250) {
            setActiveSection(sec.name);
            break;
          }
        }
      }
      if (currentScroll < 200) {
        setActiveSection("BOOT");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when full-screen menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { num: "01", label: "ABOUT ME", href: "#about", desc: "Behind the APIs & Core Philosophy" },
    { num: "02", label: "METRICS", href: "#engineering", desc: "Production Observability & SLA" },
    { num: "03", label: "EXPERIENCE", href: "#experience", desc: "Accenture Associate Software Engineer" },
    { num: "04", label: "SKILLS", href: "#skills", desc: "Java, Spring Boot, Databases & Cloud" },
    { num: "05", label: "TERMINAL", href: "#terminal", desc: "Interactive Backend Command Console" },
    { num: "06", label: "PROJECTS", href: "#projects", desc: "PujaPath, Slotify & Swagger Specs" },
    { num: "07", label: "CONTACT", href: "#contact", desc: "Socket Dispatch & Professional Networks" },
  ];

  // Helper to generate terminal ASCII progress bar
  const totalBlocks = 20;
  const filledBlocks = Math.round((scrollProgress / 100) * totalBlocks);
  const progressBarAscii =
    "█".repeat(filledBlocks) + "░".repeat(Math.max(0, totalBlocks - filledBlocks));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1120]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-2.5"
            : "bg-[#0b1120]/80 backdrop-blur-sm border-b border-white/5 py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#"
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
              aria-label="Arnab Saha - Home"
            >
              <div className="w-9 h-9 rounded-lg bg-[#141f36] border border-white/20 group-hover:border-emerald-400 flex items-center justify-center transition-colors shadow-sm">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  ARNAB SAHA{" "}
                  <span className="text-zinc-400 text-xs font-normal font-mono">
                    // Backend
                  </span>
                </span>
                <span className="text-[10px] text-zinc-300 tracking-wider uppercase font-mono">
                  Java • Spring Boot • Cloud
                </span>
              </div>
            </a>

            {/* Middle: Live Terminal Scroll Loader Bar */}
            <div className="hidden sm:flex items-center gap-3 px-3 py-1 rounded-lg bg-[#070c17] border border-white/10 text-[11px] font-mono shadow-inner">
              <span className="text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                $ scroll.scan:
              </span>
              <span className="text-emerald-400 tracking-tighter">
                [{progressBarAscii}]
              </span>
              <span className="text-white font-bold w-10 text-right">
                {scrollProgress}%
              </span>
              <span className="text-zinc-500">|</span>
              <span className="text-zinc-300 font-semibold uppercase">
                {activeSection}
              </span>
            </div>

            {/* Right: Resume quick button + Hamburger button for ALL screens */}
            <div className="flex items-center gap-3">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="ArnabSaha_Resume.pdf"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-emerald-400 font-mono text-xs font-medium transition-all"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>

              {/* Universal Hamburger Toggle (Desktop & Mobile) */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
                aria-label="Toggle full-screen navigation menu"
              >
                <Menu className="w-4 h-4" />
                <span className="tracking-wider uppercase">MENU</span>
              </button>
            </div>
          </div>

          {/* Mobile Terminal Scroll Indicator line */}
          <div className="sm:hidden mt-2 pt-1 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
            <span className="text-emerald-400">
              [{progressBarAscii.slice(0, 12)}] {scrollProgress}%
            </span>
            <span className="text-zinc-300 uppercase font-semibold">
              // {activeSection}
            </span>
          </div>
        </div>

        {/* Dynamic Glowing Progress Ribbon at the very edge */}
        <div className="w-full h-[2px] bg-white/5 mt-1 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 transition-all duration-150 ease-out shadow-[0_0_8px_rgba(52,211,153,0.8)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* FULL-SCREEN OVERLAY MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-[#090e1a]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 animate-in fade-in duration-200 overflow-y-auto">
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#141f36] border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-mono">
                  COMMAND_MENU // NAVIGATION
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  Select a destination or system module
                </p>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 flex items-center gap-2 font-mono text-xs"
              aria-label="Close menu"
            >
              <span>CLOSE</span>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 my-auto py-8">
            {/* Left: Big Navigation Links */}
            <div className="lg:col-span-8 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between p-3.5 sm:p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/15 transition-all"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm sm:text-base text-emerald-400 font-bold">
                      {link.num}.
                    </span>
                    <div>
                      <h4 className="text-2xl sm:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors tracking-tight font-sans">
                        {link.label}
                      </h4>
                      <p className="text-xs sm:text-sm text-zinc-400 font-mono mt-0.5">
                        {link.desc}
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Right: Quick System Dispatch & Credentials */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-6 lg:border-l lg:border-white/10 lg:pl-10">
              <div className="p-6 rounded-2xl bg-[#141f36] border border-white/15 space-y-4">
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  Direct Ingress
                </span>
                <div>
                  <p className="text-xs text-zinc-400 font-mono">Primary Email:</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-mono text-white font-bold hover:text-emerald-400 transition-colors break-all"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href={PERSONAL_INFO.resumePdf}
                    download="ArnabSaha_Resume.pdf"
                    className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Download Official Resume (PDF)</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 flex items-center justify-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4 text-zinc-300" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 flex items-center justify-center gap-2"
                    >
                      <LinkedinIcon className="w-4 h-4 text-blue-400" />
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bar inside Overlay */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-2">
            <span>PRESS ESCAPE KEY OR CLICK CLOSE</span>
            <span className="text-emerald-400">JVM STATUS: HEALTHY • 2026 EDITION</span>
          </div>
        </div>
      )}
    </>
  );
}
