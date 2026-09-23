"use client";

import React, { useEffect, useState } from "react";
import {
  X,
  FileDown,
  ExternalLink,
  FileText,
  Loader2,
  Eye,
} from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-5xl h-[92vh] sm:h-[90vh] flex flex-col rounded-2xl bg-[#0c1017] border border-[#212d42] shadow-2xl z-10 overflow-hidden my-auto animate-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3.5 sm:px-6 sm:py-4 bg-[#080b11] border-b border-[#212d42] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold uppercase tracking-wider">
                  Resume Preview
                </span>
                <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                  2026 Edition
                </span>
              </div>
              <h3 className="text-sm sm:text-base font-bold text-white font-mono truncate mt-0.5">
                ArnabSaha_Resume.pdf
              </h3>
            </div>
          </div>

          {/* Action buttons in header */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Open in new tab */}
            <a
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141c2a] border border-[#212d42] hover:border-emerald-500/50 hover:bg-[#1a2538] text-zinc-300 hover:text-white text-xs font-mono font-medium transition-all"
              title="Open full PDF in new tab"
            >
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
              <span>Full Screen</span>
            </a>

            {/* Direct Download Button */}
            <a
              href={PERSONAL_INFO.resumePdf}
              download="ArnabSaha_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs shadow-md shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 rounded-xl bg-[#141c2a] border border-[#212d42] text-zinc-400 hover:text-white hover:bg-[#1a2538] transition-colors cursor-pointer"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Embedded PDF */}
        <div className="flex-1 w-full relative bg-[#131924] flex items-center justify-center overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0c1017] z-10 text-zinc-400">
              <Loader2 className="w-8 h-8 text-emerald-400 animate-spin" />
              <div className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>Rendering resume document...</span>
              </div>
            </div>
          )}

          <iframe
            src={`${PERSONAL_INFO.resumePdf}#toolbar=1&navpanes=0`}
            title="Arnab Saha Official Resume"
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
          />
        </div>

        {/* Footer info bar */}
        <div className="px-4 py-2.5 sm:px-6 bg-[#080b11] border-t border-[#212d42] flex items-center justify-between text-xs font-mono text-zinc-400 shrink-0">
          <span className="text-[11px] sm:text-xs truncate">
            Targeting: <span className="text-emerald-400 font-semibold">Java Backend Engineer • Spring Boot</span>
          </span>
          <a
            href={PERSONAL_INFO.resumePdf}
            download="ArnabSaha_Resume.pdf"
            className="text-emerald-400 hover:text-emerald-300 font-bold hover:underline shrink-0 text-[11px] sm:text-xs flex items-center gap-1"
          >
            <FileDown className="w-3 h-3" />
            Save to Device
          </a>
        </div>
      </div>
    </div>
  );
}
