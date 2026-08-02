'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

export interface Card {
  id: number | string;
  src: string;
  alt: string;
  title: string;
  description: string;
  category?: string;
  metrics?: string;
  tags?: string[];
  fullDetails?: string;
  likes?: number;
  isLiked?: boolean;
}

interface CardStackProps {
  customCards?: Card[];
  onSelectCard?: (card: Card) => void;
}

export default function CardStack({ customCards, onSelectCard }: CardStackProps) {
  const initialCards: Card[] = customCards || [
    {
      id: 'churniq-analytics',
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      alt: "ChurnIQ – Customer Churn Analytics Dashboard",
      title: "ChurnIQ – Customer Churn Analytics",
      description: "Customer churn analytics dashboard powered by XGBoost, Pandas, Seaborn & SQL.",
      category: "Data Analytics & ML",
      tags: ['Pandas', 'Seaborn', 'SQL', 'XGBoost', 'Python']
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      alt: "Temperature Monitoring System",
      title: "Temperature Monitoring System",
      description: "Precision 8051 assembly system with LM35 sensor & ADC0804 converter.",
      category: "Embedded Systems & 8051",
      tags: ['8051 Assembly', 'Keil µVision', 'LM35', 'LCD']
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      alt: "MQ-2 Smoke & Gas Detector",
      title: "MQ-2 Smoke & Gas Detector",
      description: "Real-time hazard notification system with sub-3-second trigger response.",
      category: "Safety & Sensors",
      tags: ['Arduino', 'MQ-2 Sensor', 'C++', 'Buzzer']
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      alt: "PostgreSQL & Power BI Sales Analytics",
      title: "Power BI Sales Analytics Dashboard",
      description: "Interactive data visualization dashboard extracting revenue trends & KPIs.",
      category: "Data Analytics & BI",
      tags: ['Power BI', 'SQL', 'PostgreSQL', 'Python']
    },
  ];

  const [cards, setCards] = useState<Card[]>(initialCards);
  const [dragDirection, setDragDirection] = useState<'up' | 'down' | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  // Configuration
  const offset = 10;
  const scaleStep = 0.06;
  const dimStep = 0.15;
  const stiff = 170;
  const damp = 26;
  const borderRadius = 20;
  const swipeThreshold = 50;

  const spring = {
    type: 'spring' as const,
    stiffness: stiff,
    damping: damp
  };

  const moveToEnd = () => {
    setCards(prev => [...prev.slice(1), prev[0]]);
    setCurrentIndex((prev) => (prev + 1) % initialCards.length);
  };

  const moveToStart = () => {
    setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex((prev) => (prev - 1 + initialCards.length) % initialCards.length);
  };

  const handleDragEnd = (_: unknown, info: { velocity: { y: number }; offset: { y: number } }) => {
    const velocity = info.velocity.y;
    const offset = info.offset.y;

    if (Math.abs(offset) > swipeThreshold || Math.abs(velocity) > 500) {
      if (offset < 0 || velocity < 0) {
        setDragDirection('up');
        setTimeout(() => {
          moveToEnd();
          setDragDirection(null);
        }, 150);
      } else {
        setDragDirection('down');
        setTimeout(() => {
          moveToStart();
          setDragDirection(null);
        }, 150);
      }
    }
    dragY.set(0);
  };

  // Theme configuration customized for Harsh's portfolio aesthetics
  const currentTheme = {
    bg: 'bg-transparent',
    text: 'text-[#2F2E2F]',
    textSecondary: 'text-gray-600',
    toggleBg: 'bg-[#E8E3DA] hover:bg-[#DBCDC9]',
    toggleBorder: 'border-[#A92C1F]/30',
    infoBox: 'bg-[#F2EFE7]/90 border-[#A92C1F]/30',
    shadowCard: '0 25px 50px rgba(169, 44, 31, 0.25)',
    shadowCardBack: '0 15px 30px rgba(0, 0, 0, 0.1)',
    cardBorder: 'border-2 border-[#A92C1F]/30',
    controlBg: 'bg-[#E8E3DA] hover:bg-[#DBCDC9]',
    cardInfoBg: 'bg-gradient-to-t from-[#2F2E2F]/95 via-[#2F2E2F]/70 to-transparent'
  };

  return (
    <div className="w-full min-h-[550px] sm:min-h-[650px] flex flex-col items-center justify-center bg-transparent relative overflow-hidden p-2 sm:p-6">

      {/* Top Progress Indicator Bar */}
      <div className="w-full flex items-center justify-center z-30 mb-8 max-w-2xl">
        <div className="flex gap-2 z-20 items-center">
          {initialCards.map((_, i) => (
            <motion.div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex % initialCards.length
                  ? `bg-[#A92C1F] w-8`
                  : `bg-[#A92C1F]/30 w-2`
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>
      </div>

      {/* Main Interactive Stack Container */}
      <div className="relative w-full max-w-2xl aspect-[16/10] sm:aspect-[16/9] overflow-visible z-10 flex items-center justify-center my-4">
        {/* Navigation Buttons */}
        <motion.button
          onClick={moveToStart}
          style={{ top: '50%', y: '-50%' }}
          className={`absolute -left-2 sm:-left-8 p-2.5 sm:p-4 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200 z-30 cursor-pointer shadow-lg`}
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.9 }}
          title="Previous Card"
        >
          <ChevronLeft className={`w-5 h-5 sm:w-6 sm:h-6 ${currentTheme.text}`} />
        </motion.button>

        <motion.button
          onClick={moveToEnd}
          style={{ top: '50%', y: '-50%' }}
          className={`absolute -right-2 sm:-right-8 p-2.5 sm:p-4 rounded-full ${currentTheme.controlBg} border ${currentTheme.toggleBorder} backdrop-blur-sm transition-colors duration-200 z-30 cursor-pointer shadow-lg`}
          whileHover={{ scale: 1.1, x: 4 }}
          whileTap={{ scale: 0.9 }}
          title="Next Card"
        >
          <ChevronRight className={`w-5 h-5 sm:w-6 sm:h-6 ${currentTheme.text}`} />
        </motion.button>

        <ul className="relative w-full h-full m-0 p-0">
          <AnimatePresence>
            {cards.map(({ id, src, alt, title, description, category, metrics, tags }, i) => {
              const isFront = i === 0;
              const brightness = Math.max(0.4, 1 - i * dimStep);
              const baseZ = cards.length - i;

              return (
                <motion.li
                  key={id}
                  className={`absolute inset-0 list-none overflow-hidden ${currentTheme.cardBorder}`}
                  style={{
                    borderRadius: `${borderRadius}px`,
                    cursor: isFront ? 'grab' : 'pointer',
                    touchAction: 'none',
                    boxShadow: isFront
                      ? currentTheme.shadowCard
                      : currentTheme.shadowCardBack,
                    rotateX: isFront ? rotateX : 0,
                    transformPerspective: 1000
                  }}
                  animate={{
                    top: `${i * -offset}%`,
                    scale: 1 - i * scaleStep,
                    filter: `brightness(${brightness})`,
                    zIndex: baseZ,
                    opacity: dragDirection && isFront ? 0 : 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.2 }
                  }}
                  transition={spring}
                  drag={isFront ? 'y' : false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onClick={() => {
                    if (isFront && onSelectCard) {
                      onSelectCard(cards[i]);
                    }
                  }}
                  onDrag={(_, info) => {
                    if (isFront) {
                      dragY.set(info.offset.y);
                    }
                  }}
                  onDragEnd={handleDragEnd}
                  whileDrag={
                    isFront
                      ? {
                          zIndex: cards.length + 1,
                          cursor: 'grabbing',
                          scale: 1.05,
                        }
                      : {}
                  }
                >
                  <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover pointer-events-none select-none"
                    draggable={false}
                  />

                  {/* Top Badges */}
                  {category && (
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full border border-white/30 bg-[#2F2E2F]/80 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-white backdrop-blur-md shadow-md z-20 max-w-[55%] truncate">
                      {category}
                    </div>
                  )}

                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 flex items-center gap-2 z-20">
                    {cards[i]?.likes !== undefined && (
                      <div className={`flex items-center gap-1 rounded-full border px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs font-mono font-bold shadow-md backdrop-blur-md transition-all ${
                        cards[i]?.isLiked 
                          ? 'border-[#A92C1F] bg-[#A92C1F] text-white' 
                          : 'border-white/30 bg-[#2F2E2F]/80 text-white'
                      }`}>
                        <Heart className={`h-3 w-3 ${cards[i]?.isLiked ? 'fill-white' : 'fill-white/30'}`} />
                        <span>{cards[i]?.likes}</span>
                      </div>
                    )}
                  </div>

                  {/* Card Info Overlay */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 p-6 ${currentTheme.cardInfoBg} text-left flex flex-col justify-end z-20`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: isFront ? 1 : 0.8,
                      y: 0
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3 className="text-white font-header text-xl sm:text-2xl font-black tracking-tight leading-tight">
                      {title}
                    </h3>
                    <p className="text-white/90 text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                      {description}
                    </p>

                    {/* Tag Pills */}
                    {tags && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md bg-white/15 border border-white/25 px-2 py-0.5 text-[10px] font-mono text-white font-medium backdrop-blur-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </motion.li>
              );
            })}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
}
