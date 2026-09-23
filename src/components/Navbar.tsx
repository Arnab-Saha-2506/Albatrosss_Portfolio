"use client";

import React, { useState, useEffect } from "react";
import { Terminal, ArrowUpRight, FileDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("BOOT");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      setScrolled(currentScroll > 15);

      // Reliable cross-device height calculation
      const totalDocHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight
      );
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight || 0;
      const scrollableHeight = totalDocHeight - windowHeight;

      const progress =
        scrollableHeight > 0 ? (currentScroll / scrollableHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, Math.round(progress))));

      // Active section detection
      const sections = [
        { id: "contact", name: "CONTACT" },
        { id: "projects", name: "PROJECTS" },
        { id: "terminal", name: "TERMINAL" },
        { id: "skills", name: "SKILLS" },
        { id: "experience", name: "EXPERIENCE" },
        { id: "about", name: "ABOUT" },
        { id: "engineering", name: "METRICS" },
      ];

      let found = false;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sec.name);
            found = true;
            break;
          }
        }
      }
      if (!found && currentScroll < 150) {
        setActiveSection("BOOT");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("touchmove", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("touchmove", handleScroll);
    };
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
  const desktopBlocks = 16;
  const desktopFilled = Math.round((scrollProgress / 100) * desktopBlocks);
  const desktopAscii =
    "█".repeat(desktopFilled) +
    "░".repeat(Math.max(0, desktopBlocks - desktopFilled));

  const mobileBlocks = 8;
  const mobileFilled = Math.round((scrollProgress / 100) * mobileBlocks);
  const mobileAscii =
    "█".repeat(mobileFilled) +
    "░".repeat(Math.max(0, mobileBlocks - mobileFilled));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#0b1120]/95 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/40 py-2.5"
            : "bg-[#0b1120]/80 backdrop-blur-sm border-b border-white/5 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Logo / Brand */}
            <a
              href="#"
              className="flex items-center gap-2 group cursor-pointer focus:outline-none shrink-0"
              aria-label="Arnab Saha - Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#141f36] border border-white/20 group-hover:border-emerald-400 flex items-center justify-center transition-colors shadow-sm">
                <Terminal className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs sm:text-sm font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                  ARNAB SAHA{" "}
                  <span className="text-zinc-400 text-[10px] sm:text-xs font-normal font-mono hidden xs:inline">
                    // Backend
                  </span>
                </span>
                <span className="text-[9px] sm:text-[10px] text-zinc-300 tracking-wider uppercase font-mono">
                  Java • Spring Boot
                </span>
              </div>
            </a>

            {/* Desktop Terminal Scroll Loader Bar */}
            <div className="hidden md:flex items-center gap-2.5 px-3 py-1 rounded-lg bg-[#070c17] border border-white/10 text-[11px] font-mono shadow-inner">
              <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                $ scan.sys:
              </span>
              <span className="text-emerald-400 tracking-tighter">
                [{desktopAscii}]
              </span>
              <span className="text-white font-bold w-10 text-right">
                {scrollProgress}%
              </span>
              <span className="text-zinc-500">|</span>
              <span className="text-zinc-300 font-semibold uppercase">
                {activeSection}
              </span>
            </div>

            {/* Mobile / Tablet Compact Live Terminal Scan Pill */}
            <div className="md:hidden flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#070c17] border border-white/15 text-[10px] font-mono shadow-inner">
              <span className="text-emerald-400 font-bold">$ scan:</span>
              <span className="text-emerald-400 tracking-tighter">
                [{mobileAscii}]
              </span>
              <span className="text-white font-extrabold">{scrollProgress}%</span>
            </div>

            {/* Right: Hamburger button for ALL screens */}
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="ArnabSaha_Resume.pdf"
                className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-emerald-400 font-mono text-xs font-medium transition-all"
              >
                <span>Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
              </a>

              {/* Animated Hamburger Toggle Button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs shadow-lg shadow-emerald-500/25 active:scale-95 transition-all cursor-pointer overflow-hidden"
                aria-label="Toggle full-screen navigation menu"
              >
                {/* Animated Bars */}
                <div className="w-4 h-3.5 flex flex-col justify-between items-center py-0.5">
                  <span
                    className={`block w-4 h-0.5 bg-slate-950 rounded-full transition-transform duration-300 ease-in-out ${
                      menuOpen ? "rotate-45 translate-y-1" : ""
                    }`}
                  />
                  <span
                    className={`block w-4 h-0.5 bg-slate-950 rounded-full transition-opacity duration-200 ${
                      menuOpen ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block w-4 h-0.5 bg-slate-950 rounded-full transition-transform duration-300 ease-in-out ${
                      menuOpen ? "-rotate-45 -translate-y-1" : ""
                    }`}
                  />
                </div>
                <span className="tracking-wider uppercase font-bold hidden sm:inline">
                  {menuOpen ? "CLOSE" : "MENU"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Glowing Progress Ribbon at the very edge */}
        <div className="w-full h-[2px] bg-white/5 mt-1.5 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 via-teal-400 to-sky-400 transition-all duration-100 ease-out shadow-[0_0_10px_rgba(52,211,153,0.9)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </header>

      {/* FULL-SCREEN OVERLAY MENU WITH FRAMER MOTION ANIMATION */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#090e1a]/98 backdrop-blur-2xl flex flex-col justify-between p-5 sm:p-10 overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#141f36] border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-mono">
                    COMMAND_MENU // NAVIGATION
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono text-zinc-400">
                    Select a module to jump directly
                  </p>
                </div>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="p-2.5 sm:p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all active:scale-95 flex items-center gap-2 font-mono text-xs cursor-pointer"
                aria-label="Close menu"
              >
                <span>CLOSE</span>
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {/* Menu Main Content Grid with Staggered Link Reveals */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-6 sm:py-8">
              {/* Left: Big Navigation Links */}
              <div className="lg:col-span-8 space-y-1.5 sm:space-y-2">
                {navLinks.map((link, idx) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * idx, duration: 0.2 }}
                    className="group flex items-center justify-between p-3 sm:p-4 rounded-2xl hover:bg-white/5 border border-transparent hover:border-white/15 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-3 sm:gap-6">
                      <span className="font-mono text-xs sm:text-sm text-emerald-400 font-bold w-6">
                        {link.num}.
                      </span>
                      <div>
                        <h4 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-emerald-400 transition-colors tracking-tight font-sans">
                          {link.label}
                        </h4>
                        <p className="text-[11px] sm:text-xs text-zinc-400 font-mono mt-0.5">
                          {link.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-zinc-600 group-hover:text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                  </motion.a>
                ))}
              </div>

              {/* Right: Quick System Dispatch & Credentials */}
              <div className="lg:col-span-4 flex flex-col justify-center space-y-5 lg:border-l lg:border-white/10 lg:pl-10">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#141f36] border border-white/15 space-y-4 shadow-xl">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    Direct Ingress
                  </span>
                  <div>
                    <p className="text-xs text-zinc-400 font-mono">Primary Email:</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-mono text-white font-bold hover:text-emerald-400 transition-colors break-all"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                    <a
                      href={PERSONAL_INFO.resumePdf}
                      download="ArnabSaha_Resume.pdf"
                      className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                    >
                      <FileDown className="w-4 h-4" />
                      <span>Download Official Resume (PDF)</span>
                    </a>

                    <div className="grid grid-cols-2 gap-2 pt-1 font-mono text-xs">
                      <a
                        href={PERSONAL_INFO.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 flex items-center justify-center gap-2 transition-colors"
                      >
                        <GithubIcon className="w-4 h-4 text-zinc-300" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={PERSONAL_INFO.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 flex items-center justify-center gap-2 transition-colors"
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
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-mono text-zinc-400 gap-2">
              <span>PRESS ESCAPE KEY OR CLICK CLOSE</span>
              <span className="text-emerald-400 font-semibold">
                JVM STATUS: HEALTHY • 2026 EDITION
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
