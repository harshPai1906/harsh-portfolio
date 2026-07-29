'use client';

import React, { useRef } from 'react';

interface ScrollyCanvasProps {
  children?: React.ReactNode;
  onScrollProgress?: (progress: number) => void;
}

export const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative min-h-screen h-screen w-full bg-[#F2EFE7]">
      {/* Sticky Background & Overlay Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#F2EFE7]">
        {/* Ambient Gradient Glows */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#DBCDC9]/25 blur-[160px]" />
        <div className="pointer-events-none absolute right-10 top-1/4 h-[400px] w-[400px] rounded-full bg-[#A92C1F]/10 blur-[140px]" />
        <div className="pointer-events-none absolute left-10 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#E8E3DA]/60 blur-[140px]" />
        
        {/* Ambient Vignette */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#F2EFE7]/30 via-transparent to-[#F2EFE7]/60" />
        
        {/* Floating Children / Parallax Overlay */}
        {children}
      </div>
    </div>
  );
};
