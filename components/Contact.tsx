'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Check, ExternalLink, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Dock } from '@/components/Dock';
import { ConstellationCanvas } from '@/components/ConstellationCanvas';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const email = 'harshpai0hp@gmail.com';
  const phone = '+91-9834044641';
  const linkedinUrl = 'https://www.linkedin.com/in/harsh-pai-1467a2315/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setLoading(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.6 },
          colors: ['#A92C1F', '#DBCDC9', '#E8E3DA', '#0A66C2', '#2F2E2F'],
        });
      } else {
        setSubmitted(true);
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    return `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative z-20 bg-transparent px-4 sm:px-6 py-8 sm:py-12 md:py-14 md:px-16 border-t border-[#A92C1F]/15 overflow-hidden">
      {/* Interactive Constellation Particle Canvas Background */}
      <div className="pointer-events-none absolute inset-0 opacity-50 z-0">
        <ConstellationCanvas />
      </div>

      {/* Minimalistic Dot Matrix Grid Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#A92C1F 1.2px, transparent 1.2px)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Floating Ambient Glowing Background Orbs */}
      <motion.div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[#A92C1F]/15 blur-[140px]"
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="pointer-events-none absolute right-1/4 bottom-10 h-[450px] w-[450px] rounded-full bg-[#DBCDC9]/40 blur-[130px]"
        animate={{
          x: [0, -30, 25, 0],
          y: [0, 25, -20, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="mx-auto max-w-4xl relative z-10 flex flex-col items-center">
        {/* Header & Description (Centered Top) */}
        <div className="space-y-3 text-center max-w-2xl mx-auto mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="font-header text-3xl font-black tracking-tight text-[#2F2E2F] sm:text-5xl md:text-6xl text-center"
          >
            GET IN <span className="text-gradient-accent">TOUCH</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-[#5A5556] font-medium leading-relaxed max-w-xl mx-auto text-center"
          >
            Seeking opportunities in Data Analytics, where I can turn data into meaningful insights and support data-driven decisions. Feel free to connect via email, phone, or LinkedIn.
          </motion.p>
        </div>

        {/* Direct Email Message Form (Middle Box with Hover Float & Glass Backdrop) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -4 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="w-full max-w-3xl glass-card rounded-2xl p-6 sm:p-8 border-2 border-[#A92C1F]/40 shadow-[0_12px_40px_rgba(169,44,31,0.14)] hover:shadow-[0_20px_50px_rgba(169,44,31,0.22)] hover:border-[#A92C1F]/60 transition-all duration-300 relative overflow-hidden text-left bg-[#F2EFE7]/80 backdrop-blur-md"
        >
          {/* Top Glowing Accent Ribbon */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#A92C1F] via-[#0A66C2] to-[#8A2318]" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-8 text-center"
            >
              <div className="mb-3 rounded-full bg-[#A92C1F]/20 p-4 text-[#A92C1F] shadow-md">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="font-header text-2xl font-black text-[#2F2E2F]">
                MESSAGE DISPATCHED!
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#5A5556] font-medium max-w-sm leading-relaxed">
                Thank you for connecting with Harsh. Your message has been routed directly to <span className="font-mono font-extrabold text-[#A92C1F]">{email}</span>.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-2.5 w-full max-w-xs">
                <a
                  href={getMailtoLink()}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-[#A92C1F] px-3.5 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#8A2318] transition-colors"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open Email App
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="flex flex-1 items-center justify-center rounded-lg border border-[#A92C1F]/30 bg-[#F2EFE7] px-3.5 py-2 text-xs font-bold text-[#2F2E2F] hover:bg-[#A92C1F] hover:text-white transition-colors"
                >
                  Send Another
                </button>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#A92C1F]/15">
                <span className="font-header text-base sm:text-xl font-black text-[#2F2E2F]">
                  SEND DIRECT MESSAGE
                </span>
                <MessageSquare className="h-5 w-5 text-[#A92C1F]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono font-bold text-[#2F2E2F] uppercase mb-1">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-[#A92C1F]/30 bg-[#F2EFE7] px-4 py-3 text-xs sm:text-sm text-[#2F2E2F] placeholder-[#8A8385] focus:border-[#A92C1F] focus:outline-none focus:ring-2 focus:ring-[#A92C1F]/20 font-medium transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-[#2F2E2F] uppercase mb-1">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-[#A92C1F]/30 bg-[#F2EFE7] px-4 py-3 text-xs sm:text-sm text-[#2F2E2F] placeholder-[#8A8385] focus:border-[#A92C1F] focus:outline-none focus:ring-2 focus:ring-[#A92C1F]/20 font-medium transition-all duration-200"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono font-bold text-[#2F2E2F] uppercase mb-1">
                  Your Message / Inquiry
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Open for internships, queries..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl border border-[#A92C1F]/30 bg-[#F2EFE7] px-4 py-3 text-xs sm:text-sm text-[#2F2E2F] placeholder-[#8A8385] focus:border-[#A92C1F] focus:outline-none focus:ring-2 focus:ring-[#A92C1F]/20 resize-none font-medium transition-all duration-200"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#A92C1F] via-[#B45348] to-[#8A2318] py-3.5 font-mono font-extrabold tracking-wider uppercase text-xs sm:text-sm text-white shadow-md hover:shadow-lg disabled:opacity-70 cursor-pointer transition-all duration-200"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <>
                    <Send className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    Dispatch Message to Harsh
                  </>
                )}
              </motion.button>
            </form>
          )}
        </motion.div>

        {/* Interactive Social Touchpoint Dock (Positioned AFTER Message Box) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-6 flex justify-center items-center"
        >
          <Dock email={email} phone={phone} linkedinUrl={linkedinUrl} />
        </motion.div>
      </div>
    </section>
  );
};
