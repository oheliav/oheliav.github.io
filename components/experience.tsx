"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Building2, ChevronDown } from "lucide-react"

const experience = [
  {
    company: "Israeli Ministry of Defense",
    location: "New York, NY",
    dates: "Jun 2023 - Present",
    summary:
      "Promoted from Technical Program Manager to Senior Technical Program Manager, scaling from single high-stakes programs to a multi-hundred-million-dollar portfolio while shipping an on-premise generative AI platform.",
    roles: [
      {
        title: "Senior Technical Program Manager",
        dates: "Feb 2025 - Present",
      },
      {
        title: "Technical Program Manager",
        dates: "Jun 2023 - Feb 2025",
      },
    ],
    impact: [
      "Led a $488M portfolio of 15-20 technology programs, driving prioritization and cross-functional execution that generated ~$200M in aggregate cost savings over three years.",
      "Led \"AI Factory,\" bringing generative AI to a classified, fully on-premise environment; deployed Llama 3 70B (8-bit) with QLoRA fine-tuning for multilingual and domain-specific behavior, cutting document analysis and drafting workflows from ~1 week to ~1 day.",
      "Led product development and a 3-engineer team to build and launch Circle, a fully on-premise internal collaboration platform adopted by ~150 employees and handling thousands of daily interactions.",
      "Identified a critical launch dependency for a next-generation satellite and led technical evaluation of a new commercial launch provider, securing a launch window within one month and mitigating a potential 2+ year operational gap.",
      "Led integration of HRC, a 28-satellite EO constellation, into existing ground infrastructure; identified architecture gaps preventing independent satellite tasking and drove internal engineering development through integration.",
      "Took ownership of \"Dumbo,\" a high-stakes data-center platform 8 months behind schedule; uncovered conflicting technical assumptions, aligned engineering teams on a revised solution, and delivered the first milestone in under 3 months.",
      "Led adoption of Redis for real-time, low-latency data access, from engineering requirements and a Valkey POC through enterprise evaluation and rollout, reducing projected cost from $12M to $7M.",
    ],
    tags: ["Promotion", "AI Factory", "Program Management"],
  },
  {
    company: "RacePace",
    location: "Remote, Company Based in Vienna, Austria",
    dates: "Apr 2023 - 2025",
    title: "Founding Software Engineer",
    summary:
      "Founding engineer for an AI-assisted race-training platform used by ~1200 athletes, owning product architecture and development end to end from data ingestion through prediction systems and the user-facing experience.",
    impact: [
      "Designed a hybrid sports-science + ML prediction approach achieving 4.21% MAPE on race-pace predictions while keeping athlete-state estimation interpretable and computationally efficient.",
      "Shipped race-time predictions, mile-by-mile pacing, and adaptive training plans that automatically recalculated after each workout based on updated athlete fitness and performance data.",
    ],
    tags: ["Founding Engineer", "ML", "Full Stack"],
  },
  {
    company: "University of California, Santa Barbara",
    location: "Santa Barbara, CA",
    dates: "Sep 2026 - Present",
    title: "Teaching Assistant, TMP 191AI: AI and Business",
    summary:
      "Teaching Assistant leading undergraduate discussions and presentations on applying AI concepts to business and product problems, while providing technical guidance and feedback.",
    impact: [
      "Lead undergraduate discussions and presentations on applying AI concepts to business and product problems.",
      "Provide technical guidance and feedback to students working through AI/business case studies.",
    ],
    tags: ["Teaching", "AI", "Education"],
  },
]

export function Experience() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="experience" className="relative border-t border-white/10 px-8 py-32 light:border-black/10 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground">EXPERIENCE</p>
          <h2 className="font-sans text-3xl font-light italic md:text-5xl">Professional Work</h2>
        </div>

        <p className="max-w-3xl text-lg leading-8 text-white/64 light:text-black/64 md:text-xl">
          Compact by default, expandable when a recruiter wants detail: role, company, dates,
          focus tags, and the proof behind the work.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-5xl">
        <div className="absolute left-4 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent light:via-black/20" />

        <div className="space-y-5">
          {experience.map((item, index) => {
            const isOpen = openIndex === index
            const primaryTitle = "roles" in item ? item.roles[0].title : item.title
            const secondaryTitle = "roles" in item ? `Promoted from ${item.roles[1].title}` : item.company

            return (
              <motion.article
                key={`${item.company}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="relative pl-12"
              >
                <span className="absolute left-[7px] top-7 flex h-5 w-5 items-center justify-center rounded-full border border-[#8ea7ff]/60 bg-[#050505] light:border-[#2563eb]/60 light:bg-[#fafafa]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8ea7ff] light:bg-[#2563eb]" />
                </span>

                <button
                  type="button"
                  data-cursor-hover
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="group w-full border border-white/10 p-5 text-left transition-colors duration-300 hover:border-[#8ea7ff]/55 light:border-black/10 light:hover:border-[#2563eb]/55 md:p-6"
                  aria-expanded={isOpen}
                >
                  <div className="grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-start">
                    <span className="flex h-11 w-11 items-center justify-center border border-white/12 text-[#8ea7ff] light:border-black/12 light:text-[#2563eb]">
                      <Building2 className="h-5 w-5" />
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="font-sans text-2xl font-light leading-tight">{primaryTitle}</h3>
                        {"roles" in item ? (
                          <span className="border border-[#8ea7ff]/30 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-[#8ea7ff] light:border-[#2563eb]/30 light:text-[#2563eb]">
                            Promoted
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-white/56 light:text-black/56">
                        {item.company} / {secondaryTitle}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="border border-white/12 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-white/54 transition-colors duration-300 group-hover:border-[#8ea7ff]/45 light:border-black/12 light:text-black/54 light:group-hover:border-[#2563eb]/45"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-4 md:flex-col md:items-end">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/42 light:text-black/42">
                        {item.dates}
                      </p>
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                        <ChevronDown className="h-4 w-4 text-muted-foreground" />
                      </motion.span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="mt-7 border-t border-white/10 pt-6 light:border-black/10">
                          {"roles" in item ? (
                            <div className="mb-6 grid gap-4 md:grid-cols-2">
                              {item.roles.map((role) => (
                                <div key={role.title} className="border border-white/10 p-4 light:border-black/10">
                                  <p className="font-sans text-lg font-light">{role.title}</p>
                                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-white/42 light:text-black/42">
                                    {role.dates}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : null}

                          <p className="mb-5 max-w-3xl text-sm leading-6 text-white/56 light:text-black/56">
                            {item.summary}
                          </p>

                          <ul className="grid gap-3 text-sm leading-6 text-white/60 light:text-black/60">
                            {item.impact.map((impact) => (
                              <li key={impact} className="grid grid-cols-[auto_1fr] gap-3">
                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#8ea7ff] light:bg-[#2563eb]" />
                                <span>{impact}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </button>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
