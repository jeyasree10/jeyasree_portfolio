import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Sparkles, Send, Github, Linkedin, Mail, ArrowRight, Code, Brain, Smartphone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import originalPortrait from '../assets/original_portrait.jpg';

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  const { personal } = PORTFOLIO_DATA;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.typingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.typingRoles.length]);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Intro Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 dark:bg-brand-500/20 border border-brand-500/20 text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-brand-500 animate-pulse" />
              <span>Hello, I'm</span>
            </div>

            {/* Name & Subtitle */}
            <div>
              <h1 className="text-4xl sm:text-6xl font-poppins font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                {personal.name}
              </h1>
              <p className="mt-2 text-lg sm:text-xl font-medium text-brand-600 dark:text-brand-400">
                {personal.title} <span className="text-slate-400 dark:text-slate-500">•</span> {personal.degree} <span className="text-slate-400 dark:text-slate-500">•</span> {personal.college}
              </p>
            </div>

            {/* Tagline */}
            <p className="text-slate-600 dark:text-slate-300 font-inter text-base sm:text-lg">
              {personal.tagline}
            </p>

            {/* Animated Typing Text Pill */}
            <div className="h-12 flex items-center">
              <span className="text-slate-500 dark:text-slate-400 mr-2 font-medium">I am a</span>
              <div className="relative inline-block h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-poppins font-bold text-xl sm:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-500 via-sky-400 to-indigo-500"
                  >
                    {personal.typingRoles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <button
                onClick={onOpenResume}
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-brand-500 hover:bg-brand-600 text-white font-medium text-sm sm:text-base shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5 transition-all"
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl glass-card hover:bg-slate-100/80 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium text-sm sm:text-base transition-all"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-brand-500/30 text-brand-600 dark:text-brand-400 hover:bg-brand-500/10 font-medium text-sm sm:text-base transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="pt-4 flex items-center gap-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personal.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:shadow-glow hover:-translate-y-1 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personal.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:shadow-glow hover:-translate-y-1 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.contact.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-400 hover:shadow-glow hover:-translate-y-1 transition-all"
                  aria-label="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Image Column with Original Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Outer Glowing Frame */}
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-500 via-sky-400 to-indigo-500 rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />

              {/* Portrait Container with Original Photo */}
              <div className="relative p-2 rounded-3xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl border border-white/60 dark:border-white/10 shadow-2xl overflow-hidden">
                <img
                  src={originalPortrait}
                  alt="S. Jeyasree Original Photograph"
                  className="w-full h-[450px] object-cover object-top rounded-2xl shadow-md transform transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Tech Badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-6 -left-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-white/60 dark:border-slate-700"
                >
                  <div className="p-1.5 rounded-lg bg-sky-500/10 text-sky-500">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Flutter</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-10 -right-4 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-white/60 dark:border-slate-700"
                >
                  <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-500">
                    <Brain className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">Machine Learning</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute bottom-6 left-6 glass-card px-3 py-1.5 rounded-xl flex items-center gap-2 shadow-md border border-white/60 dark:border-slate-700"
                >
                  <Code className="w-4 h-4 text-brand-500" />
                  <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">C++ / Python</span>
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
