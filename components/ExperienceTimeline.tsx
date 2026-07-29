'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2, Award, Sparkles } from 'lucide-react';

interface TimelineItem {
  id: string;
  type: 'work' | 'education' | 'leadership';
  title: string;
  subtitle: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    id: 'internship-mumbai',
    type: 'work',
    title: 'Data Analyst Intern',
    subtitle: 'Confection Cosmos Pvt. Ltd., Mumbai',
    period: 'May 2025 – Jun 2025',
    location: 'Mumbai, India',
    description: 'Analyzed business datasets, extracted operational trends & performance metrics, performed data cleaning and visualization, and generated actionable data insights for leadership.',
    highlights: [
      'Analyzed business datasets & key metrics',
      'Built data visualization dashboards & reports',
      'Performed data cleaning & trend analysis'
    ],
    tags: ['Data Analysis', 'Python', 'Data Analytics', 'Visualization', 'SQL']
  },
  {
    id: 'head-design-secretary',
    type: 'leadership',
    title: 'Head of Design & Secretary',
    subtitle: 'Marathi Literary Association, VIT Vellore',
    period: '2024 – Present',
    location: 'VIT Vellore',
    description: 'Directing design strategy, digital branding content creation, promotional poster designs, and event execution for major campus cultural initiatives.',
    highlights: [
      'Directed visual branding & poster designs',
      'Managed team of student designers',
      'Organized large-scale campus cultural events'
    ],
    tags: ['Leadership', 'Design Direction', 'Event Execution', 'Team Lead']
  },
  {
    id: 'vit-ece',
    type: 'education',
    title: 'B.Tech in Electronics & Communication Engineering',
    subtitle: 'VIT Vellore',
    period: '2023 – Present',
    location: 'Vellore, Tamil Nadu',
    description: 'Maintaining an 8.45 CGPA at VIT Vellore. Specializing in embedded hardware, microcontrollers (8051, Arduino, Pi), Verilog HDL, VLSI circuit verification, and signal processing.',
    highlights: [
      '8.45 CGPA Academic Performance',
      'Hands-on 8051 Assembly & Keil µVision',
      'Sensors, Actuators & Hardware Simulation'
    ],
    tags: ['VIT Vellore', 'ECE', 'Embedded Systems', 'VLSI Design']
  }
];

export const ExperienceTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const getItemIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'leadership':
        return Award;
      case 'education':
        return GraduationCap;
      default:
        return Briefcase;
    }
  };

  const renderCardContent = (item: TimelineItem) => (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 280, damping: 18 }}
      className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 shadow-xl border-2 border-[#A92C1F]/20 hover:border-[#A92C1F] hover:shadow-[0_20px_40px_rgba(169,44,31,0.18)] transition-all duration-300 relative overflow-hidden group"
    >
      {/* Glowing Hover Ribbon */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#A92C1F] via-[#DBCDC9] to-[#8A2318] opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Badge Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#A92C1F]/30 bg-[#F2EFE7] px-3 py-1 text-xs font-mono font-bold text-[#A92C1F] shadow-xs">
          <Calendar className="h-3.5 w-3.5" />
          {item.period}
        </span>
        <span className="text-xs font-mono text-[#6B6567] flex items-center gap-1">
          <MapPin className="h-3 w-3 text-[#A92C1F]" />
          {item.location}
        </span>
      </div>

      {/* Title & Subtitle */}
      <h3 className="font-subheading text-2xl font-extrabold text-[#2F2E2F] leading-snug group-hover:text-[#A92C1F] transition-colors">
        {item.title}
      </h3>
      <div className="font-subheading text-sm font-bold text-[#A92C1F] mb-3">
        {item.subtitle}
      </div>

      <p className="text-sm text-[#5A5556] leading-relaxed mb-4 font-normal">
        {item.description}
      </p>

      {/* Highlights */}
      <div className="space-y-2 mb-5 pt-3 border-t border-[#A92C1F]/15">
        {item.highlights.map((hl) => (
          <div key={hl} className="flex items-center gap-2 text-xs text-[#2F2E2F] font-medium">
            <CheckCircle2 className="h-3.5 w-3.5 text-[#A92C1F] shrink-0" />
            <span>{hl}</span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {item.tags.map((tag) => (
          <motion.span
            key={tag}
            whileHover={{ scale: 1.1, backgroundColor: '#A92C1F', color: '#FFF' }}
            className="rounded-md bg-[#F2EFE7] border border-[#A92C1F]/25 px-2.5 py-0.5 text-[11px] font-mono text-[#2F2E2F] font-medium transition-colors cursor-pointer"
          >
            {tag}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="experience" ref={containerRef} className="relative z-20 bg-transparent px-4 sm:px-6 py-16 sm:py-24 md:py-28 md:px-16 border-t border-[#A92C1F]/15 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#DBCDC9]/25 blur-[150px]" />
      <div className="pointer-events-none absolute right-10 bottom-20 h-[400px] w-[400px] rounded-full bg-[#A92C1F]/10 blur-[130px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-20 text-center max-w-3xl mx-auto space-y-4">

          <h2 className="font-header text-3xl font-black tracking-tight text-[#2F2E2F] sm:text-5xl md:text-6xl">
            EXPERIENCE & <span className="text-gradient-accent">TIMELINE</span>
          </h2>
          <p className="text-[#5A5556] text-sm sm:text-base font-medium leading-relaxed">
            A chronological timeline of data analytics internships, campus leadership roles, and academic milestones at VIT Vellore.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line (Desktop: center, Mobile: left-4) */}
          <div className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-[#A92C1F]/20" />

          {/* Animated Interactive Glowing Red Fill Line */}
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute left-4 sm:left-6 md:left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 bg-gradient-to-b from-[#A92C1F] via-[#DBCDC9] to-[#8A2318] rounded-full z-10 shadow-[0_0_20px_#A92C1F]"
          />

          {/* Timeline Nodes Grid */}
          <div className="space-y-10 md:space-y-16">
            {TIMELINE_ITEMS.map((item, index) => {
              const Icon = getItemIcon(item.type);
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex flex-col md:grid md:grid-cols-2 items-center"
                >
                  {/* Left Column on Desktop */}
                  <div className={`w-full ${isLeft ? 'pl-8 pr-1 sm:pl-12 md:pl-0 md:pr-12' : 'hidden md:block'}`}>
                    {isLeft && renderCardContent(item)}
                  </div>

                  {/* Interactive Rotating Node Circle Indicator */}
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 360 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                    className="absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center h-9 w-9 sm:h-11 sm:w-11 rounded-full bg-[#F2EFE7] border-2 border-[#A92C1F] z-20 shadow-[0_0_20px_rgba(169,44,31,0.4)] cursor-pointer group"
                  >
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-[#A92C1F] text-white shadow-inner group-hover:bg-[#8A2318] transition-colors">
                      <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                    </div>
                  </motion.div>

                  {/* Right Column on Desktop */}
                  <div className={`w-full ${!isLeft ? 'pl-8 pr-1 sm:pl-12 md:pr-0 md:pl-12' : 'hidden md:block'}`}>
                    {!isLeft && renderCardContent(item)}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
