"use client";

import React, { useState } from "react";
import { Terminal as TerminalIcon, CornerDownLeft, Sparkles, RotateCcw } from "lucide-react";

interface TerminalHistoryItem {
  command: string;
  output: React.ReactNode;
}

export default function TerminalSection() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalHistoryItem[]>([
    {
      command: "status",
      output: (
        <div className="space-y-1 text-emerald-400">
          <p className="font-bold flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            SYSTEM STATUS: ONLINE
          </p>
          <p className="text-zinc-300 text-xs font-mono">
            Cluster: PROD-AZURE-EAST | Health: 100% | Uptime: 99.98% | Active Nodes: 4
          </p>
        </div>
      ),
    },
  ]);

  const presetCommands = [
    "java --version",
    "spring --info",
    "docker ps",
    "status",
    "help",
  ];

  const executeCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "java --version":
        output = (
          <div className="space-y-1 text-zinc-200">
            <p className="text-emerald-400 font-bold">
              openjdk 21.0.2 2024-01-16 LTS
            </p>
            <p>OpenJDK Runtime Environment (build 21.0.2+13-LTS)</p>
            <p>
              OpenJDK 64-Bit Server VM (build 21.0.2+13-LTS, mixed mode, sharing)
            </p>
            <p className="text-xs text-zinc-400">
              * Also proficient in OpenJDK 17 LTS enterprise production runtimes.
            </p>
          </div>
        );
        break;

      case "spring --info":
        output = (
          <div className="space-y-2 text-zinc-200">
            <p className="text-emerald-400 font-bold">
              Spring Boot Framework Architecture
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
              <div className="p-2.5 rounded-xl bg-[#141f36] border border-white/15">
                <span className="text-emerald-400 font-bold">
                  Spring Boot 3.x
                </span>
                <p className="text-zinc-300">
                  Microservices, Autoconfiguration, Embedded Tomcat
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141f36] border border-white/15">
                <span className="text-sky-400 font-bold">
                  Spring Security 6.x
                </span>
                <p className="text-zinc-300">
                  Stateless JWT filters, OAuth2 Resource Server, RBAC
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141f36] border border-white/15">
                <span className="text-amber-400 font-bold">
                  Spring Data JPA
                </span>
                <p className="text-zinc-300">
                  Hibernate ORM, HikariCP connection pooling, Custom Repos
                </p>
              </div>
              <div className="p-2.5 rounded-xl bg-[#141f36] border border-white/15">
                <span className="text-purple-400 font-bold">
                  Spring Cloud
                </span>
                <p className="text-zinc-300">
                  Gateway routing, Service discovery, Circuit breaking
                </p>
              </div>
            </div>
          </div>
        );
        break;

      case "docker ps":
        output = (
          <div className="overflow-x-auto text-xs font-mono">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-zinc-400 border-b border-white/15">
                  <th className="pb-1.5 pr-4">CONTAINER ID</th>
                  <th className="pb-1.5 pr-4">IMAGE</th>
                  <th className="pb-1.5 pr-4">STATUS</th>
                  <th className="pb-1.5 pr-4">PORTS</th>
                  <th className="pb-1.5">NAMES</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-zinc-200">
                <tr>
                  <td className="py-2 pr-4 text-emerald-400 font-bold">c89e21df91a4</td>
                  <td className="py-2 pr-4">backend-service:2.1</td>
                  <td className="py-2 pr-4 text-emerald-400">Up 14 days (healthy)</td>
                  <td className="py-2 pr-4">0.0.0.0:8080-&gt;8080/tcp</td>
                  <td className="py-2 text-white font-bold">backend-service</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-emerald-400 font-bold">f210a48b9901</td>
                  <td className="py-2 pr-4">api-gateway:latest</td>
                  <td className="py-2 pr-4 text-emerald-400">Up 14 days (healthy)</td>
                  <td className="py-2 pr-4">0.0.0.0:443-&gt;8443/tcp</td>
                  <td className="py-2 text-white font-bold">api-gateway</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 text-emerald-400 font-bold">33a9bf028dc7</td>
                  <td className="py-2 pr-4">mysql:8.0-optimized</td>
                  <td className="py-2 pr-4 text-emerald-400">Up 32 days (healthy)</td>
                  <td className="py-2 pr-4">0.0.0.0:3306-&gt;3306/tcp</td>
                  <td className="py-2 text-white font-bold">database-service</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
        break;

      case "status":
        output = (
          <div className="space-y-1 text-emerald-400">
            <p className="font-bold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              SYSTEM STATUS: ONLINE
            </p>
            <p className="text-zinc-300 text-xs font-mono">
              Cluster: PROD-AZURE-EAST | Health: 100% | Uptime: 99.98% | Active Nodes: 4
            </p>
          </div>
        );
        break;

      case "help":
        output = (
          <div className="space-y-1.5 text-xs text-zinc-200">
            <p className="text-emerald-400 font-bold">Available Commands:</p>
            <p className="font-mono text-zinc-300">
              <span className="text-white font-bold">java --version</span> - Check JVM runtime release specifications
            </p>
            <p className="font-mono text-zinc-300">
              <span className="text-white font-bold">spring --info</span> - View active Spring Boot modules & stack
            </p>
            <p className="font-mono text-zinc-300">
              <span className="text-white font-bold">docker ps</span> - List running production container services
            </p>
            <p className="font-mono text-zinc-300">
              <span className="text-white font-bold">status</span> - Query real-time system health and telemetry
            </p>
            <p className="font-mono text-zinc-300">
              <span className="text-white font-bold">clear</span> - Flush the terminal console window
            </p>
          </div>
        );
        break;

      default:
        output = (
          <div className="text-xs text-amber-300">
            command not found: {trimmed}. Type &quot;help&quot; or click one of the suggested command pills above.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  return (
    <section id="terminal" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Whitish Canvas */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 uppercase tracking-widest mb-2 font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            Interactive Shell
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Backend Command Terminal
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-sans">
            Directly probe runtime configurations, container state, and Spring architecture. Click predefined commands below or run them in the shell.
          </p>
        </div>

        {/* Command Pill Quick Actions (Clean Whitish Style) */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-600 mr-1 flex items-center gap-1.5 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            Quick Run:
          </span>
          {presetCommands.map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-500/60 hover:bg-slate-50 text-slate-800 text-xs font-mono font-bold transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              $ {cmd}
            </button>
          ))}
          <button
            onClick={() => setHistory([])}
            className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 hover:border-slate-400 text-slate-600 hover:text-slate-900 text-xs font-mono flex items-center gap-1.5 transition-all ml-auto shadow-sm cursor-pointer"
            title="Clear terminal output"
          >
            <RotateCcw className="w-3 h-3" />
            <span>clear</span>
          </button>
        </div>

        {/* Terminal Window Box with Deep Studio Console Framing */}
        <div className="rounded-2xl overflow-hidden bg-[#090e1a] border border-slate-300 shadow-2xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#131d31] border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/90" />
              <div className="w-3 h-3 rounded-full bg-amber-500/90" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-200">
              <TerminalIcon className="w-4 h-4 text-emerald-400" />
              <span className="font-bold text-white">arnab@backend-engineer:~$</span>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 hidden sm:block">
              zsh / bash (interactive)
            </div>
          </div>

          {/* Terminal Console Output Scroll Area */}
          <div className="p-6 font-mono text-xs sm:text-sm bg-[#080c16] space-y-4 max-h-[420px] overflow-y-auto">
            <div className="text-zinc-400 text-xs pb-2 border-b border-white/10">
              Type &apos;help&apos; to view all available commands or click the buttons above.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5 animate-in fade-in duration-150">
                <div className="flex items-center gap-2 text-zinc-200">
                  <span className="text-emerald-400 font-bold">
                    arnab@backend-engineer:~$
                  </span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4 border-l-2 border-white/15 py-1 text-zinc-200">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Live Interactive Input Line */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 pt-2">
              <span className="text-emerald-400 font-bold shrink-0">
                arnab@backend-engineer:~$
              </span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="type command (e.g. spring --info, docker ps, status)..."
                className="flex-1 bg-transparent border-none outline-none text-white font-mono text-xs sm:text-sm placeholder-zinc-500 focus:ring-0 p-0 font-medium"
                autoComplete="off"
                spellCheck={false}
              />
              <button
                type="submit"
                className="p-1.5 rounded-lg bg-white/10 border border-white/20 text-zinc-200 hover:text-white hover:bg-white/20 cursor-pointer"
                aria-label="Execute command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
