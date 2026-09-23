"use client";

import React, { useState } from "react";
import {
  Mail,
  FileDown,
  Send,
  Check,
  Copy,
  Terminal,
  Power,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          header: formData.subject || "Backend Engineering Opportunity",
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to log dispatch payload.");
      }

      setFormSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      const msg =
        err instanceof Error
          ? err.message
          : "Failed to transmit dispatch payload. Please try again.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#f8fafc] border-b border-slate-200 relative overflow-hidden text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Terminal Header Aesthetic with Whitish Theme */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 uppercase tracking-widest mb-2 font-bold">
            <Power className="w-3.5 h-3.5" />
            <span>Process State: LISTENING_SOCKET</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-sans">
              &gt; Ready to build something scalable?
            </h2>
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600 font-mono">
              Let&apos;s talk.
            </p>
          </div>

          <p className="mt-4 text-base text-slate-600 leading-relaxed font-sans font-medium">
            Whether you are building high-throughput microservices, redesigning relational database pipelines, or scaling a cloud-native platform, I am open to backend engineering roles.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Links & Terminal Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Email Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-600 flex items-center gap-1.5 font-bold">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  Primary Dispatch
                </span>
                <span className="text-xs font-mono px-3 py-0.5 rounded-full bg-slate-100 text-slate-800 font-bold border border-slate-200">
                  &lt; 24h Response
                </span>
              </div>

              <div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-base sm:text-lg font-mono font-bold text-slate-900 hover:text-emerald-600 transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-mono transition-all font-bold cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Let's%20Connect%20-%20Backend%20Opportunity`}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-emerald-500 text-slate-950 font-black text-xs font-mono hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Let&apos;s Connect</span>
                </a>
              </div>
            </div>

            {/* Resume & Social Links */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xl">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-bold">
                Credentials & Networks
              </span>

              <div className="flex flex-col gap-3 font-mono text-xs">
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="ArnabSaha_Resume.pdf"
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-500/60 hover:bg-slate-100 text-slate-800 flex items-center justify-between transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <FileDown className="w-4 h-4 text-emerald-600" />
                    <span className="font-bold text-slate-900">Download Official Resume (PDF)</span>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-emerald-600 font-semibold">
                    2026 Edition
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-500/60 hover:bg-slate-100 text-slate-800 flex items-center justify-between transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-slate-900">LinkedIn Profile</span>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-blue-600 font-semibold">
                    /in/arnab-saha
                  </span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 hover:bg-slate-100 text-slate-800 flex items-center justify-between transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="w-4 h-4 text-slate-700" />
                    <span className="font-bold text-slate-900">GitHub Profile</span>
                  </div>
                  <span className="text-xs text-slate-500 group-hover:text-slate-900 font-semibold">
                    @Arnab-Saha-2506
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Dispatch Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>dispatch_message.sh</span>
                </div>
                <span className="text-xs font-mono text-slate-500 font-semibold">
                  Sheets / Direct Ingress
                </span>
              </div>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-slate-50 border border-emerald-400 text-center space-y-3 font-mono">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Dispatch Logged Successfully
                  </h4>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your message payload has been recorded in our server. Arnab will get back to you soon. Thank you for reaching out!
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setSubmitError(null);
                    }}
                    className="text-xs text-emerald-600 font-bold hover:underline pt-2 cursor-pointer"
                  >
                    Send another dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 font-sans text-xs">
                  {submitError && (
                    <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-mono flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <span className="font-bold">Transmission Error: </span>
                        <span>{submitError}</span>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="font-mono text-slate-700 text-xs flex items-center gap-1 font-bold">
                        <span>sender.name</span>
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Jenkins (Tech Lead)"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white disabled:opacity-60 transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="font-mono text-slate-700 text-xs flex items-center gap-1 font-bold">
                        <span>sender.email</span>
                        <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. sjenkins@company.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white disabled:opacity-60 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-slate-700 text-xs flex items-center gap-1 font-bold">
                      <span>subject.header</span>
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Backend Engineering Opportunity / Microservices Collaboration"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white disabled:opacity-60 transition-colors font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-slate-700 text-xs flex items-center gap-1 font-bold">
                      <span>payload.body</span>
                      <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hi Arnab, we reviewed your work on Spring Boot microservices and would like to discuss..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:bg-white disabled:opacity-60 transition-colors font-mono leading-relaxed"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-black font-mono text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/25 active:scale-[0.99] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>LOGGING DISPATCH PAYLOAD...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>TRANSMIT DISPATCH PAYLOAD</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
