'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeBannerProps {
  items?: string[];
  direction?: 'left' | 'right';
  variant?: 'crimson' | 'vanilla';
}

const DEFAULT_QUOTE_ITEMS = [
  'DESIGNING SOLUTIONS, DEVELOPING EXPERIENCES, DELIVERING IMPACT',
  'ENGINEERING THE FUTURE THROUGH HARDWARE & DATA ANALYTICS',
  'SIMPLICITY IS THE ULTIMATE SOPHISTICATION',
  'TURNING COMPLEX PROBLEMS INTO ELEGANT DESIGN',
  'CRAFTING DATA INSIGHTS & HIGH-PERFORMANCE FIRMWARE',
  'INNOVATION DISTINGUISHES BETWEEN A LEADER AND A FOLLOWER',
];

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = DEFAULT_QUOTE_ITEMS,
  direction = 'left',
  variant = 'crimson',
}) => {
  const isCrimson = variant === 'crimson';

  return (
    <div
      className={`relative z-20 w-full overflow-hidden py-4 border-y ${
        isCrimson
          ? 'bg-[#A92C1F] text-[#F2EFE7] border-[#8A2318] shadow-md'
          : 'bg-[#E8E3DA] text-[#2F2E2F] border-[#A92C1F]/20'
      }`}
    >
      {/* Infinite Scrolling Track */}
      <div className="flex w-max select-none">
        <motion.div
          animate={{
            x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
          }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 78,
          }}
          className="flex items-center gap-10 pr-10"
        >
          {/* Loop for infinite continuous marquee flow */}
          {[...items, ...items, ...items, ...items].map((text, idx) => (
            <div key={idx} className="flex items-center gap-10 shrink-0">
              <span className="font-header font-black text-sm sm:text-base md:text-lg tracking-wider uppercase">
                &ldquo;{text}&rdquo;
              </span>
              <span
                className={`h-2.5 w-2.5 rounded-full shrink-0 ${
                  isCrimson ? 'bg-[#F2EFE7]/80' : 'bg-[#A92C1F]'
                }`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
