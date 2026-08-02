import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="internship" className="py-20 relative">
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
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Internship & Industry Exposure
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Hands-on machine learning experience supported by Google AI and EduSkills.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10 border-l-2 border-brand-500/30 pb-8 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/40">
                <Briefcase className="w-4 h-4" />
              </div>

              {/* Glass Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-bold mb-2">
                      <Building2 className="w-3.5 h-3.5" />
                      {exp.organization}
                    </span>
                    <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-xl">
                    <Calendar className="w-4 h-4 text-brand-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 text-base mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-brand-500" />
                    Key Contributions & Learnings
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-1" />
                        <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills Pills */}
                <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-xl bg-brand-500/10 text-brand-600 dark:text-brand-300 text-xs font-semibold"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
