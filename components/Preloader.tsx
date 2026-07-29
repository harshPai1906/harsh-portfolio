'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const words = [
  'Hello',
  'नमस्ते',
  'नमस्कार',
  'こんにちは',
  'Bonjour',
  'Hola',
  '안녕하세요',
  'مرحبا',
  'Olá',
];

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);
  const [progress, setProgress] = useState(0);

  const wordDuration = 450; // ms per word visible
  const totalDuration = words.length * wordDuration;

  const finish = useCallback(() => {
    if (isFinishing) return;
    setIsFinishing(true);
    setTimeout(() => {
      onComplete();
    }, 900); // match exit animation duration
  }, [isFinishing, onComplete]);

  useEffect(() => {
    // Cycle through words
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(wordInterval);
          // Small delay on last word before finishing
          setTimeout(() => finish(), 600);
          return prev;
        }
        return prev + 1;
      });
    }, wordDuration);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (totalDuration / 30);
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, 30);

    return () => {
      clearInterval(wordInterval);
      clearInterval(progressInterval);
    };
  }, [totalDuration, finish]);

  return (
    <AnimatePresence>
      {!isFinishing ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1a1a1a] overflow-hidden"
          exit={{
            y: '-100%',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
        >
          {/* Subtle background grain/texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Radial glow behind the word */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: '500px',
              height: '500px',
              background:
                'radial-gradient(circle, rgba(169, 44, 31, 0.08) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Top line accent */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#A92C1F] to-transparent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Counter in corner */}
          <div className="absolute top-8 right-8 flex items-center gap-3">
            <span className="text-[#A92C1F]/40 text-xs font-mono tracking-widest">
              {String(currentWordIndex + 1).padStart(2, '0')} / {String(words.length).padStart(2, '0')}
            </span>
          </div>

          {/* Initials watermark */}
          <motion.div
            className="absolute text-[20vw] font-extrabold text-[#A92C1F]/[0.03] select-none pointer-events-none leading-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            HP
          </motion.div>

          {/* Main word animation */}
          <div className="relative z-10 flex items-center justify-center min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.span
                key={currentWordIndex}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F2EFE7] block"
                style={{
                  fontFamily: "'Inter', system-ui, sans-serif",
                }}
                initial={{
                  opacity: 0,
                  y: 40,
                  filter: 'blur(10px)',
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: -40,
                  filter: 'blur(10px)',
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {words[currentWordIndex]}
                <motion.span
                  className="text-[#A92C1F]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  .
                </motion.span>
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Bottom progress bar */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48 sm:w-64">
            <div className="relative h-[1px] w-full bg-[#A92C1F]/10 overflow-hidden rounded-full">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#A92C1F] to-[#DBCDC9]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-[0.3em] text-[#A92C1F]/30 uppercase">
                Loading
              </span>
              <span className="text-[10px] font-mono tracking-wider text-[#A92C1F]/30">
                {Math.round(progress)}%
              </span>
            </div>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute top-8 left-8 w-6 h-6 border-l border-t border-[#A92C1F]/20" />
          <div className="absolute bottom-8 right-8 w-6 h-6 border-r border-b border-[#A92C1F]/20" />
        </motion.div>
      ) : (
        /* Curtain reveal - split panels sliding away */
        <motion.div
          key="curtain"
          className="fixed inset-0 z-[9999] bg-[#1a1a1a]"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
        />
      )}
    </AnimatePresence>
  );
};
