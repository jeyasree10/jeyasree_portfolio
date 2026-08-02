import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { Certification } from '../data/portfolioData';

interface CertificateModalProps {
  certification: Certification | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white text-slate-900 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden my-8 relative flex flex-col max-h-[90vh]"
        >
          {/* Modal Toolbar */}
          <div className="p-4 sm:px-8 bg-slate-900 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-poppins font-bold text-base sm:text-lg">{certification.title}</span>
            </div>

            <div className="flex items-center gap-3">
              {certification.verifyUrl && certification.verifyUrl !== '#' && (
                <a
                  href={certification.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold shadow-md transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Open Certificate</span>
                </a>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 bg-slate-100 flex-1 flex flex-col items-center justify-center min-h-[70vh] overflow-hidden">
            {certification.verifyUrl && certification.verifyUrl.endsWith('.pdf') ? (
              <iframe 
                src={`${certification.verifyUrl}#toolbar=0`}
                title={`${certification.title} Certificate`}
                className="w-full h-full min-h-[70vh] rounded-xl shadow-lg border border-slate-200"
              />
            ) : certification.image || (certification.verifyUrl && !certification.verifyUrl.endsWith('.pdf')) ? (
              <img 
                src={certification.image || certification.verifyUrl} 
                alt={`${certification.title} Certificate`} 
                className="max-w-full h-auto max-h-full rounded-xl shadow-lg border border-slate-200 object-contain"
              />
            ) : (
              <div className="text-slate-500 flex flex-col items-center gap-3">
                <p>No preview available.</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
