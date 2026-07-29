'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { ConstellationCanvas } from '@/components/ConstellationCanvas';

interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  grade: string;
  tags: string[];
  description: string;
  skillsAcquired: string[];
  verifyUrl: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: 'vlsi-ethnus',
    title: 'VLSI Design & Verification Program',
    issuer: 'Ethnus Engineering Academy',
    date: 'May – June 2025',
    grade: 'Grade A (90/100)',
    tags: ['Verilog HDL', 'ModelSim', 'Intel Quartus', 'Digital VLSI', 'Analog Modeling'],
    description: 'Completed intensive industry training in Digital and Analog VLSI design, hardware description modeling, testbench verification, and logic synthesis.',
    skillsAcquired: [
      'Verilog HDL Hardware Description Modeling',
      'ModelSim Testbench Waveform Verification',
      'Logic Synthesis in Intel Quartus',
      'Digital & Analog VLSI Circuit Architecture'
    ],
    verifyUrl: '#'
  },
  {
    id: 'oracle-data-science',
    title: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle Cloud Academy',
    date: 'August – September 2025',
    grade: 'Certified Professional 2025',
    tags: ['Oracle Cloud', 'Data Science', 'Data Analytics', 'Python', 'ML Pipelines'],
    description: 'Earned the official Oracle Cloud Infrastructure 2025 Certified Data Science Professional credential. Validated expertise in data preparation, machine learning pipelines, cloud reporting, and performance optimization.',
    skillsAcquired: [
      'Cloud Data Science Pipelines & Workflows',
      'Predictive Modeling & Statistical Analytics',
      'Automated Data Visualization Dashboards',
      'Cloud Infrastructure Performance Tuning'
    ],
    verifyUrl: '#'
  }
];

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="relative z-20 bg-transparent px-4 sm:px-6 py-16 sm:py-24 md:py-28 md:px-16 border-t border-[#A92C1F]/15 overflow-hidden">
      {/* Background Ambient Glows & Constellation Laser Network */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
        <ConstellationCanvas />
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] rounded-full bg-[#DBCDC9]/25 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[450px] w-[450px] rounded-full bg-[#A92C1F]/15 blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center max-w-2xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#A92C1F]/30 bg-[#E8E3DA] px-4 py-1.5 text-xs font-semibold text-[#A92C1F] shadow-xs">
            <Award className="h-3.5 w-3.5" />
            Professional Certifications & Accreditations
          </div>
          <h2 className="font-header text-3xl font-black tracking-tight text-[#2F2E2F] sm:text-5xl md:text-6xl">
            CERTIFICATIONS & <span className="text-gradient-accent">CREDENTIALS</span>
          </h2>
          <p className="text-[#5A5556] text-sm sm:text-base font-medium">
            Official industry certifications in VLSI hardware verification and Oracle Cloud Data Science.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="glass-card glass-card-hover rounded-3xl p-5 sm:p-8 flex flex-col justify-between border-2 border-[#A92C1F]/20 hover:border-[#A92C1F] hover:shadow-[0_20px_40px_rgba(169,44,31,0.18)] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Glowing Top Ribbon */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#A92C1F] via-[#DBCDC9] to-[#8A2318] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Header Badge & Date */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  <div className="flex items-center gap-2 rounded-full border border-[#A92C1F]/30 bg-[#F2EFE7] px-3.5 py-1 text-xs font-semibold text-[#2F2E2F]">
                    <ShieldCheck className="h-4 w-4 text-[#A92C1F]" />
                    {cert.issuer}
                  </div>
                  <div className="rounded-full bg-[#A92C1F] px-3.5 py-1 text-xs font-mono font-bold text-white shadow-xs">
                    {cert.grade}
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-subheading text-xl sm:text-2xl font-extrabold text-[#2F2E2F] mb-2 leading-snug group-hover:text-[#A92C1F] transition-colors">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-[#A92C1F] font-bold mb-5 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-[#A92C1F]" />
                  COMPLETED: {cert.date.toUpperCase()}
                </div>

                <p className="text-sm text-[#5A5556] leading-relaxed mb-6 font-medium">
                  {cert.description}
                </p>

                {/* Skills Acquired List */}
                <div className="space-y-2.5 mb-6 pt-4 border-t border-[#A92C1F]/15">
                  <div className="text-xs font-mono uppercase tracking-wider text-[#A92C1F] font-bold">
                    Key Competencies & Verified Skills
                  </div>
                  {cert.skillsAcquired.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-[#2F2E2F] font-medium">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#A92C1F] shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#A92C1F]/15">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-[#F2EFE7] border border-[#A92C1F]/25 px-2.5 py-1 text-xs text-[#2F2E2F] font-mono font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
