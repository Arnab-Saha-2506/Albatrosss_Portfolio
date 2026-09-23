"use client";

import React from "react";
import {
  GitFork,
  Star,
  ExternalLink,
  Code2,
  FolderGit2,
  GitBranch,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function GithubSection() {
  const featuredRepos = [
    {
      name: "PujaPath",
      desc: "Kolkata Durga Puja discovery and navigation platform backend with geospatial radial distance calculations and metro transit mappings.",
      language: "Java",
      languageColor: "#b07219",
      url: "https://github.com/Arnab-Saha-2506",
      tag: "Backend Service",
    },
    {
      name: "Slotify",
      desc: "Calendly-inspired appointment scheduling backend with dynamic time slot generation and pessimistic concurrency locking against double bookings.",
      language: "Java",
      languageColor: "#b07219",
      url: "https://github.com/Arnab-Saha-2506",
      tag: "Concurrency Engine",
    },
    {
      name: "care4you-hospital-management-system",
      desc: "Online hospital management and healthcare record backend services with role-based access control and patient record persistence.",
      language: "Java",
      languageColor: "#b07219",
      url: "https://github.com/Arnab-Saha-2506/care4you-hospital-management-system",
      tag: "Enterprise System",
    },
    {
      name: "Albatrosss_Portfolio",
      desc: "Command-center personal portfolio engineered with Next.js, TypeScript, Tailwind CSS, and telemetry dashboards.",
      language: "TypeScript",
      languageColor: "#3178c6",
      url: "https://github.com/Arnab-Saha-2506/Albatrosss_Portfolio",
      tag: "Portfolio Core",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#0a0e16] border-b border-[#212d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-[#212d42]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Source Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              GitHub Repositories & Code
            </h2>
          </div>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 mt-2 sm:mt-0 group"
          >
            <span>@Arnab-Saha-2506 on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-xl bg-[#0e131d] border border-[#212d42] hover:border-emerald-500/50 hover:bg-[#121926] transition-all flex flex-col justify-between group shadow-lg"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-emerald-400" />
                    <h3 className="text-base font-bold text-white font-mono group-hover:text-emerald-400 transition-colors">
                      {repo.name}
                    </h3>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#162030] text-zinc-300 border border-[#273852]">
                    {repo.tag}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {repo.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#1c273a] flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: repo.languageColor }}
                  />
                  <span>{repo.language}</span>
                </div>

                <div className="flex items-center gap-1 text-emerald-400 group-hover:text-emerald-300 text-xs">
                  <span>View Source</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
