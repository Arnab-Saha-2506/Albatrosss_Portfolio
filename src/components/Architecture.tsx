"use client";

import React, { useState } from "react";
import {
  Server,
  Database,
  ShieldCheck,
  Zap,
  Activity,
  ArrowDown,
  Layers,
  Lock,
  Search,
  Cpu,
  Boxes,
  LineChart,
} from "lucide-react";

interface ArchConcept {
  id: string;
  name: string;
  tagline: string;
  principles: string[];
  techUsed: string;
}

export default function Architecture() {
  const [selectedConcept, setSelectedConcept] = useState<string>("api-design");

  const concepts: Record<string, ArchConcept> = {
    "api-design": {
      id: "api-design",
      name: "API Design & Contracts",
      tagline: "Predictable, idempotent, and versioned REST interfaces",
      principles: [
        "Strict JSON Schema validation on ingress requests using Bean Validation (@Valid, @NotNull).",
        "Idempotent semantics: GET/PUT/DELETE remain safe under network retries.",
        "Uniform Problem Details (RFC 7807) error envelopes preventing internal stack trace leaks.",
        "Clear resource URIs with pagination headers (Pageable) to eliminate unbounded memory loads.",
      ],
      techUsed: "Spring MVC, OpenAPI / Swagger, Bean Validation",
    },
    caching: {
      id: "caching",
      name: "Caching Strategy",
      tagline: "Minimizing database strain for high-frequency reads",
      principles: [
        "Cache-aside pattern for regional queries with TTL-based expiration.",
        "Hibernate 2nd-level cache and in-memory caches for static metadata (e.g. metro stations).",
        "Cache stampede mitigation using synchronized population locks.",
        "Conditional HTTP caching using ETags and Cache-Control headers.",
      ],
      techUsed: "Spring Cache Abstraction, Caffeine, Redis Ready",
    },
    indexing: {
      id: "indexing",
      name: "Database Indexing & Query Plans",
      tagline: "Eliminating full-table scans through composite B-Trees",
      principles: [
        "Profiling execution plans via `EXPLAIN ANALYZE` before promoting migrations to production.",
        "Composite indexing ordered by equality columns followed by range columns (Leftmost Prefix Rule).",
        "Spatial bounding-box indexing for geospatial queries in PujaPath.",
        "Careful index hygiene to prevent write amplification on high-churn tables.",
      ],
      techUsed: "MySQL 8.0, B-Tree Indexes, JPA @Index",
    },
    concurrency: {
      id: "concurrency",
      name: "Concurrency & Data Consistency",
      tagline: "Preventing race conditions and double-bookings under load",
      principles: [
        "Pessimistic locking (`PESSIMISTIC_WRITE`) during atomic state transitions in Slotify.",
        "Optimistic locking using `@Version` fields for high-read low-conflict domain records.",
        "HikariCP connection pool tuning to match hardware CPU core counts avoiding thread thrashing.",
        "Spring `@Transactional` boundaries scoped strictly to business logic.",
      ],
      techUsed: "JPA Locking, HikariCP, ACID Isolation Levels",
    },
    authentication: {
      id: "authentication",
      name: "Authentication & Security",
      tagline: "Stateless verification with granular authorization",
      principles: [
        "Stateless JWT filter interceptors verifying cryptographic signatures per request.",
        "Spring Security filter chain customization with Role-Based Access Control (RBAC).",
        "CORS and CSRF policies tuned for decoupled backend microservices.",
        "Environment-based secret management preventing credential leakage into repositories.",
      ],
      techUsed: "Spring Security, JJWT, BCrypt, Azure Key Vault",
    },
    observability: {
      id: "observability",
      name: "Observability & Logging",
      tagline: "Deep telemetry and distributed correlation across services",
      principles: [
        "Structured JSON logging with Mapped Diagnostic Context (MDC) tracing correlation IDs.",
        "Spring Boot Actuator health checks and readiness probes for container orchestration.",
        "JVM heap, GC, and thread metrics collection to preempt memory leaks.",
        "Application log parsing used to identify slow database queries and trim latency by 22%.",
      ],
      techUsed: "Spring Boot Actuator, Logback, SLF4J, Micrometer",
    },
    scalability: {
      id: "scalability",
      name: "Scalability & Resilience",
      tagline: "Graceful degradation under 10K+ sync req/minute",
      principles: [
        "Stateless service instances allowing horizontal autoscaling behind reverse proxies.",
        "Graceful shutdown hooks to drain in-flight requests during rolling deployments.",
        "Containerized with Alpine JRE Docker images for instant container warm-up times.",
        "Decoupled asynchronous execution via `@Async` for non-blocking notifications.",
      ],
      techUsed: "Docker, Azure App Services, Java Virtual Threads",
    },
  };

  const active = concepts[selectedConcept] || concepts["api-design"];

  return (
    <section id="architecture" className="py-20 md:py-28 bg-[#0a0e16] border-b border-[#212d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            System Design & Engineering Mindset
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            How I Think About Systems
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed">
            Reliable backend engineering is the discipline of managing state transitions, concurrency, and network boundaries without compromising predictability.
          </p>
        </div>

        {/* Visual Architecture Flow & Concept Detail Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Visual Tiered Architecture Diagram */}
          <div className="lg:col-span-6 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center justify-between">
              <span>Standard Tiered Architecture</span>
              <span className="text-emerald-400">Strict Separation</span>
            </h3>

            {/* Diagram Stack */}
            <div className="space-y-3 font-mono text-xs">
              {/* Layer 1: Client */}
              <div className="p-4 rounded-xl bg-[#0e131d] border border-[#212d42] flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#141c2a] text-sky-400">
                    <Boxes className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Client Tier</h4>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      Web, Mobile, External Microservices (HTTP / JSON)
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#162030] text-zinc-400 border border-[#273852]">
                  Ingress
                </span>
              </div>

              <div className="flex justify-center text-zinc-600">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>

              {/* Layer 2: API Gateway */}
              <div className="p-4 rounded-xl bg-[#0e131d] border border-sky-500/30 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#141c2a] text-sky-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sky-300">API Gateway</h4>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      SSL Termination, Rate Limiting, JWT Validation
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/30">
                  Reverse Proxy
                </span>
              </div>

              <div className="flex justify-center text-zinc-600">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Layer 3: Spring Boot Services / Controllers */}
              <div className="p-4 rounded-xl bg-[#0e131d] border border-emerald-500/40 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#141c2a] text-emerald-400">
                    <Server className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-emerald-300">Spring Boot Services</h4>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      REST Controllers, Request Validation, DTO Serialization
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  Java 17/21
                </span>
              </div>

              <div className="flex justify-center text-zinc-600">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Layer 4: Service Layer (Business Logic & Transactions) */}
              <div className="p-4 rounded-xl bg-[#0e131d] border border-amber-500/30 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#141c2a] text-amber-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-300">Service Layer</h4>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      Transactional Boundaries (@Transactional), Concurrency Locks
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  Domain Core
                </span>
              </div>

              <div className="flex justify-center text-zinc-600">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Layer 5: Repository Layer (JPA / Hibernate) */}
              <div className="p-4 rounded-xl bg-[#0e131d] border border-purple-500/30 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#141c2a] text-purple-400">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-300">Repository Layer</h4>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      Spring Data JPA, Hibernate ORM, HikariCP Connection Pool
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/30">
                  Data Access
                </span>
              </div>

              <div className="flex justify-center text-zinc-600">
                <ArrowDown className="w-4 h-4" />
              </div>

              {/* Layer 6: Persistence Store */}
              <div className="p-4 rounded-xl bg-[#0e131d] border border-teal-500/30 flex items-center justify-between shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#141c2a] text-teal-400">
                    <Database className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-teal-300">MySQL / MongoDB</h4>
                    <p className="text-[11px] text-zinc-400 font-sans">
                      ACID Isolation, B-Tree Indexes, Document Aggregations
                    </p>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  Persistent DB
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Principles Selector & Detail */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
              Explore Architectural Principles
            </h3>

            {/* Concept Pills */}
            <div className="flex flex-wrap gap-2">
              {Object.values(concepts).map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcept(c.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                    selectedConcept === c.id
                      ? "bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/20"
                      : "bg-[#0e131d] text-zinc-300 border border-[#212d42] hover:border-zinc-500 hover:text-white"
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Selected Principle Detail Box */}
            <div className="p-6 rounded-2xl bg-[#0c1017] border border-[#212d42] shadow-2xl space-y-5 animate-in fade-in duration-200">
              <div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  CORE TENET
                </span>
                <h4 className="text-2xl font-bold text-white mt-2">
                  {active.name}
                </h4>
                <p className="text-xs sm:text-sm text-emerald-400 font-mono mt-0.5">
                  &ldquo;{active.tagline}&rdquo;
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                  Production Implementation Rules:
                </h5>
                <ul className="space-y-2.5">
                  {active.principles.map((pr, pIdx) => (
                    <li
                      key={pIdx}
                      className="p-3 rounded-lg bg-[#080b11] border border-[#1c273a] text-xs text-zinc-300 flex items-start gap-2.5 leading-relaxed"
                    >
                      <span className="text-emerald-400 font-mono font-bold">
                        0{pIdx + 1}.
                      </span>
                      <span>{pr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[#1c273a] flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-400">Technologies Applied:</span>
                <span className="text-emerald-300 font-medium">
                  {active.techUsed}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
