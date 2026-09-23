"use client";

import React from "react";
import {
  ExternalLink,
  BookOpen,
  FolderGit2,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { PROJECTS } from "@/data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#0d1424] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-4 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Engineered Workloads
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Backend Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 font-mono mt-2 sm:mt-0">
            OpenAPI contracts, relational persistence, and production concurrency
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-[#141f36] border border-white/15 hover:border-emerald-400/50 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl group"
            >
              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6">
                {/* Header Tag & Title */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center gap-1.5 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Spring Boot Microservice
                    </span>
                    <span className="text-xs font-mono text-zinc-300 bg-white/10 px-2.5 py-0.5 rounded-md border border-white/15">
                      Java 17/21
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors font-sans">
                    {project.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono mt-0.5">
                    {project.tagline}
                  </p>
                </div>

                {/* Problem & Solution */}
                <div className="space-y-2 text-sm text-zinc-200 leading-relaxed font-sans">
                  <p>
                    <span className="text-white font-semibold">Problem: </span>
                    {project.problem}
                  </p>
                  <p>
                    <span className="text-white font-semibold">Solution: </span>
                    {project.solution}
                  </p>
                </div>

                {/* Key Backend Highlights */}
                <div className="space-y-2.5 pt-3 border-t border-white/10">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Key Engineering Decisions:
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-200">
                    {project.keyDecisions.slice(0, 3).map((kd, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{kd}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#1e293b] text-white border border-white/15 shadow-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer / Action Buttons */}
              <div className="p-6 bg-[#0b1120] border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                {/* Swagger API Docs Button (Replaced inspect architecture hyperlink as requested) */}
                <a
                  href={project.swaggerUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs font-mono transition-all shadow-md shadow-emerald-500/20 active:scale-95 group/btn"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Swagger API Docs</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                {/* GitHub & Live Demo Links */}
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-mono transition-colors font-medium"
                    aria-label={`View ${project.name} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-300" />
                    <span>GitHub</span>
                  </a>

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/15 text-xs font-mono transition-colors font-medium"
                      aria-label={`View ${project.name} Live Demo`}
                      title="Live Demo"
                    >
                      <span>Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* 
            PROJECT 3 — Spring AI Job Application Assistant 
            (Keep this commented out, Will add projects later)
            
            An AI-powered backend application designed to help users analyze job descriptions, 
            compare them with resumes and generate application insights.
            Tech: Java, Spring Boot, Spring AI, REST APIs, LLM integration
          */}
        </div>
      </div>
    </section>
  );
}
