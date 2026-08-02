import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, School, Award } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Education Timeline
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Consistently strong academic performance from school foundation to B.Tech EXTC engineering degree.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <motion.div
                key={edu.institution + edu.degree}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg border border-slate-200/60 dark:border-slate-800"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-brand-600 dark:text-brand-400 uppercase tracking-wider">
                      <School className="w-4 h-4" />
                      <span>{edu.institution}</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-poppins font-bold text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-brand-500 to-sky-400 text-white text-xs font-bold shadow-sm">
                      {edu.score}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-brand-500" />
                      {edu.period}
                    </span>
                  </div>
                </div>

                {edu.details && (
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed pt-2 border-t border-slate-200/60 dark:border-slate-800">
                    {edu.details}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
