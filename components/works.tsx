"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Two Pass Assembler",
    tags: ["C", "Systems Programming"],
    year: "2023",
    href: "https://github.com/oheliav/two-pass-assembler",
  },
  {
    title: "RacePace",
    tags: ["ML", "Full Stack"],
    year: "2024",
    href: "https://findracepace.com",
  },
  {
    title: "Intelligent Taxi Fleet",
    tags: ["CARLA", "Python", "Simulation"],
    year: "2025",
    href: "https://github.com/oheliav/Intelligent-taxi-fleet---CARLA-simulator",
  },
  {
    title: "White Mountain Garage Doors",
    tags: ["Web Design", "Business Site"],
    year: "2025",
    href: "https://whitemountaingaragedoors.com",
  },
]

export function Works() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="works" className="relative py-32 px-8 md:px-12 md:py-24">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground mb-4">SELECTED WORKS</p>
        <h2 className="font-sans text-3xl md:text-5xl font-light italic">Things I've Built</h2>
      </motion.div>

      {/* Projects List */}
      <div className="relative">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="relative border-t border-white/10 py-8 light:border-black/10 md:py-12"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              {/* Year */}
              <span className="font-mono text-xs text-muted-foreground tracking-widest order-1 md:order-none">
                {project.year}
              </span>

              {/* Title */}
              <motion.h3
                className="font-sans text-4xl md:text-6xl lg:text-7xl font-light tracking-tight group-hover:text-white/70 transition-colors duration-300 flex-1 light:group-hover:text-black/62"
                animate={{
                  x: hoveredIndex === index ? 20 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {project.title}
              </motion.h3>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap order-2 md:order-none">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wider px-3 py-1 border border-white/20 rounded-full text-muted-foreground light:border-black/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </motion.div>
        ))}
      </div>

      {/* Bottom Border */}
      <div className="border-t border-white/10 light:border-black/10" />
    </section>
  )
}
