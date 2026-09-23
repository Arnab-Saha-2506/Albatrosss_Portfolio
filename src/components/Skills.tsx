"use client";

import React, { useState } from "react";
import {
  Coffee,
  Database,
  Cloud,
  Cpu,
  Layers,
  Terminal,
  Code,
  ShieldCheck,
  Zap,
  Server,
  GitBranch,
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

export default function Skills() {
  // Removed "All" filter to eliminate clutter; defaulted to core "Backend"
  const [activeCategory, setActiveCategory] = useState<string>("Backend");

  const categoryIcons: Record<string, React.ReactNode> = {
    Backend: <Server className="w-4 h-4" />,
    Databases: <Database className="w-4 h-4" />,
    "Cloud & DevOps": <Cloud className="w-4 h-4" />,
    Programming: <Code className="w-4 h-4" />,
    Engineering: <Cpu className="w-4 h-4" />,
  };

  const currentCategory =
    SKILL_CATEGORIES.find((c) => c.name === activeCategory) ||
    SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0b1120] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Backend Stack & Core Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technology Ecosystem
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Engineered around the Java/Spring runtime with high-throughput database optimization, containerized cloud services, and production system design.
          </p>
        </div>

        {/* Java Centerpiece Hero Card with Dual-Tone Contrast */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#141f36] via-[#1a2948] to-[#141f36] border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Subtle JVM decorative element */}
          <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none">
            <Coffee className="w-64 h-64 text-emerald-400" />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#0b1120] border border-emerald-400/40 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/15">
                <Coffee className="w-8 h-8 text-emerald-400" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 font-bold">
                    CORE CENTERPIECE
                  </span>
                  <span className="text-xs font-mono text-zinc-300 font-medium">
                    Java 17 & 21 LTS
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Java & Spring Boot Core Engine
                </h3>
                <p className="text-xs sm:text-sm text-zinc-200 mt-1 max-w-2xl leading-relaxed">
                  Building high-availability microservices with Spring Data JPA, Spring Security, connection pool management via HikariCP, and deterministic RESTful contract designs.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="p-3.5 rounded-xl bg-[#0b1120]/80 border border-white/15 font-mono text-xs text-zinc-200 backdrop-blur-sm shadow-md">
                <div className="text-emerald-400 font-bold mb-0.5">JVM Profiling</div>
                <div className="text-[11px] text-zinc-300">Heap • JIT • Virtual Threads</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filters (Clean tabs without the messy 'All' option) */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 pb-4 border-b border-white/10">
          <span className="text-xs font-mono text-zinc-400 mr-2 uppercase tracking-wider font-semibold">
            Categories:
          </span>
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.name;

            return (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(cat.name)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 shadow-sm ${
                  isActive
                    ? "bg-white text-slate-950 font-bold shadow-lg shadow-white/10 scale-[1.02]"
                    : "bg-[#141f36] text-zinc-300 border border-white/15 hover:border-white/40 hover:text-white"
                }`}
              >
                <span className={isActive ? "text-emerald-600" : "text-emerald-400"}>
                  {categoryIcons[cat.name] || <Zap className="w-3.5 h-3.5" />}
                </span>
                <span>{cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded ${
                    isActive ? "bg-slate-200 text-slate-800" : "bg-black/30 text-zinc-400"
                  }`}
                >
                  {cat.skills.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Clean, Modern Skills Grid for Active Category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 animate-in fade-in duration-300">
          {currentCategory.skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-2xl bg-[#141f36] border border-white/15 hover:border-emerald-400/50 hover:bg-[#182542] transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-white font-mono group-hover:text-emerald-400 transition-colors">
                    {skill.name}
                  </h4>
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-200 border border-white/20 font-medium">
                    {skill.level}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                  {skill.desc}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <span>✓</span> Production Ready
                </span>
                <span className="text-zinc-400">{currentCategory.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
