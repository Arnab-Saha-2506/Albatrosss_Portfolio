"use client";

import React, { useState, useEffect } from "react";
import {
  FileDown,
  FolderGit2,
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  CheckCircle2,
  Activity,
  Server,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { useResumeModal } from "@/context/ResumeModalContext";

export default function Hero() {
  const { openResumeModal } = useResumeModal();
  const terminalLines = [
    { text: "$ java ArnabSaha", delay: 250, type: "cmd" },
    { text: "> Initializing backend engineer...", delay: 650, type: "system" },
    { text: "[✓] Java 17/21", delay: 1050, type: "check" },
    { text: "[✓] Spring Boot", delay: 1400, type: "check" },
    { text: "[✓] REST APIs", delay: 1750, type: "check" },
    { text: "[✓] JPA/Hibernate", delay: 2100, type: "check" },
    { text: "[✓] Docker", delay: 2450, type: "check" },
    { text: "[✓] Azure", delay: 2800, type: "check" },
    { text: "> System ready.", delay: 3200, type: "ready" },
  ];

  const [visibleCount, setVisibleCount] = useState<number>(0);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    terminalLines.forEach((line, index) => {
      const t = setTimeout(() => {
        setVisibleCount(index + 1);
      }, line.delay);
      timeouts.push(t);
    });

    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern border-b border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-sky-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* System Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-mono text-zinc-100 shadow-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400"></span>
              <span className="text-zinc-300">Environment:</span>
              <span className="text-emerald-400 font-semibold">PRODUCTION READY</span>
              <span className="text-zinc-500">|</span>
              <span className="text-white font-medium">JVM 21 LTS</span>
            </div>

            {/* Name & Role */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-sans drop-shadow-sm">
                {PERSONAL_INFO.name.toUpperCase()}
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl lg:text-3xl font-semibold text-emerald-400 font-mono">
                  {PERSONAL_INFO.role}
                </span>
                <span className="text-zinc-500 text-xl font-mono">•</span>
                <span className="text-xs sm:text-sm text-zinc-100 font-mono bg-white/10 px-3 py-1 rounded-md border border-white/20 shadow-sm">
                  ~2 yrs exp @ Accenture
                </span>
              </div>
            </div>

            {/* Headline Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {["Java", "Spring Boot", "Microservices", "Cloud"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs sm:text-sm font-mono bg-[#141f36] border border-white/15 text-white flex items-center gap-1.5 shadow-sm"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {tech}
                </span>
              ))}
            </div>

            {/* Description Statement */}
            <p className="text-base sm:text-lg text-zinc-200 max-w-2xl leading-relaxed border-l-2 border-emerald-400 pl-4 py-1 font-sans">
              &ldquo;{PERSONAL_INFO.bio}&rdquo;
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/25 active:scale-95"
              >
                <FolderGit2 className="w-4 h-4" />
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <button
                type="button"
                onClick={openResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-emerald-400 font-semibold text-sm transition-all active:scale-95 shadow-sm backdrop-blur-sm cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-emerald-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-zinc-400">CONNECT:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/15 hover:border-white/40 text-zinc-200 hover:text-white text-xs font-mono transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/5 border border-white/15 hover:border-blue-400/60 text-zinc-200 hover:text-blue-300 text-xs font-mono transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: JVM Boot Animation Terminal */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-2xl overflow-hidden bg-[#0c1322] border border-white/20 shadow-2xl shadow-black/80">
              {/* Terminal Window Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#131d31] border-b border-white/15">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                  <TerminalIcon className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="font-semibold text-white">jvm-bootstrap.sh</span>
                  <span className="text-zinc-500">— 80x24</span>
                </div>
                <div className="w-6" />
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs sm:text-sm min-h-[310px] space-y-2.5 bg-[#090e1a]">
                {terminalLines.slice(0, visibleCount).map((line, idx) => (
                  <div
                    key={idx}
                    className={`transition-opacity duration-200 ${
                      line.type === "cmd"
                        ? "text-white font-semibold flex items-center gap-2"
                        : line.type === "system"
                        ? "text-zinc-400 italic"
                        : line.type === "check"
                        ? "text-emerald-400 flex items-center gap-1 font-medium"
                        : "text-emerald-300 font-bold bg-emerald-950/60 p-2 rounded border border-emerald-500/40 flex items-center gap-2"
                    }`}
                  >
                    {line.type === "cmd" && <span className="text-emerald-400">▶</span>}
                    {line.type === "ready" && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                    <span>{line.text}</span>
                  </div>
                ))}

                {/* Blinking cursor */}
                <div className="flex items-center gap-1.5 text-zinc-400 pt-1">
                  <span className="text-emerald-400 font-semibold">$</span>
                  <span className="inline-block w-2.5 h-4 bg-emerald-400 animate-pulse" />
                </div>

                {/* Subtext info */}
                <div className="pt-4 mt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Arch: Microservices</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-sky-400" />
                    <span>Latency: ~45ms P95</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-amber-400" />
                    <span>Isolation: ACID / Hikari</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-purple-400" />
                    <span>Runtime: Containerized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
