import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Certification } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

export const CertificationsSection: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-20 relative">
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
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Certifications & Training
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Verified technical certifications in AI/ML engineering and cloud computing.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-3xl relative overflow-hidden shadow-lg border border-slate-200/60 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-500 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-poppins font-bold text-slate-900 dark:text-white mb-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                  Issued by: <span className="text-slate-800 dark:text-slate-200">{cert.issuer}</span>
                </p>

                <p className="text-xs font-medium text-brand-600 dark:text-brand-400">
                  Year: {cert.year}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" />
                  Verified
                </span>
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="text-xs font-bold text-brand-500 hover:underline flex items-center gap-1"
                >
                  <span>View</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {selectedCert && (
        <CertificateModal 
          certification={selectedCert} 
          onClose={() => setSelectedCert(null)} 
        />
      )}
    </section>
  );
};
