"use client";

import React, { useState } from "react";
import { Code, Check, Copy, Terminal, ShieldCheck, Cpu } from "lucide-react";

export default function CodeSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const snippets = [
    {
      filename: "PandalController.java",
      title: "REST Controller & API Contract",
      badge: "Spring Web",
      code: `@RestController
@RequestMapping("/api/v1/pandals")
@Validated
public class PandalController {

    private final PandalService pandalService;

    public PandalController(PandalService pandalService) {
        this.pandalService = pandalService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<PandalResponse> getPandal(
            @PathVariable @NotNull @Positive Long id) {

        PandalResponse response = pandalService.getPandalById(id);
        return ResponseEntity.ok()
                .cacheControl(CacheControl.maxAge(Duration.ofMinutes(15)))
                .body(response);
    }
}`,
    },
    {
      filename: "PandalServiceImpl.java",
      title: "Geospatial Calculation & Read-Only Tx",
      badge: "Spring Data JPA",
      code: `@Service
@Transactional(readOnly = true)
public class PandalServiceImpl implements PandalService {

    private final PandalRepository pandalRepository;

    public PandalServiceImpl(PandalRepository pandalRepository) {
        this.pandalRepository = pandalRepository;
    }

    @Override
    public List<PandalGeoDTO> findNearbyPandals(Double lat, Double lng, Double radiusKm) {
        // Bounding-box pre-filtering prevents full-table table scans
        Double deltaLat = radiusKm / 111.0;
        Double deltaLng = radiusKm / (111.0 * Math.cos(Math.toRadians(lat)));

        return pandalRepository.findWithinBoundingBox(
                lat - deltaLat, lat + deltaLat,
                lng - deltaLng, lng + deltaLng,
                lat, lng, radiusKm
        );
    }
}`,
    },
    {
      filename: "SlotReservationService.java",
      title: "Pessimistic Concurrency Locking",
      badge: "ACID Concurrency",
      code: `@Service
public class SlotReservationService {

    private final SlotLockRepository lockRepo;
    private final BookingRepository bookingRepo;

    @Transactional(isolation = Isolation.READ_COMMITTED)
    public BookingConfirmation reserveSlot(Long providerId, Instant startUtc, String clientId) {
        // Enforces atomic row-level lock against concurrent double booking
        boolean locked = lockRepo.acquirePessimisticWriteLock(providerId, startUtc);
        if (!locked) {
            throw new SlotAlreadyReservedException("Slot currently held by another checkout transaction");
        }

        return bookingRepo.saveAndFlush(new Booking(providerId, startUtc, clientId));
    }
}`,
    },
  ];

  const currentSnippet = snippets[activeTab];

  const handleCopy = () => {
    navigator.clipboard.writeText(currentSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code" className="py-20 md:py-28 bg-[#080b11] border-b border-[#212d42]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Engineering Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Code I Like Writing
          </h2>
          <p className="mt-3 text-base text-zinc-300 leading-relaxed">
            Clean architectural boundaries, explicit transactional semantics, and defensive concurrency patterns.
          </p>
        </div>

        {/* Code Showcase & Architectural Manifesto */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Code Window with Tabs */}
          <div className="lg:col-span-7">
            <div className="rounded-xl overflow-hidden bg-[#0c1017] border border-[#212d42] shadow-2xl">
              {/* Window Header / File Tabs */}
              <div className="flex items-center justify-between px-3 sm:px-4 py-2 bg-[#080b11] border-b border-[#212d42] overflow-x-auto">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {snippets.map((snip, idx) => (
                    <button
                      key={snip.filename}
                      onClick={() => setActiveTab(idx)}
                      className={`px-3 py-1.5 rounded-t-md text-xs font-mono transition-all flex items-center gap-1.5 border-b-2 whitespace-nowrap ${
                        activeTab === idx
                          ? "bg-[#141c2a] text-emerald-400 border-emerald-500 font-semibold"
                          : "text-zinc-400 hover:text-zinc-200 border-transparent hover:bg-[#0e131d]"
                      }`}
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>{snip.filename}</span>
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded bg-[#141c2a] border border-[#212d42] hover:border-emerald-500/50 text-zinc-300 hover:text-emerald-400 text-xs font-mono flex items-center gap-1 transition-colors shrink-0 ml-2"
                  title="Copy code snippet"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Code Pre Area */}
              <div className="p-5 font-mono text-xs sm:text-sm bg-[#080b11] overflow-x-auto text-zinc-300 leading-relaxed max-h-[380px]">
                <pre>
                  <code>{currentSnippet.code}</code>
                </pre>
              </div>

              {/* Sub-bar */}
              <div className="px-5 py-2.5 bg-[#0a0e14] border-t border-[#1c273a] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>{currentSnippet.badge}</span>
                </div>
                <span>JDK 17/21 • Production Syntax</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Philosophy Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-[#0c1017] border border-[#212d42] shadow-xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono">
                <Terminal className="w-3.5 h-3.5" />
                <span>Backend Engineering Standard</span>
              </div>

              <blockquote className="text-xl sm:text-2xl font-bold text-white font-sans tracking-tight">
                &ldquo;Clean APIs. Clear responsibilities. Predictable behavior.&rdquo;
              </blockquote>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                I prioritize clean architecture over clever shortcuts. Controllers stay thin and focus purely on contract validation; services hold transactional rules; repositories manage data access efficiently without N+1 query cascades.
              </p>

              <div className="space-y-3 pt-2 text-xs font-mono">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Strict Contracts:</span>
                    <p className="text-zinc-400 font-sans text-xs mt-0.5">
                      DTO projections prevent internal domain model exposure and prevent lazy-loading crashes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Cpu className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-semibold">Explicit Transactions:</span>
                    <p className="text-zinc-400 font-sans text-xs mt-0.5">
                      Marking read operations with <code className="text-sky-300">@Transactional(readOnly = true)</code> enables Hibernate dirty-checking bypass and connection optimization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
