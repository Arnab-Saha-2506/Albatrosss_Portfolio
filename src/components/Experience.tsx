"use client";

import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Terminal,
  Activity,
} from "lucide-react";
import { EXPERIENCE_ITEMS } from "@/data/portfolioData";

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 uppercase tracking-widest mb-2 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Production Experience
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-sans">
            Enterprise backend engineering at scale (~2 years), focused on microservices reliability, JPA latency optimization, and automated container workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-300 space-y-12">
          {EXPERIENCE_ITEMS.map((item, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div key={item.company} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[37px] sm:-left-[45px] top-1.5 w-8 h-8 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center shadow-md">
                  <Briefcase className="w-4 h-4 text-emerald-600" />
                </div>

                {/* Card Container with Whitish Theme */}
                <div className="rounded-2xl bg-white border border-slate-200 hover:border-emerald-500/60 transition-all duration-300 overflow-hidden shadow-lg">
                  {/* Card Header (Clickable) */}
                  <div
                    onClick={() => toggleExpand(idx)}
                    className="p-6 sm:p-7 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none bg-white hover:bg-slate-50/80 transition-colors"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 mb-1.5">
                        <span className="text-xl sm:text-2xl font-black text-slate-900 font-sans">
                          {item.company}
                        </span>
                        <span className="text-slate-400">•</span>
                        <span className="text-sm sm:text-base font-bold text-emerald-700 font-mono">
                          {item.role}
                        </span>
                        <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold border border-slate-200">
                          {item.type}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-slate-400" />
                          {item.duration}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-slate-400" />
                          {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <span className="text-xs font-mono text-slate-600 hidden sm:inline-block font-semibold">
                        {isExpanded ? "Collapse highlights" : "Expand highlights"}
                      </span>
                      <div className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 group-hover:text-emerald-700 transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Summary row */}
                  <div className="px-6 sm:px-7 pb-4 text-sm text-slate-700 border-b border-slate-100 font-sans leading-relaxed">
                    {item.overview}
                  </div>

                  {/* Tech stack badges */}
                  <div className="px-6 sm:px-7 py-3.5 bg-slate-50/70 flex flex-wrap gap-1.5 items-center">
                    <span className="text-xs font-mono text-slate-500 mr-2 uppercase tracking-wide font-bold">
                      Stack:
                    </span>
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white text-slate-800 border border-slate-200 font-semibold shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Content Area */}
                  {isExpanded && (
                    <div className="p-6 sm:p-7 bg-slate-50/50 border-t border-slate-200 space-y-4 animate-in fade-in duration-200">
                      <h4 className="text-xs font-mono text-emerald-700 uppercase tracking-wider flex items-center gap-1.5 font-bold">
                        <Activity className="w-3.5 h-3.5" />
                        Documented Engineering Contributions & Impact
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
                        {item.highlights.map((highlight, hIdx) => (
                          <div
                            key={hIdx}
                            className="p-4 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/50 transition-all flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 shadow-sm"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed font-sans">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Engineering Context Box */}
                      <div className="mt-4 p-4 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm">
                        <div className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span className="font-medium">
                            Key Focus: Latency optimization (-22%) • Microservice decoupling • Concurrency control
                          </span>
                        </div>
                        <span className="text-xs text-white bg-emerald-600 font-bold px-3 py-1 rounded-full shrink-0 shadow-sm">
                          Accenture Production SLA
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
