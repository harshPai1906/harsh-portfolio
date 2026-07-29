'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code2, Wrench, Palette, Brain, CheckCircle2, Database } from 'lucide-react';

interface SkillCategory {
  title: string;
  subtitle: string;
  icon: React.ElementType;
  skills: { name: string; detail?: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data Analytics & Databases',
    subtitle: 'Business Intelligence, SQL & Visualization',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', detail: 'Relational DB & SQL' },
      { name: 'Power BI', detail: 'Dashboards & BI Reports' },
      { name: 'Python Data Stack', detail: 'Pandas & Analytics' },
      { name: 'Data Visualization', detail: 'Metrics & Trends' },
      { name: 'Data Cleaning', detail: 'ETL Pipelines' },
    ],
  },
  {
    title: 'Languages & Programming',
    subtitle: 'Embedded Firmware & Hardware Description',
    icon: Code2,
    skills: [
      { name: 'C / C++', detail: 'Firmware & Logic' },
      { name: 'Verilog (HDL)', detail: 'VLSI Certified' },
      { name: 'Python', detail: 'Scripting & Automation' },
      { name: '8051 Assembly', detail: 'Register Level' },
      { name: 'MATLAB', detail: 'Signal Analysis' },
      { name: 'Java', detail: 'OOP Concepts' },
    ],
  },
  {
    title: 'Hardware & Embedded Systems',
    subtitle: 'Microcontrollers, Sensors & Actuators',
    icon: Cpu,
    skills: [
      { name: '8051 Microcontroller', detail: 'Keil Interfacing' },
      { name: 'Arduino Platform', detail: 'Robotics & PWM' },
      { name: 'Raspberry Pi', detail: 'Embedded Systems' },
      { name: 'Sensors (LM35, MQ-2, Ultrasonic)', detail: 'ADC Conditioning' },
      { name: 'Motor Drivers & Actuators', detail: 'Circuit Controls' },
    ],
  },
  {
    title: 'EDA & Simulation Tools',
    subtitle: 'Circuit Design, Verification & Synthesis',
    icon: Wrench,
    skills: [
      { name: 'Keil µVision', detail: '8051 Debug' },
      { name: 'ModelSim', detail: 'Waveform Testbench' },
      { name: 'Intel Quartus', detail: 'FPGA Synthesis' },
      { name: 'Proteus EDA', detail: 'Schematic Test' },
      { name: 'OrCAD & AWR', detail: 'RF Simulation' },
    ],
  },
  {
    title: 'Design & UI/UX Software',
    subtitle: 'Digital Products & Visual Assets',
    icon: Palette,
    skills: [
      { name: 'Figma UI/UX', detail: 'Web Engineering' },
      { name: 'Photoshop', detail: 'Digital Graphics' },
      { name: 'Canva & Branding', detail: 'Event Promotion' },
      { name: 'Filmora Video Editing', detail: 'Post Production' },
    ],
  },
  {
    title: 'Leadership & Soft Skills',
    subtitle: 'Team Management & Operations',
    icon: Brain,
    skills: [
      { name: 'Design Team Leadership', detail: 'Design Head' },
      { name: 'Analytical Problem Solving', detail: 'Hardware Debug' },
      { name: 'Event Logistics & Coordination', detail: 'graVitas \'25' },
      { name: 'Technical Communication', detail: 'Team Workflows' },
    ],
  },
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="relative z-20 bg-[#F2EFE7] px-4 sm:px-6 py-16 sm:py-24 md:py-28 md:px-16 border-t border-[#A92C1F]/15 overflow-hidden">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#DBCDC9]/20 blur-[150px]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-header text-3xl font-black tracking-tight text-[#2F2E2F] sm:text-5xl md:text-6xl">
            SKILLS & <span className="text-gradient-accent">EXPERTISE</span>
          </h2>
          <p className="text-[#5A5556] text-sm sm:text-base font-medium leading-relaxed">
            A clean, unified overview of technical competencies across PostgreSQL databases, Power BI analytics, embedded microcontrollers, VLSI verification, and UI/UX design.
          </p>
        </div>

        {/* Unified All-in-One Clean Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-5 sm:p-7 flex flex-col justify-between border border-[#A92C1F]/20 shadow-xl relative overflow-hidden group"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#A92C1F] via-[#B45348] to-[#DBCDC9] opacity-70 group-hover:opacity-100 transition-opacity" />

                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-[#A92C1F]/15">
                    <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-[#A92C1F]/12 text-[#A92C1F] group-hover:bg-[#A92C1F] group-hover:text-white transition-all shadow-xs shrink-0">
                      <Icon className="h-5 w-5 sm:h-5.5 sm:w-5.5" />
                    </div>
                    <div>
                      <h3 className="font-subheading text-base sm:text-lg font-extrabold text-[#2F2E2F] leading-snug">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#A92C1F] font-semibold">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Clean Skill Pills List */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2 rounded-xl bg-[#F2EFE7] border border-[#A92C1F]/25 px-3 py-1.5 sm:px-3.5 sm:py-2 text-xs font-medium text-[#2F2E2F] shadow-xs hover:border-[#A92C1F] hover:bg-[#A92C1F] hover:text-white transition-all max-w-full"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#A92C1F] group-hover/pill:text-white shrink-0 transition-colors" />
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
