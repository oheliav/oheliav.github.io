"use client"

import { motion } from "framer-motion"

const education = [
  {
    degree: "Bachelor of Science",
    field: "Computer Science",
    school: "The Open University",
    meta: "Oct 2021 - Nov 2025 | Israel",
    gpa: "3.78",
    side: "left",
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
    gpa: "4.0",
    side: "right",
    coursework: ["Machine Learning Models", "Design Patterns", "Mobile Systems Security"],
  },
  {
    degree: "Master of Technology Management",
    field: "Technology Management",
    school: "UC Santa Barbara",
    meta: "Fall 2026 - Present | Santa Barbara, CA",
    side: "left",
    coursework: [],
  },
]

export function Education() {
  return (
    <section id="education" className="relative border-t border-white/10 px-8 py-32 light:border-black/10 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground">EDUCATION</p>
          <h2 className="font-sans text-3xl font-light italic md:text-5xl">Academic Foundation</h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-white/64 light:text-black/64 md:text-xl">
          A computer science foundation expanded through artificial intelligence and technology
          management, connecting technical depth with product strategy and execution.
        </p>
      </motion.div>

      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent light:via-black/20 md:left-1/2" />

        {education.map((item, index) => (
          <motion.article
            key={`${item.school}-${item.degree}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.08 }}
            className={`relative grid gap-6 pb-16 pl-12 md:grid-cols-2 md:pl-0 ${
              item.side === "right" ? "md:[&>*:first-child]:col-start-2" : ""
            }`}
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
              className="relative border border-white/10 p-6 transition-colors duration-300 hover:border-[#8ea7ff]/50 light:border-black/10 light:hover:border-[#2563eb]/50"
            >
              <motion.span
                className={`absolute -left-[37px] top-6 flex h-5 w-5 items-center justify-center rounded-full border border-[#8ea7ff]/60 bg-[#050505] light:border-[#2563eb]/60 light:bg-[#fafafa] md:top-8 ${
                  item.side === "right"
                    ? "md:left-[-10px] md:translate-x-[-50%]"
                    : "md:left-auto md:right-[-10px] md:translate-x-1/2"
                }`}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#8ea7ff]" />
              </motion.span>

              <span className="mb-8 block font-mono text-[10px] uppercase tracking-[0.24em] text-[#8ea7ff] light:text-[#2563eb]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="mb-8">
                <h3 className="font-sans text-2xl font-light leading-tight">{item.degree}</h3>
                <p className="mt-2 text-base leading-6 text-white/72 light:text-black/70">{item.field}</p>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/42 light:text-black/42">
                  {item.school}
                </p>
                <p className="mt-2 text-sm text-white/52 light:text-black/52">{item.meta}</p>
                {item.gpa ? (
                  <p className="mt-4 font-mono text-xs tracking-[0.16em] text-[#8ea7ff] light:text-[#2563eb]">GPA {item.gpa}</p>
                ) : null}
              </div>

              {item.coursework.length > 0 ? (
                <div>
                  <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-white/36 light:text-black/36">
                    Relevant Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <motion.span
                        key={course}
                        data-cursor-hover
                        whileHover={{ y: -3, scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 360, damping: 20 }}
                        className="cursor-default border border-white/12 px-2.5 py-1 font-mono text-[10px] leading-4 tracking-[0.08em] text-white/54 transition-colors duration-300 hover:border-[#8ea7ff]/60 hover:text-white light:border-black/12 light:text-black/54 light:hover:border-[#2563eb]/60 light:hover:text-black"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-sm leading-6 text-white/46 light:text-black/46">
                  Management-focused graduate study bridging technology strategy, execution,
                  and product leadership.
                </p>
              )}
            </motion.div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
