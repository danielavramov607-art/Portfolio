"use client";

import { motion } from "framer-motion";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Decorative blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent opacity-[0.06] blur-[120px]" />
      </div>

      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent text-sm font-medium tracking-widest uppercase mb-4"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight mb-4"
        >
          <span className="text-white">Daniel </span>
          <span className="text-accent">Avramov</span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted font-light mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-muted leading-relaxed max-w-xl mx-auto mb-10"
        >
          I build fast, scalable, and beautiful web applications — from pixel-perfect
          frontends to robust APIs and databases.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-accent text-black font-semibold hover:bg-cyan-300 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-accent/50 text-accent font-semibold hover:bg-accent/10 transition-colors duration-200"
          >
            Contact Me
          </a>
          <a
            href="/Daniel-Avramov-CV.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl border border-white/20 text-muted font-semibold hover:border-white/40 hover:text-foreground transition-colors duration-200"
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
            Download CV
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-muted text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-px h-8 bg-accent/40"
          animate={{ scaleY: [1, 0.3, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
