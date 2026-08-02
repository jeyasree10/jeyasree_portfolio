import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Award, GraduationCap, Code2, Rocket, HeartHandshake } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Engineering Solutions with Passion & Precision
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg">
            Dedicated student developer combining analytical problem solving with modern software craft.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-500/10 rounded-bl-full pointer-events-none" />

            <h3 className="text-xl sm:text-2xl font-poppins font-bold text-slate-900 dark:text-white mb-4">
              Building impactful products for real-world problems.
            </h3>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base mb-6">
              {personal.about}
            </p>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60">
                <div className="p-2 rounded-xl bg-brand-500/10 text-brand-500">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">VESIT Mumbai</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Pre-Final Year EXTC</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60">
                <div className="p-2 rounded-xl bg-sky-500/10 text-sky-500">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Software & ML</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Algorithms & Models</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60">
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-500">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Mobile Apps</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Flutter & Firebase</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60">
                <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-500">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Continuous Growth</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Always learning</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Animated Statistics Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6">
            {personal.stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card p-6 rounded-3xl text-center relative group shadow-lg"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-tr from-brand-500/20 to-sky-400/20 flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6" />
                </div>
                <div className="font-poppins font-extrabold text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
                  {stat.value}<span className="text-brand-500">{stat.suffix}</span>
                </div>
                <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
