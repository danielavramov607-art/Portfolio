"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import {
  CodeBracketIcon,
  ArrowTopRightOnSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const hasLiveDemo = project.liveDemoUrl !== "#";

  return (
    <>
      {/* Card */}
      <div className="group h-full rounded-2xl border border-white/8 bg-card p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.05)]">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-foreground font-semibold text-lg group-hover:text-accent transition-colors duration-300">
              {project.title}
            </h3>
            {project.inProgress && (
              <span className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400">
                In Progress
              </span>
            )}
          </div>
          <p className="text-muted text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>
          <button
            onClick={() => setOpen(true)}
            className="self-start text-xs text-accent/70 hover:text-accent underline underline-offset-2 transition-colors duration-200"
          >
            Read more
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.techTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-2 border-t border-white/8">
          {project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <CodeBracketIcon className="w-4 h-4" />
              GitHub
            </a>
          )}
          {hasLiveDemo && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
            >
              <ArrowTopRightOnSquareIcon className="w-4 h-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="relative z-10 w-full max-w-lg bg-card border border-white/10 rounded-2xl p-8 flex flex-col gap-6 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-foreground font-bold text-xl">
                    {project.title}
                  </h3>
                  {project.inProgress && (
                    <span className="text-xs px-2 py-0.5 rounded-full border border-yellow-500/40 bg-yellow-500/10 text-yellow-400">
                      In Progress
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-muted hover:text-foreground transition-colors duration-200 flex-shrink-0"
                  aria-label="Close"
                >
                  <XMarkIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Full description */}
              <p className="text-muted text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.techTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-accent/10 text-accent border border-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-2 border-t border-white/8">
                {project.githubUrl !== "#" && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
                  >
                    <CodeBracketIcon className="w-4 h-4" />
                    GitHub
                  </a>
                )}
                {hasLiveDemo && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors duration-200"
                  >
                    <ArrowTopRightOnSquareIcon className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
