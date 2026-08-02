import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Github, CheckCircle, Sparkles, Layers, ArrowUpRight, Eye } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const bentoProject = projects[0]; // Bento project from resume
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  return (
    <section id="projects" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Project</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Academic Project Showcase
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Smart canteen management system built with Flutter, Firebase, and Android Studio.
          </p>
        </motion.div>

        {/* Featured Single Bento Project Card */}
        {bentoProject && (
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col group"
            >
              {/* Visual Banner Header */}
              <div className="relative h-64 sm:h-72 bg-gradient-to-tr from-slate-900 via-brand-900 to-slate-800 p-8 sm:p-10 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500/25 to-sky-400/25 mix-blend-overlay" />
                
                {/* Badge */}
                <div className="relative z-10 flex justify-between items-center">
                  <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold">
                    {bentoProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-brand-500/30 border border-brand-400/30 text-white text-xs font-bold">
                    Official Resume Project
                  </span>
                </div>

                {/* Banner Project Title */}
                <div className="relative z-10">
                  <h3 className="text-3xl sm:text-4xl font-poppins font-extrabold text-white group-hover:text-brand-300 transition-colors">
                    {bentoProject.title}
                  </h3>
                </div>

                {/* Background Pattern */}
                <div className="absolute right-6 bottom-4 text-white/10 pointer-events-none">
                  <Layers className="w-36 h-36" />
                </div>
              </div>

              {/* Body Content */}
              <div className="p-6 sm:p-10 space-y-6">
                <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
                  {bentoProject.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    System Architecture & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {bentoProject.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                        <CheckCircle className="w-4 h-4 text-brand-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mr-2">
                    Tech Stack:
                  </span>
                  {bentoProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions Footer */}
              <div className="p-6 sm:px-10 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">

                  <a
                    href={bentoProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2.5 rounded-2xl glass-card hover:bg-slate-200/50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Profile</span>
                  </a>
                </div>

                <button
                  onClick={() => setShowCaseStudy(true)}
                  className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-brand-600 dark:text-brand-400 hover:underline"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Full Specs</span>
                </button>
              </div>

            </motion.div>
          </div>
        )}

      </div>

      {/* Case Study Modal */}
      {showCaseStudy && bentoProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="glass-card max-w-2xl w-full p-6 sm:p-8 rounded-3xl relative shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-500 text-xs font-bold">
                  {bentoProject.category}
                </span>
                <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white mt-2">
                  {bentoProject.title}
                </h3>
              </div>
              <button
                onClick={() => setShowCaseStudy(false)}
                className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {bentoProject.description}
            </p>

            <div className="space-y-4 mb-6">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">Architecture & System Capabilities</h4>
              <div className="grid grid-cols-1 gap-2">
                {bentoProject.features.map((feat, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-sm text-slate-800 dark:text-slate-200 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-brand-500 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
            </div>
          </motion.div>
        </div>
      )}

    </section>
  );
};
