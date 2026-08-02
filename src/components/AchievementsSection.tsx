import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Cloud, Award, Star } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const AchievementsSection: React.FC = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-20 relative">
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
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Key Achievements
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Recognitions in technical hackathons and Google Cloud skill build initiatives.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((ach, idx) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-xl border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <Trophy className="w-24 h-24 text-brand-500" />
              </div>

              <div>
                {/* Badge Header */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-brand-500/20 to-sky-400/20 text-brand-600 dark:text-brand-300 text-xs font-bold mb-4 border border-brand-500/20">
                  <Star className="w-3.5 h-3.5 fill-brand-500 text-brand-500 animate-spin-slow" />
                  <span>{ach.badgeText}</span>
                </div>

                <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white mb-2">
                  {ach.title}
                </h3>

                <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mb-3">
                  {ach.event} • {ach.year}
                </p>

                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {ach.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                {ach.title.includes('Cloud') ? (
                  <Cloud className="w-4 h-4 text-sky-500" />
                ) : (
                  <Award className="w-4 h-4 text-amber-500" />
                )}
                <span>Verified Achievement</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
