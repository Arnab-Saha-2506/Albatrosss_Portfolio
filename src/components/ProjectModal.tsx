"use client";

import React, { useEffect } from "react";
import {
  X,
  ExternalLink,
  Layers,
  Database,
  Server,
  Zap,
  ShieldAlert,
  ArrowRight,
  GitBranch,
} from "lucide-react";
import { GithubIcon } from "./Icons";
import { Project } from "@/data/portfolioData";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop click */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-2xl bg-[#0c1017] border border-[#212d42] shadow-2xl z-10 overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 bg-[#080b11] border-b border-[#212d42] sticky top-0 z-20">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                ARCHITECTURE DEEP-DIVE
              </span>
              <span className="text-xs font-mono text-zinc-400">
                Spring Boot Backend
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
              {project.name}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">{project.tagline}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#141c2a] border border-[#212d42] text-zinc-400 hover:text-white hover:bg-[#1a2538] transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-8 font-sans text-sm">
          {/* Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#0e131d] border border-[#212d42] space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 flex items-center gap-1.5 font-semibold">
                <ShieldAlert className="w-4 h-4" />
                Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#0e131d] border border-[#212d42] space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 font-semibold">
                <Zap className="w-4 h-4" />
                Engineered Solution
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Visual Tiered Request Flow */}
          <div className="p-5 rounded-xl bg-[#080b11] border border-[#212d42] space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                End-to-End Request Flow Architecture
              </h4>
              <span className="text-[11px] font-mono text-zinc-400">
                Layered Separation of Concerns
              </span>
            </div>

            {/* Pipeline Visual */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#141c2a] border border-[#212d42] flex flex-col justify-center">
                <span className="text-sky-400 font-semibold">Client / App</span>
                <span className="text-[10px] text-zinc-400 mt-1">HTTP / JSON</span>
              </div>
              <div className="p-3 rounded-lg bg-[#162030] border border-[#273852] flex flex-col justify-center">
                <span className="text-emerald-400 font-semibold">REST Controller</span>
                <span className="text-[10px] text-zinc-400 mt-1">Validation & DTO</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141c2a] border border-[#212d42] flex flex-col justify-center">
                <span className="text-amber-400 font-semibold">Domain Service</span>
                <span className="text-[10px] text-zinc-400 mt-1">Business & Locks</span>
              </div>
              <div className="p-3 rounded-lg bg-[#162030] border border-[#273852] flex flex-col justify-center">
                <span className="text-purple-400 font-semibold">JPA Repository</span>
                <span className="text-[10px] text-zinc-400 mt-1">Queries & HikariCP</span>
              </div>
              <div className="p-3 rounded-lg bg-[#141c2a] border border-[#212d42] flex flex-col justify-center">
                <span className="text-teal-400 font-semibold">MySQL Store</span>
                <span className="text-[10px] text-zinc-400 mt-1">B-Tree Indexes</span>
              </div>
            </div>

            <p className="text-xs text-zinc-400 font-mono italic">
              {project.architecture}
            </p>
          </div>

          {/* Key Engineering Decisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <GitBranch className="w-4 h-4" />
              Key Backend Engineering Decisions
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.keyDecisions.map((decision, dIdx) => (
                <div
                  key={dIdx}
                  className="p-3.5 rounded-lg bg-[#0e131d] border border-[#212d42] text-xs text-zinc-300 flex items-start gap-2.5"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                  <span className="leading-relaxed">{decision}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Database Entities & Schema Model */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <Database className="w-4 h-4" />
              Relational Schema & Entity Model
            </h4>
            <div className="overflow-x-auto rounded-lg border border-[#212d42]">
              <table className="w-full text-xs font-mono text-left bg-[#080b11]">
                <thead>
                  <tr className="bg-[#121926] text-zinc-400 border-b border-[#212d42]">
                    <th className="p-2.5">Entity</th>
                    <th className="p-2.5">Key Attributes</th>
                    <th className="p-2.5">Relationships</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1c273a] text-zinc-300">
                  {project.databaseModel.map((model) => (
                    <tr key={model.entity}>
                      <td className="p-2.5 font-semibold text-emerald-300">
                        {model.entity}
                      </td>
                      <td className="p-2.5 text-zinc-300">{model.attributes}</td>
                      <td className="p-2.5 text-sky-300">{model.relations}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Important REST Endpoints */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <Server className="w-4 h-4" />
              Key REST API Contracts
            </h4>
            <div className="space-y-2 font-mono text-xs">
              {project.endpoints.map((ep, eIdx) => (
                <div
                  key={eIdx}
                  className="p-2.5 rounded bg-[#0e131d] border border-[#212d42] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        ep.method === "GET"
                          ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                          : ep.method === "POST"
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-rose-500/20 text-rose-300 border border-rose-500/30"
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-zinc-200">{ep.path}</span>
                  </div>
                  <span className="text-[11px] text-zinc-400 sm:text-right font-sans">
                    {ep.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Challenges & Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              Production Challenges & Solutions
            </h4>
            <div className="space-y-3">
              {project.challenges.map((c, cIdx) => (
                <div
                  key={cIdx}
                  className="p-3.5 rounded-lg bg-[#0e131d] border border-[#212d42] space-y-1.5 text-xs"
                >
                  <p className="text-rose-300 font-medium font-mono">
                    Challenge: {c.challenge}
                  </p>
                  <p className="text-zinc-300 leading-relaxed font-sans pl-2 border-l-2 border-emerald-500">
                    <span className="text-emerald-400 font-semibold font-mono">
                      Mitigation:{" "}
                    </span>
                    {c.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Considerations */}
          <div className="p-4 rounded-xl bg-[#090e16] border border-emerald-500/20 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Performance Considerations & Telemetry
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-300">
              {project.performance.map((perf, pIdx) => (
                <li key={pIdx} className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  <span>{perf}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer / Actions */}
        <div className="p-4 sm:p-6 bg-[#080b11] border-t border-[#212d42] flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs font-mono bg-[#141c2a] text-zinc-300 border border-[#212d42]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#141c2a] hover:bg-[#1a2538] text-zinc-200 border border-[#212d42] text-xs font-mono transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
            </a>
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-xs font-mono transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
