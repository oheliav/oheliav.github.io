"use client"

import { motion } from "framer-motion"

const education = [
  {
    stage: "Foundation",
    degree: "Bachelor of Science",
    field: "Computer Science",
    school: "The Open University",
    meta: "Oct 2021 - Nov 2025 | Israel",
    gpa: "3.78",
    seal: "BSC",
    rotation: "-rotate-2",
    logo: "/open-university-of-israel-logo-png_seeklogo-310584.png",
    logoAlt: "The Open University logo",
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
    stage: "Specialization",
    degree: "Master of Science",
    field: "Computer Science: Artificial Intelligence Track",
    school: "Binghamton University",
    meta: "Jan 2026 - Present | Binghamton, NY",
    gpa: "4.0",
    seal: "MS",
    rotation: "rotate-1",
    logo: "/Binghamton_Bearcats_logo.svg.png",
    logoAlt: "Binghamton University logo",
    coursework: ["Machine Learning Models", "Design Patterns", "Mobile Systems Security"],
  },
  {
    stage: "Management",
    degree: "Master of Technology Management",
    field: "Technology Management",
    school: "UC Santa Barbara",
    meta: "Fall 2026 - Present | Santa Barbara, CA",
    seal: "MTM",
    rotation: "-rotate-1",
    logo: "/uc-santa-barbara.svg",
    logoAlt: "UC Santa Barbara logo",
    coursework: [],
  },
]

function DiplomaCard({ item, index }: { item: (typeof education)[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, rotate: 0, scale: 1.015 }}
      transition={{
        opacity: { duration: 0.7, delay: index * 0.08 },
        rotate: { type: "spring", stiffness: 240, damping: 20 },
        scale: { type: "spring", stiffness: 240, damping: 20 },
      }}
      className={`group relative z-10 w-full max-w-[720px] border border-[#4a3d25]/45 bg-[#f3ecd6] p-3 text-[#16120b] shadow-[0_24px_70px_rgba(0,0,0,0.28)] sm:p-4 ${item.rotation}`}
    >
      <motion.div
        animate={{ y: [0, -6], x: [0, index % 2 === 0 ? 3 : -3] }}
        transition={{
          y: { duration: 4.8 + index * 0.5, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", ease: "easeInOut" },
          x: { duration: 5.4 + index * 0.45, repeat: Number.POSITIVE_INFINITY, repeatType: "mirror", ease: "easeInOut" },
        }}
        className="relative"
      >
        <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(#4a3d25_0.7px,transparent_0.7px)] [background-size:7px_7px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(189,150,71,0.22),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.48),transparent_38%,rgba(92,67,30,0.12))]" />

      <div className="relative flex min-h-[410px] flex-col border-[5px] border-double border-[#4a3d25]/75 p-5 sm:min-h-[430px] sm:p-6">
        <div className="pointer-events-none absolute left-3 top-3 h-8 w-8 border-l-2 border-t-2 border-[#4a3d25]/70" />
        <div className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r-2 border-t-2 border-[#4a3d25]/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b-2 border-l-2 border-[#4a3d25]/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 border-b-2 border-r-2 border-[#4a3d25]/70" />

        <motion.img
          src={item.logo}
          alt=""
          aria-hidden="true"
          animate={{ opacity: [0.1, 0.17, 0.1], scale: [1, 1.04, 1] }}
          transition={{ duration: 6 + index * 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 object-contain opacity-15 grayscale sm:h-44 sm:w-44"
        />

        <div className="relative grid gap-4 sm:grid-cols-[112px_1fr_112px] sm:items-start">
          <motion.img
            src={item.logo}
            alt={item.logoAlt}
            animate={{ y: [0, -4, 0], rotate: [0, 1.2, 0] }}
            transition={{ duration: 4.5 + index * 0.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="mx-auto h-20 w-28 object-contain sm:h-24 sm:w-32"
          />
          <div className="text-center">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#725d2c]">{item.stage}</p>
            <h3 className="mt-3 font-sans text-3xl font-light italic leading-none tracking-normal [text-shadow:0_1px_0_rgba(255,255,255,0.55)] sm:text-4xl">
              {item.school}
            </h3>
            <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#725d2c]">Academic credential</p>
          </div>
          <div className="hidden justify-self-end border border-[#4a3d25]/30 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#725d2c] sm:block">
            {item.seal}
          </div>
        </div>

        <div className="relative my-6 text-center sm:my-7">
          <p className="font-sans text-4xl font-medium italic leading-none tracking-normal [text-shadow:0_1px_0_rgba(255,255,255,0.55)] sm:text-5xl">
            {item.degree}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base font-normal italic leading-6 text-[#3f351f] sm:text-lg">
            {item.field}
          </p>
        </div>

        <div className="relative mt-auto">
          <div className="grid gap-5 border-t border-[#4a3d25]/30 pt-5 text-sm sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#725d2c]">Awarded / Active</p>
              <p className="mt-1 font-sans text-xl font-medium italic">{item.meta}</p>
            </div>
            {item.gpa ? (
              <motion.div
                data-cursor-hover
                whileHover={{ rotate: -2, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 320, damping: 18 }}
                className="relative w-fit justify-self-start border-2 border-double border-[#2563eb]/70 bg-[#eef3ff]/70 px-5 py-3 text-center shadow-[0_10px_24px_rgba(37,99,235,0.14)] sm:justify-self-end"
              >
                <span className="block font-mono text-[9px] uppercase tracking-[0.3em] text-[#2563eb]">GPA</span>
                <span className="block font-sans text-3xl font-medium italic leading-none text-[#16120b]">
                  {item.gpa}
                </span>
              </motion.div>
            ) : null}
          </div>

          {item.coursework.length > 0 ? (
            <div className="mt-6">
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.22em] text-[#725d2c]">
                Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {item.coursework.map((course) => (
                  <motion.span
                    key={course}
                    data-cursor-hover
                    whileHover={{ y: -3, rotate: -1, scale: 1.04 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 360, damping: 20 }}
                    className="border border-[#4a3d25]/25 bg-[#fff9e8]/45 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.08em] text-[#4a3d25]"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      </motion.div>
    </motion.article>
  )
}

function CurlyArrow({ index }: { index: number }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ y: [0, 5, 0] }}
      transition={{
        opacity: { duration: 0.5, delay: 0.15 },
        y: { duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
      }}
      viewBox="0 0 240 120"
      aria-hidden="true"
      className={`-my-2 h-32 w-64 text-[#8ea7ff] light:text-[#2563eb] sm:h-40 sm:w-80 ${
        index % 2 === 0 ? "self-center sm:translate-x-28" : "self-center sm:-translate-x-12"
      }`}
    >
      <defs>
        <marker id={`education-arrow-${index}`} markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
          <path d="M0,0 L12,6 L0,12 Z" fill="currentColor" />
        </marker>
      </defs>
      <motion.path
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.1 }}
        d={
          index % 2 === 0
            ? "M18 6 C74 28 122 48 152 76 C170 106 126 118 96 104 C66 90 76 50 118 58 C176 68 206 90 224 110"
            : "M222 6 C166 28 118 48 88 76 C70 106 114 118 144 104 C174 90 164 50 122 58 C64 68 34 90 16 110"
        }
        fill="none"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        strokeDasharray="10 15"
        markerEnd={`url(#education-arrow-${index})`}
      />
    </motion.svg>
  )
}

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
          <h2 className="font-sans text-3xl font-light italic md:text-5xl">Academic Stack</h2>
        </div>
        <p className="max-w-3xl text-lg leading-8 text-white/64 light:text-black/64 md:text-xl">
          Three credentials staged as a rough diploma stack: computer science foundation,
          artificial intelligence specialization, and technology management.
        </p>
      </motion.div>

      <div className="relative">
        <div className="mx-auto flex max-w-6xl flex-col">
          {education.map((item, index) => (
            <div
              key={`${item.school}-${item.degree}`}
              className={`flex flex-col ${index === 0 ? "items-start" : index === 1 ? "items-center" : "items-end"}`}
            >
              <DiplomaCard item={item} index={index} />
              {index < education.length - 1 ? <CurlyArrow index={index} /> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
