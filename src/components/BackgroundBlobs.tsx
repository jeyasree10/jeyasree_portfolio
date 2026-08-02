import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundBlobs: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Blob 1: Soft Blue Accent */}
      <motion.div
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -left-20 w-[450px] h-[450px] bg-brand-500/15 dark:bg-brand-500/20 rounded-full blur-[100px]"
      />

      {/* Blob 2: Sky Blue Gradient */}
      <motion.div
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -30, 0],
          scale: [1, 1.2, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-sky-400/15 dark:bg-sky-400/15 rounded-full blur-[120px]"
      />

      {/* Blob 3: Deep Indigo Glow */}
      <motion.div
        animate={{
          x: [0, 40, -50, 0],
          y: [0, -30, 60, 0],
          scale: [1, 1.1, 0.85, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-20 left-1/4 w-[480px] h-[480px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-[110px]"
      />
    </div>
  );
};
