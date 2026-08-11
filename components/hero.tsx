"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { SentientSphere } from "./sentient-sphere"

const projectSignals = ["Web Development", "Game Development", "University Projects"]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  return (
    <section ref={containerRef} className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_46%,rgba(37,99,235,0.28),transparent_34%),linear-gradient(120deg,rgba(255,255,255,0.08),transparent_32%)]" />

      {/* 3D Sphere Visual */}
      <div className="absolute -right-[42vw] top-16 h-[58vh] w-[110vw] opacity-45 md:-right-[18vw] md:top-0 md:h-full md:w-[70vw] md:opacity-70 lg:-right-[10vw] lg:w-[58vw]">
        <SentientSphere />
      </div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-12 lg:px-16"
      >
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-[760px] pt-20 md:pt-28 lg:pt-32"
        >
          <p className="mb-5 font-mono text-xs uppercase tracking-[0.28em] text-[#8ea7ff]">
            Eliav Ohaion — Technical Product Manager
          </p>
          <h1 className="font-sans text-5xl font-light leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl">
            Building product ideas into working software.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/64 md:text-lg">
            A portfolio focused on product execution, web development, game systems,
            and university work that connects strategy with hands-on engineering.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            {projectSignals.map((signal) => (
              <span
                key={signal}
                className="border border-white/14 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/72 backdrop-blur-sm transition-colors duration-300 hover:border-[#8ea7ff]/70 hover:text-white"
              >
                {signal}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 border-t border-white/12 pt-6 md:grid-cols-[1fr_auto] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid max-w-3xl gap-4 text-sm text-white/58 sm:grid-cols-3"
          >
            <p>
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-white/38">
                Product
              </span>
              Roadmaps, scope, tradeoffs
            </p>
            <p>
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-white/38">
                Engineering
              </span>
              React, Next.js, systems
            </p>
            <p>
              <span className="block font-mono text-[10px] uppercase tracking-[0.24em] text-white/38">
                Creative
              </span>
              Games, interfaces, motion
            </p>
          </motion.div>

          <motion.button
            data-cursor-hover
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-fit border border-white/20 px-6 py-3 font-mono text-xs uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            View Work
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 right-6 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
