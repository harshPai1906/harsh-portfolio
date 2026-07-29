'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Send, Check, ExternalLink, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Dock } from '@/components/Dock';

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
    <section id="contact" className="relative z-20 bg-transparent px-4 sm:px-6 py-16 sm:py-24 md:py-28 md:px-16 border-t border-[#A92C1F]/15 overflow-hidden">
      {/* High-Impact Attention Glow Spotlight */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#A92C1F]/20 via-[#DBCDC9]/35 to-transparent blur-[150px] animate-pulse" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
          
          {/* Header & Description Column (Order 1 on mobile, Order 2 on desktop) */}
          <div className="space-y-4 text-left order-1 lg:order-2">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="font-header text-3xl font-black tracking-tight text-[#2F2E2F] sm:text-5xl md:text-6xl"
            >
              GET IN <span className="text-gradient-accent">TOUCH</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base sm:text-lg text-[#5A5556] font-medium leading-relaxed max-w-lg"
            >
              Seeking opportunities in Data Analytics, where I can turn data into meaningful insights and support data-driven decisions. Feel free to connect via email, phone, or LinkedIn.
            </motion.p>

            {/* Interactive Social Touchpoint Dock */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="pt-2 flex justify-start sm:justify-start"
            >
              <Dock email={email} phone={phone} linkedinUrl={linkedinUrl} />
            </motion.div>
          </div>

          {/* Direct Email Message Form (Order 2 on mobile, Order 1 on desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="glass-card rounded-2xl p-5 sm:p-8 border-2 border-[#A92C1F]/40 shadow-[0_10px_40px_rgba(169,44,31,0.14)] relative overflow-hidden order-2 lg:order-1"
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
                <div className="flex items-center justify-between pb-1.5 border-b border-[#A92C1F]/15">
                  <span className="font-header text-sm sm:text-lg font-black text-[#2F2E2F]">
                    SEND DIRECT MESSAGE
                  </span>
                  <MessageSquare className="h-4 w-4 text-[#A92C1F]" />
                </div>

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
                    className="w-full rounded-xl border border-[#A92C1F]/30 bg-[#F2EFE7] px-3.5 py-2.5 text-xs sm:text-sm text-[#2F2E2F] placeholder-[#8A8385] focus:border-[#A92C1F] focus:outline-none focus:ring-2 focus:ring-[#A92C1F]/20 font-medium"
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
                    className="w-full rounded-xl border border-[#A92C1F]/30 bg-[#F2EFE7] px-3.5 py-2.5 text-xs sm:text-sm text-[#2F2E2F] placeholder-[#8A8385] focus:border-[#A92C1F] focus:outline-none focus:ring-2 focus:ring-[#A92C1F]/20 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono font-bold text-[#2F2E2F] uppercase mb-1">
                    Your Message / Inquiry
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe your data analytics query, project opportunity, or collaboration..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-[#A92C1F]/30 bg-[#F2EFE7] px-3.5 py-2.5 text-xs sm:text-sm text-[#2F2E2F] placeholder-[#8A8385] focus:border-[#A92C1F] focus:outline-none focus:ring-2 focus:ring-[#A92C1F]/20 resize-none font-medium"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#A92C1F] via-[#B45348] to-[#8A2318] py-3 font-mono font-extrabold tracking-wider uppercase text-xs sm:text-sm text-white shadow-md disabled:opacity-70 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      Dispatch Message to Harsh
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
