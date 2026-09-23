"use client";

import React, { useEffect, useState, useRef } from "react";
import { ENGINEERING_METRICS } from "@/data/portfolioData";
import { Gauge, Activity, ShieldCheck, Zap, Database, Clock } from "lucide-react";

interface CounterProps {
  end: number;
  suffix: string;
  duration?: number;
  inView: boolean;
}

function Counter({ end, suffix, duration = 1800, inView }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration / 25);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [end, duration, inView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metricIcons = [
    <Zap key="1" className="w-4 h-4 text-emerald-600" />,
    <Activity key="2" className="w-4 h-4 text-sky-600" />,
    <Gauge key="3" className="w-4 h-4 text-amber-600" />,
    <ShieldCheck key="4" className="w-4 h-4 text-indigo-600" />,
    <Database key="5" className="w-4 h-4 text-teal-600" />,
    <Clock key="6" className="w-4 h-4 text-emerald-600" />,
  ];

  return (
    <section
      id="engineering"
      ref={sectionRef}
      className="py-16 md:py-24 bg-[#f8fafc] border-b border-slate-200 relative text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Whitish Theme */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 uppercase tracking-widest mb-1.5 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              Production Observability
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Documented Engineering Metrics
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-mono mt-2 sm:mt-0 font-medium">
            Telemetry from enterprise backend deployments (~2 years)
          </p>
        </div>

        {/* Metrics Grid with Clean Whitish Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_METRICS.map((metric, idx) => (
            <div
              key={metric.label}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-emerald-500/60 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-slate-100 text-slate-800 font-bold border border-slate-200">
                    {metric.tag}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 shadow-inner">
                    {metricIcons[idx % metricIcons.length]}
                  </div>
                </div>

                {/* Counter Display */}
                <div className="text-3xl sm:text-4xl font-black font-mono text-slate-950 tracking-tight group-hover:text-emerald-600 transition-colors">
                  <Counter
                    end={metric.value}
                    suffix={metric.suffix}
                    inView={inView}
                  />
                </div>

                <h3 className="text-base font-bold text-slate-900 mt-2 font-sans">
                  {metric.label}
                </h3>
              </div>

              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed pt-3 border-t border-slate-100 font-sans font-medium">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
