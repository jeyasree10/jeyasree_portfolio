import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Globe } from 'lucide-react';
import { PORTFOLIO_DATA, CodingProfile } from '../data/portfolioData';

export const CodingProfilesSection: React.FC = () => {
  const { codingProfiles } = PORTFOLIO_DATA;

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github className="w-6 h-6 text-white" />;
      case 'Linkedin':
        return <Linkedin className="w-6 h-6 text-white" />;
      default:
        return <Globe className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="coding-profiles" className="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
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
            <Globe className="w-3.5 h-3.5" />
            <span>Online Presence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Profiles & Network
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Connect with S. Jeyasree on GitHub and LinkedIn.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {codingProfiles.map((profile: CodingProfile, idx: number) => (
            <motion.a
              key={profile.name}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="glass-card p-6 rounded-3xl relative overflow-hidden shadow-lg border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between group"
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${profile.color} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  {renderIcon(profile.iconName)}
                </div>

                <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white mb-1 group-hover:text-brand-500 transition-colors">
                  {profile.name}
                </h3>

                <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
                  {profile.platform}
                </p>

                <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-brand-600 dark:text-brand-400">
                  {profile.handle}
                </span>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs font-bold text-slate-500 dark:text-slate-400 group-hover:text-brand-500 transition-colors">
                <span>View Profile</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};
