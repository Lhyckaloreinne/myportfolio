"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Link2, Mail, Send } from "lucide-react";
import { SiBehance, SiGithub } from "react-icons/si";

const contactLinks = [
  {
    label: "EMAIL DIRECT",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    label: "LINKEDIN PROFILE",
    value: "linkedin.com/in/lhyckaloreinne",
    href: "https://www.linkedin.com/",
    icon: Link2,
  },
  {
    label: "GITHUB REPOSITORY",
    value: "github.com/lhyckaloreinne",
    href: "https://github.com/",
    icon: SiGithub,
  },
  {
    label: "BEHANCE PORTFOLIO",
    value: "behance.net/lhyckaloreinne",
    href: "https://www.behance.net/",
    icon: SiBehance,
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="w-full bg-obsidian text-white py-24 md:py-32 lg:py-36 relative overflow-hidden"
    >
      {/* Background Decorative Metallic Glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-[600px] w-[600px] rounded-full bg-gold/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          
          {/* Left Column: Headline & Contact Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4 inline-flex items-center gap-3">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.45em] text-gold">
                  INITIATE COLLABORATION
                </span>
              </div>

              <h2 className="font-serif text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
                Let&apos;s build something <span className="font-serif italic text-gold">extraordinary</span>.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-neutral-400 font-light lg:text-lg">
                I am currently open to full-time opportunities, design collaborations, and strategic digital operations roles.
              </p>
            </div>

            {/* Vogue Contact Grid Links */}
            <div className="mt-12 space-y-4">
              {contactLinks.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group flex items-center justify-between rounded-2xl border border-obsidian-border bg-obsidian-card p-5 transition-all duration-300 hover:border-gold hover:bg-obsidian-card/80"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold group-hover:bg-gold group-hover:text-obsidian transition-colors">
                        <Icon className="h-4 w-4" aria-hidden={true} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-gold">
                          {contact.label}
                        </span>
                        <span className="mt-1 block text-sm font-medium text-white group-hover:text-gold transition-colors">
                          {contact.value}
                        </span>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-neutral-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Vogue Dark Form ("JOIN THE MASTERMIND") */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-gold/30 bg-obsidian-card p-8 md:p-12 shadow-2xl relative">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.4em] text-gold mb-2">
                DIRECT INQUIRY FORM
              </span>
              <h3 className="font-serif text-2xl font-normal tracking-tight text-white lg:text-3xl mb-8">
                Send a Message
              </h3>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-16 w-16 text-gold mb-4" />
                  <h4 className="font-serif text-2xl font-normal text-white">Message Received</h4>
                  <p className="mt-2 text-sm text-neutral-400 max-w-md">
                    Thank you for reaching out. I will review your message and respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="e.g. Jane Doe"
                        className="w-full rounded-xl border border-obsidian-border bg-obsidian/70 px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="jane@example.com"
                        className="w-full rounded-xl border border-obsidian-border bg-obsidian/70 px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                      Subject / Project Scope
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      placeholder="e.g. Full-Time Opportunity / Design Collaboration"
                      className="w-full rounded-xl border border-obsidian-border bg-obsidian/70 px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-semibold uppercase tracking-[0.3em] text-neutral-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="Tell me about your organization or project goals..."
                      className="w-full rounded-xl border border-obsidian-border bg-obsidian/70 px-4 py-3.5 text-sm text-white placeholder-neutral-600 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-4 text-xs font-semibold uppercase tracking-[0.35em] text-obsidian transition-all duration-300 hover:bg-gold-dark hover:text-white active:scale-95 disabled:opacity-50"
                  >
                    <span>{loading ? "Sending..." : "Submit Inquiry"}</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}