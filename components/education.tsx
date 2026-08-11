"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    school: "The Open University",
    meta: "Oct 2021 - Nov 2025 | Israel",
    gpa: "3.78",
    coursework: [
      "Data Structures and Algorithms",
      "Biological Computation",
      "Systems Programming in Linux & C",
      "Principles of Database Design",
      "Computer Networks (OSI Model)",
      "Operating Systems",
      "Data Mining",
    ],
  },
  {
    degree: "Master of Science",
    field: "Computer Science: Artificial Intelligence Track",
    school: "Binghamton University",
    meta: "Jan 2026 - Present | Binghamton, NY",
    coursework: ["Machine Learning Models", "Design Patterns", "Mobile Systems Security"],
  },
  {
    degree: "Master of Technology Management",
    field: "Technology Management",
    school: "UC Santa Barbara",
    meta: "Fall 2026 - Present | Santa Barbara, CA",
    coursework: [],
  },
]

export function Education() {
  return (
    <section className="relative border-t border-white/10 px-8 py-32 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground">05 — EDUCATION</p>
          <h2 className="font-sans text-3xl font-light italic md:text-5xl">Academic Foundation</h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-white/64 md:text-xl">
          A computer science foundation expanded through artificial intelligence and technology
          management, connecting technical depth with product strategy and execution.
        </p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-3">
        {education.map((item, index) => (
          <motion.article
            key={`${item.school}-${item.degree}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className="flex min-h-[360px] flex-col border border-white/10 p-6 transition-colors duration-300 hover:border-[#8ea7ff]/50"
          >
            <span className="mb-8 block font-mono text-[10px] uppercase tracking-[0.24em] text-[#8ea7ff]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="mb-8">
              <h3 className="font-sans text-2xl font-light leading-tight">{item.degree}</h3>
              <p className="mt-2 text-base leading-6 text-white/72">{item.field}</p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/42">
                {item.school}
              </p>
              <p className="mt-2 text-sm text-white/52">{item.meta}</p>
              {item.gpa ? <p className="mt-4 font-mono text-xs tracking-[0.16em] text-[#8ea7ff]">GPA {item.gpa}</p> : null}
            </div>

            {item.coursework.length > 0 ? (
              <div className="mt-auto">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/36">
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.coursework.map((course) => (
                    <span
                      key={course}
                      className="border border-white/12 px-2.5 py-1 font-mono text-[10px] leading-4 tracking-[0.08em] text-white/54"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <p className="mt-auto text-sm leading-6 text-white/46">
                Management-focused graduate study bridging technology strategy, execution,
                and product leadership.
              </p>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  )
}
