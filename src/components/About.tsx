"use client";

import React from "react";
import Image from "next/image";
import {
  Server,
  Database,
  Cloud,
  ShieldAlert,
  GraduationCap,
  MapPin,
  Terminal,
  CheckCircle,
  Briefcase,
} from "lucide-react";
import { EDUCATION, PERSONAL_INFO } from "@/data/portfolioData";

export default function About() {
  const engineeringPillars = [
    {
      icon: <Server className="w-4 h-4 text-emerald-400" />,
      title: "Scalable REST APIs & Microservices",
      desc: "Architecting decoupled, stateless Spring Boot microservices with idempotent endpoints, strict schema validation, and predictable error contracts.",
    },
    {
      icon: <Database className="w-4 h-4 text-sky-400" />,
      title: "Database Performance & Profiling",
      desc: "Optimizing relational data access via execution plans, eliminating N+1 fetch cascades in Hibernate/JPA, and crafting custom composite indexes for high-throughput reads.",
    },
    {
      icon: <ShieldAlert className="w-4 h-4 text-amber-400" />,
      title: "Production Reliability & Concurrency",
      desc: "Safeguarding critical paths with atomic database locks (pessimistic/optimistic), connection pool hygiene via HikariCP, and structured log correlation.",
    },
    {
      icon: <Cloud className="w-4 h-4 text-purple-400" />,
      title: "Cloud & Containerized Deployments",
      desc: "Packaging services into minimal Alpine-based Docker images, standardizing CI/CD pipelines, and deploying reproducible workloads across Microsoft Azure.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0d1424] border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Behind the APIs
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
            About Arnab Saha
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed font-sans">
            Production backend systems are defined by resilience, data consistency, and low latency under peak load. Here is how I engineer services for scale.
          </p>
        </div>

        {/* Content Layout with Profile Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Portrait Photo & Quick Facts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-4 rounded-2xl bg-[#141f36] border border-white/15 shadow-2xl relative overflow-hidden group">
              {/* Photo Container */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-white/10 shadow-inner">
                <Image
                  src="/arnab_profile.jpeg"
                  alt="Arnab Saha - Java Backend Engineer"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-60" />

                {/* Image overlay badge */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-[#0b1120]/90 backdrop-blur-md border border-white/15">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-white font-sans">
                        Arnab Saha
                      </h4>
                      <p className="text-[11px] font-mono text-emerald-400">
                        Backend Engineer @ Accenture
                      </p>
                    </div>
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Quick Info Below Photo */}
              <div className="mt-4 pt-3 border-t border-white/10 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">Location:</span>
                  <span className="text-white font-semibold flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" /> Kolkata, India
                  </span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">Experience:</span>
                  <span className="text-emerald-300 font-semibold">~2 Years Production</span>
                </div>
                <div className="flex items-center justify-between text-zinc-300">
                  <span className="text-zinc-400">Core Specialty:</span>
                  <span className="text-sky-300 font-semibold">Java & Spring Boot</span>
                </div>
              </div>
            </div>

            {/* Education Sub-card */}
            <div className="p-5 rounded-2xl bg-[#141f36] border border-white/15 shadow-xl flex items-start gap-4">
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 shrink-0 text-emerald-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-semibold">
                    {EDUCATION.period}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    {EDUCATION.location}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">
                  {EDUCATION.degree}
                </h4>
                <p className="text-xs text-emerald-400 font-mono">
                  {EDUCATION.institution}
                </p>
                <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                  {EDUCATION.focus}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Engineering Pillars */}
          <div className="lg:col-span-8 space-y-6">
            {/* White-contrast Header Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#141f36] border border-white/15 shadow-2xl space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white text-slate-950 text-xs font-bold font-mono">
                  PRODUCTION FOCUS
                </span>
                <span className="text-xs font-mono text-zinc-300">
                  Java 17/21 LTS • Spring Ecosystem
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                Engineering reliable microservices and high-throughput APIs.
              </h3>

              <div className="space-y-3 text-sm text-zinc-200 leading-relaxed font-sans">
                <p>
                  As a Java Backend Engineer based in <span className="text-white font-semibold">Kolkata, India</span>, I design and maintain mission-critical backend services using <span className="text-emerald-400 font-semibold font-mono">Java 17/21</span> and <span className="text-emerald-400 font-semibold font-mono">Spring Boot</span>.
                </p>
                <p>
                  During my tenure at <span className="text-white font-semibold">Accenture</span> as an Associate Software Engineer, my primary focus has been engineering 15+ high-availability microservices processing over 10,000 synchronous requests per minute, tuning JPA/Hibernate queries to trim database latency by ~22%, and dockerizing client utilities to streamline deployment setups by 40%.
                </p>
                <p>
                  I treat backend architecture as an engineering discipline centered on system health: connection pool sizing, transactional isolation levels, race-condition mitigation, and distributed log observability.
                </p>
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                {["Kolkata, India", "Java 17/21 LTS", "Spring Boot 3.x", "HikariCP", "Docker Engine", "Microsoft Azure"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 rounded-md bg-[#1e293b] text-white border border-white/15 font-medium shadow-sm"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-2">
                Core Architectural Pillars
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {engineeringPillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-[#141f36] border border-white/15 hover:border-emerald-400/50 transition-all group shadow-md"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-2 rounded-lg bg-[#1e293b] border border-white/10 group-hover:border-emerald-400/50 transition-colors">
                        {pillar.icon}
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
