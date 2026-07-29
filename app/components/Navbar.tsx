"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Code2, FolderGit2, Mail, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", icon: Terminal },
    { name: "Skills", href: "#skills", icon: Code2 },
    { name: "Projects", href: "#projects", icon: FolderGit2 },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-purple-600 p-[1px] transition-transform duration-300 group-hover:scale-105">
            <div className="w-full h-full bg-zinc-950 rounded-[11px] flex items-center justify-center font-bold text-sky-400">
              HP
            </div>
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-sky-400 transition-colors">
            Harsh Pai
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                <Icon className="w-4 h-4 text-sky-400/80" />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="relative group overflow-hidden rounded-full p-[1px] focus:outline-none"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-500 rounded-full" />
            <span className="relative px-5 py-2.5 rounded-full bg-zinc-950 text-sm font-semibold text-white flex items-center gap-2 transition-colors group-hover:bg-zinc-900">
              Get In Touch
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            </span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-zinc-900/80 border border-white/10 text-zinc-300 hover:text-white"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card mx-4 mt-2 p-4 rounded-2xl border border-white/10 flex flex-col gap-3">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/10 text-zinc-200 text-sm font-medium"
              >
                <Icon className="w-5 h-5 text-sky-400" />
                {link.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3 bg-gradient-to-r from-sky-500 to-purple-600 rounded-xl font-semibold text-white text-sm mt-2"
          >
            Get In Touch
          </a>
        </div>
      )}
    </header>
  );
}
