"use client"

import { motion } from "framer-motion"

const focusAreas = ["Product execution", "Technical discovery", "Cross-functional delivery"]

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/10 px-8 py-32 light:border-black/10 md:px-12 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div>
          <p className="mb-4 font-mono text-xs tracking-[0.3em] text-muted-foreground">EXPERIENCE</p>
          <h2 className="font-sans text-3xl font-light italic md:text-5xl">Professional Work</h2>
        </div>

        <div className="border border-white/10 p-6 light:border-black/10 md:p-8">
          <p className="text-lg leading-8 text-white/64 light:text-black/64 md:text-xl">
            Experience details are being shaped around technical product management,
            hands-on software work, and projects that bridge product strategy with execution.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="border border-white/12 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-white/54 light:border-black/12 light:text-black/54"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
