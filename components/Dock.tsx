'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MessageSquare, Check } from 'lucide-react';

interface DockProps {
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

export const Dock: React.FC<DockProps> = ({
  email = 'harshpai0hp@gmail.com',
  phone = '+91-9834044641',
  linkedinUrl = 'https://www.linkedin.com/in/harsh-pai-1467a2315/',
  githubUrl = 'https://github.com/harshPai1906',
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const dockItems = [
    {
      id: 'linkedin',
      label: 'LinkedIn Profile',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      ),
      href: linkedinUrl,
      target: '_blank',
      color: 'text-[#0A66C2]',
    },
    {
      id: 'email',
      label: copiedEmail ? 'Email Copied!' : 'Copy Email',
      icon: copiedEmail ? <Check className="h-5 w-5 text-green-500" /> : <Mail className="h-5 w-5" />,
      onClick: handleCopyEmail,
      color: 'text-[#A92C1F]',
    },
    {
      id: 'phone',
      label: copiedPhone ? 'Phone Copied!' : 'Copy Phone',
      icon: copiedPhone ? <Check className="h-5 w-5 text-green-500" /> : <Phone className="h-5 w-5" />,
      onClick: handleCopyPhone,
      color: 'text-[#2F2E2F]',
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp Chat',
      icon: <MessageSquare className="h-5 w-5" />,
      href: 'https://wa.me/919834044641',
      target: '_blank',
      color: 'text-green-600',
    },
    {
      id: 'github',
      label: 'GitHub Profile',
      icon: (
        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      href: githubUrl,
      target: '_blank',
      color: 'text-[#2F2E2F]',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center my-4 sm:my-6 max-w-full">
      <div className="relative inline-flex items-center gap-1.5 sm:gap-3 rounded-full border-2 border-[#A92C1F]/25 bg-[#F2EFE7]/90 px-2.5 sm:px-4 py-2 sm:py-2.5 backdrop-blur-2xl shadow-2xl max-w-full">
        {dockItems.map((item, idx) => {
          const isHovered = hoveredIndex === idx;

          const content = (
            <motion.div
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.35, y: -6 }}
              transition={{ type: 'spring', stiffness: 350, damping: 18 }}
              className={`relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[#E8E3DA] border border-[#A92C1F]/20 text-[#2F2E2F] shadow-md transition-colors hover:bg-[#2F2E2F] hover:text-[#F2EFE7] hover:border-[#A92C1F] cursor-pointer ${item.color || ''
                }`}
            >
              {item.icon}

              {/* Tooltip Label */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.8 }}
                    animate={{ opacity: 1, y: -45, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute whitespace-nowrap rounded-lg bg-[#2F2E2F] px-2.5 py-1 text-[11px] font-mono font-bold text-[#F2EFE7] shadow-xl pointer-events-none border border-[#A92C1F]/40"
                  >
                    {item.label}
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#2F2E2F]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );

          if (item.href) {
            return (
              <a
                key={item.id}
                href={item.href}
                target={item.target}
                rel="noreferrer"
                className="select-none"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={item.id} onClick={item.onClick} className="select-none">
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};
