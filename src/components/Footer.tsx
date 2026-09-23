"use client";

import React, { useEffect, useState } from "react";
import { Terminal, Activity, ArrowUp, Cpu } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const [latency, setLatency] = useState(24);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate micro fluctuations in ping latency
      setLatency(20 + Math.floor(Math.random() * 12));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#06080d] border-t border-[#1c273a] text-zinc-400 py-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#1c273a]">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-bold text-sm">
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>ARNAB SAHA // BACKEND ENGINEER</span>
            </div>
            <p className="text-zinc-500 font-sans text-xs">
              Java Backend Engineer • Spring Boot • Microservices • Cloud
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-zinc-400 text-xs">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e131d] border border-[#212d42]">
              <Activity className="w-3.5 h-3.5 text-emerald-400" />
              <span>Ping: {latency}ms</span>
            </div>

            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e131d] border border-[#212d42]">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span>JVM Heap: 64MB / 512MB</span>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded bg-[#0e131d] border border-[#212d42] hover:border-emerald-500 text-zinc-300 hover:text-white transition-colors"
              aria-label="Back to top"
              title="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            <p>© 2026 Arnab Saha. All rights reserved.</p>
            <p className="text-zinc-400 mt-0.5">
              Built with: <span className="text-emerald-400">Java mindset</span> × modern web technologies
            </p>
          </div>

          <div className="text-right italic text-zinc-400 font-sans">
            &ldquo;Designed for humans. Built for scale.&rdquo;
          </div>
        </div>
      </div>
    </footer>
  );
}
