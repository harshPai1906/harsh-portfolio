'use client';

import React from 'react';
import { motion, MotionValue } from 'framer-motion';


interface OverlayProps {
  progress?: MotionValue<number>;
}

export const Overlay: React.FC<OverlayProps> = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col justify-between">
      {/* Editorial Hero Layout */}
      <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8 md:p-14 overflow-hidden bg-[#F2EFE7]">
        {/* Top Header Row with Top Padding to clear Navbar */}
        <div className="relative z-20 flex items-start justify-between w-full pt-16 sm:pt-22 md:pt-20">
          {/* Top Left */}
          <div className="flex flex-col items-start text-left max-w-[170px] sm:max-w-xs md:max-w-sm">
            <p className="font-header text-[#2F2E2F] font-extrabold text-[9px] sm:text-xs md:text-sm uppercase tracking-tight leading-tight">
              &ldquo;DESIGNING SOLUTIONS,<br />
              DEVELOPING EXPERIENCES,<br />
              DELIVERING <span className="text-[#2F2E2F] font-black">IMPACT.&rdquo;</span>
            </p>
          </div>

          {/* Top Right */}
          <div className="flex flex-col items-end text-right">
            <span className="font-header text-[#A92C1F] font-black text-[10px] sm:text-sm md:text-base tracking-wider uppercase">
              HARSH PAI
            </span>
          </div>
        </div>

        {/* Center Container: Giant HARSH. Text, Visible Background Animations & Portrait */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-10">
          {/* Animated Background Motion Layer (Visible Grid, Orbiting Rings & Floating Orbs) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-12 flex items-center justify-center">
            {/* 1. Animated Perspective Grid Lines */}
            <motion.div
              animate={{ y: [0, 40, 0] }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
              className="absolute inset-0 bg-[linear-gradient(to_right,#A92C1F15_1px,transparent_1px),linear-gradient(to_bottom,#A92C1F15_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60"
            />

            {/* 2. Rotating Dash Tech Orbit Ring 1 (Large Outer Ring) */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
              className="absolute h-[320px] w-[320px] sm:h-[550px] sm:w-[550px] md:h-[680px] md:w-[680px] rounded-full border-2 border-dashed border-[#A92C1F]/25 opacity-70"
            />

            {/* 3. Counter-Rotating Dash Orbit Ring 2 (Inner Ring) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
              className="absolute h-[240px] w-[240px] sm:h-[380px] sm:w-[380px] md:h-[480px] md:w-[480px] rounded-full border border-dashed border-[#A92C1F]/35 opacity-80"
            />

            {/* 4. Large Pulsing Crimson Glow Mesh (Center Core) */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="absolute h-[280px] w-[280px] sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px] rounded-full bg-gradient-to-tr from-[#A92C1F]/35 via-[#DBCDC9]/40 to-transparent blur-[80px]"
            />

            {/* 5. Floating Glowing Kinetic Particles */}
            {[
              { top: '25%', left: '15%', size: 'h-3 w-3 sm:h-4 sm:w-4', delay: 0 },
              { top: '35%', right: '18%', size: 'h-2.5 w-2.5 sm:h-3 sm:w-3', delay: 1 },
              { top: '65%', left: '20%', size: 'h-4 w-4 sm:h-5 sm:w-5', delay: 2 },
              { top: '70%', right: '20%', size: 'h-3 w-3 sm:h-4 sm:w-4', delay: 1.5 },
            ].map((pt, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -25, 0],
                  x: [0, 15, 0],
                  opacity: [0.4, 0.9, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + i,
                  delay: pt.delay,
                  ease: 'easeInOut',
                }}
                style={{ top: pt.top, left: pt.left, right: pt.right }}
                className={`absolute ${pt.size} rounded-full bg-[#A92C1F] shadow-[0_0_15px_#A92C1F] opacity-70`}
              />
            ))}
          </div>

          {/* Giant Background Text HARSH. in Extended Display Font */}
          <h1 className="font-monument text-[16vw] sm:text-[17.5vw] md:text-[18.5vw] lg:text-[19.5vw] font-black tracking-tighter text-[#A92C1F] leading-none select-none uppercase max-w-full px-2 text-center relative z-15">
            HARSH<span className="text-[#A92C1F]">.</span>
          </h1>

          {/* Centered Portrait Cutout */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center h-full max-h-[52vh] sm:max-h-[70vh] md:max-h-[85vh] z-20">
            <img
              src="/harsh-cutout.png"
              alt="Harsh Gangaram Pai"
              className="h-full max-h-[50vh] sm:max-h-[68vh] md:max-h-[85vh] object-contain drop-shadow-2xl select-none pointer-events-none"
            />
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div className="relative z-20 flex items-end justify-between w-full pb-3 sm:pb-6 md:pb-8">
          {/* Bottom Left */}
          <div className="flex flex-col items-start text-left">
            <div className="font-header flex flex-col text-[#A92C1F] font-black text-[9px] sm:text-xs md:text-base leading-snug">
              <span>4TH YEAR</span>
              <span>VIT VELLORE</span>
              <span>ECE</span>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="flex flex-col items-end text-right">
            <div className="font-header flex flex-col text-[#A92C1F] font-black text-[9px] sm:text-xs md:text-base leading-snug">
              <span>DEVELOPER</span>
              <span>DESIGNER</span>
              <span>PROBLEM SOLVER</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
