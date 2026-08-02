import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200/60 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left Branding */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 text-white font-poppins font-bold flex items-center justify-center text-sm shadow-md">
            SJ
          </div>
          <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
            S. Jeyasree Portfolio
          </span>
        </div>

        {/* Center Signature */}
        <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span>by <strong className="text-slate-900 dark:text-white font-semibold">S. Jeyasree</strong> © {new Date().getFullYear()}</span>
        </div>

        {/* Right Back To Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl glass-card hover:bg-brand-500 hover:text-white text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-sm transition-all group"
          aria-label="Back to Top"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
};
