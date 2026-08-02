import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Brain, Wrench, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, SkillCategory } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const { skillCategories } = PORTFOLIO_DATA;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-brand-500" />;
      case 'Development':
        return <Cpu className="w-5 h-5 text-sky-500" />;
      case 'Machine Learning':
        return <Brain className="w-5 h-5 text-indigo-500" />;
      case 'Tools & Platforms':
        return <Wrench className="w-5 h-5 text-emerald-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-brand-500" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Skills & Competencies
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Comprehensive toolkit spanning core algorithms, mobile frameworks, machine learning, and modern dev tools.
          </p>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat: SkillCategory, catIdx: number) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-lg border border-slate-200/60 dark:border-slate-800"
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/60 dark:border-slate-800">
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white">
                  {cat.category}
                </h3>
              </div>

              {/* Progress Bars */}
              <div className="space-y-5">
                {cat.items.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div className="w-full h-2.5 bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + skillIdx * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-brand-500 to-sky-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
