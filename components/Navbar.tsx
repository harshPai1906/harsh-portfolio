'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section for nav highlight
      const sections = ['experience', 'work', 'certifications', 'skills', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 400) {
        setActiveSection('about');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#work', id: 'work' },
    { name: 'Certifications', href: '#certifications', id: 'certifications' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3 sm:py-4 transition-all duration-300 pointer-events-none">
      <nav
        className={`mx-auto max-w-6xl pointer-events-auto transition-all duration-500 rounded-full border border-white/60 shadow-2xl backdrop-blur-2xl ${scrolled
            ? 'bg-[#F2EFE7]/50 py-2.5 px-5 sm:px-8 border-[#A92C1F]/30'
            : 'bg-[#F2EFE7]/40 py-3 px-6 sm:px-8'
          }`}
        style={{
          boxShadow: '0 8px 32px 0 rgba(47, 46, 47, 0.1), inset 0 1px 1px 0 rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/hp-logo.png"
              alt="HP Monogram Logo"
              className="h-9 w-9 rounded-xl object-cover shadow-md group-hover:scale-105 transition-all border border-[#A92C1F]/20"
            />
            <span className="font-header text-xs sm:text-sm font-black tracking-wider text-[#2F2E2F] group-hover:text-[#A92C1F] transition-colors">
              HARSH PAI
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2 rounded-full bg-[#E8E3DA]/60 p-1 border border-[#A92C1F]/10">
            {navLinks.map((link) => {
              const isActive = activeSection === (link.id || 'about');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1.5 text-xs font-mono tracking-wider uppercase font-semibold transition-all rounded-full ${isActive
                      ? 'text-white bg-[#A92C1F] shadow-sm'
                      : 'text-[#5A5556] hover:text-[#A92C1F] hover:bg-[#A92C1F]/10'
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://drive.google.com/file/d/1MQ_lLNE_aTd9JtnZJa5tF9NiHHMLoC_6/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#A92C1F] px-5 py-2 text-xs font-bold text-white transition-all hover:bg-[#8A2318] hover:shadow-md active:scale-95"
            >
              Resume
              <FileText className="h-3.5 w-3.5 transition-transform group-hover:scale-110" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="flex items-center justify-center rounded-full border border-[#A92C1F]/20 bg-[#E8E3DA] p-2 text-[#2F2E2F] md:hidden hover:bg-[#A92C1F] hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Glassmorphed Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto mx-auto mt-3 w-[calc(100vw-2rem)] max-w-sm rounded-3xl border border-[#A92C1F]/25 bg-[#F2EFE7]/95 p-5 sm:p-6 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-3 font-mono text-xs tracking-wider text-[#2F2E2F]">
              {navLinks.map((link, idx) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-[#E8E3DA]/60 px-4 py-3 font-bold text-[#2F2E2F] hover:bg-[#A92C1F] hover:text-white transition-all border border-[#A92C1F]/10"
                >
                  <span>{String(idx + 1).padStart(2, '0')}. {link.name.toUpperCase()}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ))}
              <a
                href="https://drive.google.com/file/d/1MQ_lLNE_aTd9JtnZJa5tF9NiHHMLoC_6/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#A92C1F] py-3.5 font-bold text-white shadow-md hover:bg-[#8A2318] transition-colors"
              >
                View Resume
                <FileText className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
