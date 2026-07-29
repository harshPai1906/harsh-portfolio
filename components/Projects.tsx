'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, FolderGit2, Heart, CheckCircle2, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import CardStack, { Card } from '@/components/ui/card-stack';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  metrics: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  fullDetails: string;
  features: string[];
}

const PROJECTS: Project[] = [
  {
    id: 'obstacle-robot',
    title: 'Obstacle Avoiding Robot',
    category: 'Robotics & Microcontrollers',
    description: 'Integrated Arduino microcontroller with motors and multiple sensors enabling dynamic path correction.',
    metrics: '>90% Collision Reduction',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80',
    tags: ['Arduino', 'Raspberry Pi', 'Sensors', 'C++', 'Motor Drivers'],
    demoUrl: '#',
    githubUrl: '#',
    fullDetails: 'Engineered an autonomous mobile robot using an Arduino microcontroller and Raspberry Pi integrated with ultrasonic/IR sensors. Programmed sensor-driven navigation algorithms reducing collision rates by over 90%. Applied embedded circuit integration to optimize battery life and motor response time.',
    features: ['Dynamic path correction algorithm', 'Multi-sensor data fusion', 'Pulse Width Modulation (PWM) motor control', 'Embedded circuit power optimization']
  },
  {
    id: 'temp-monitor',
    title: 'Temperature Monitoring System',
    category: 'Embedded Systems & 8051',
    description: 'Engineered a precision temperature monitoring system using LM35, ADC0804, and 8051 with ±1°C accuracy.',
    metrics: '±1°C High Precision',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    tags: ['8051 Assembly', 'Keil µVision', 'LM35', 'ADC0804', 'Proteus'],
    demoUrl: '#',
    githubUrl: '#',
    fullDetails: 'Designed and implemented an embedded hardware temperature sensor system using the 8051 microcontroller, LM35 analog temperature sensor, and ADC0804 converter. Programmed in Keil µVision, enhancing data communication efficiency by 20%. Integrated LCD display output to reduce human reading error by 15%.',
    features: ['Keil µVision 8051 C/Assembly programming', 'LM35 to ADC0804 analog signal conditioning', 'Custom 16x2 LCD display driver', '20% boosted communication efficiency']
  },
  {
    id: 'smoke-detector',
    title: 'MQ-2 Smoke & Gas Detector',
    category: 'Safety & Sensors',
    description: 'Developed real-time smoke detection system with <3s response time and 92% detection accuracy.',
    metrics: '<3s Fast Response',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    tags: ['Arduino', 'MQ-2 Sensor', 'C++', 'Buzzer Alerts', 'Hardware Calib'],
    demoUrl: '#',
    githubUrl: '#',
    fullDetails: 'Created a hardware safety monitoring system using an MQ-2 gas/smoke sensor and Arduino. Calibrated sensor thresholds to achieve 92% detection accuracy with a sub-3-second response time. Integrated dual buzzer and LED alert indicators for 100% real-time hazard notification.',
    features: ['Sub-3-second response trigger', 'MQ-2 analog voltage calibration (92% accuracy)', 'Buzzer audio & dual LED visual indicators', 'Real-time threshold interrupt loop']
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const customStackCards: Card[] = PROJECTS.map((proj) => ({
    id: proj.id,
    src: proj.image,
    alt: proj.title,
    title: proj.title,
    description: proj.description,
    category: proj.category,
    metrics: proj.metrics,
    tags: proj.tags
  }));

  const handleConfetti = (e: React.MouseEvent) => {
    e.stopPropagation();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#A92C1F', '#DBCDC9', '#E8E3DA', '#2F2E2F']
    });
  };

  const handleSelectStackCard = (stackCard: Card) => {
    const found = PROJECTS.find((p) => p.id === stackCard.id);
    if (found) {
      setSelectedProject(found);
    }
  };

  return (
    <section id="work" className="relative z-20 bg-transparent px-4 sm:px-6 py-16 sm:py-24 md:py-28 md:px-16 border-t border-[#A92C1F]/15">
      {/* Background Subtle Gradient Blobs */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#DBCDC9]/20 blur-[140px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-10 h-[500px] w-[500px] rounded-full bg-[#E8E3DA]/60 blur-[140px]" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>

            <h2 className="font-header mt-3 sm:mt-4 text-3xl font-black tracking-tight text-[#2F2E2F] sm:text-5xl md:text-6xl">
              FEATURED <span className="text-gradient-accent">WORKS</span>
            </h2>
          </div>

          <div className="text-xs sm:text-sm font-mono text-[#A92C1F] font-bold">
            SHOWCASING 03 HARDWARE PROJECTS
          </div>
        </div>

        {/* 1. Interactive 3D Card Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CardStack customCards={customStackCards} onSelectCard={handleSelectStackCard} />
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Modal Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-[#2F2E2F]/60 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-[#A92C1F]/30 bg-[#F2EFE7] p-6 shadow-2xl md:p-10 text-[#2F2E2F]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close project modal"
                className="absolute top-6 right-6 rounded-full border border-[#A92C1F]/30 bg-[#E8E3DA] p-2 text-[#2F2E2F] hover:bg-[#A92C1F] hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#A92C1F]/30 bg-[#E8E3DA] px-3 py-1 text-xs font-semibold text-[#A92C1F] mb-4">
                {selectedProject.category}
              </div>

              <h3 className="text-3xl font-extrabold sm:text-4xl text-[#2F2E2F]">
                {selectedProject.title}
              </h3>

              <div className="my-6 h-72 w-full overflow-hidden rounded-2xl bg-[#E8E3DA] border border-[#A92C1F]/20">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="text-base text-[#5A5556] leading-relaxed font-medium">
                {selectedProject.fullDetails}
              </p>

              <div className="mt-6 space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#A92C1F] font-mono">
                  Key Technical Features & Achievements
                </h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {selectedProject.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-sm text-[#2F2E2F] font-medium">
                      <CheckCircle2 className="h-4 w-4 text-[#A92C1F] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#A92C1F]/20 pt-6">
                <button
                  onClick={handleConfetti}
                  className="flex items-center gap-2 rounded-full bg-[#A92C1F] px-6 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity shadow-md"
                >
                  <Heart className="h-4 w-4 fill-white" />
                  Applaud Project
                </button>

                <div className="flex items-center gap-3">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 rounded-full border border-[#A92C1F]/40 bg-[#E8E3DA] px-4 py-2.5 text-sm font-semibold text-[#A92C1F] hover:bg-[#A92C1F] hover:text-white transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Inquire About Project
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
