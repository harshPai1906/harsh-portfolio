'use client';

import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-[#A92C1F]/15 bg-transparent py-8 text-center text-xs text-[#5A5556] font-mono relative z-20">
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-center font-medium">
        <span>
          © {new Date().getFullYear()} Harsh Gangaram Pai
        </span>
      </div>
    </footer>
  );
};
