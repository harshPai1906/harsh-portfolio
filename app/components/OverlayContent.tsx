"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Terminal,
  Sparkles,
  ArrowRight,
  Send,
  Check,
  Mail,
  Phone,
  MapPin,
  Code2,
  Cpu,
  Wrench,
  Palette,
  Brain
} from "lucide-react";
import ProjectModal, { ProjectData } from "./ProjectModal";

export default function OverlayContent() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.7 },
      colors: ["#38bdf8", "#a855f7", "#34d399", "#f43f5e"],
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const skillGroups = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["C", "C++", "Python", "Java", "Verilog (HDL)", "MATLAB", "Assembly (8051)"],
    },
    {
      title: "Hardware & Microcontrollers",
      icon: Cpu,
      skills: ["8051 Microcontroller", "Raspberry Pi", "Arduino Microcontrollers", "Sensors (LM35, MQ-2, Ultrasonic)", "Motor Drivers & Actuators"],
    },
    {
      title: "EDA & Simulation Tools",
      icon: Wrench,
      skills: ["Keil µVision", "ModelSim", "Intel Quartus", "Proteus", "OrCad", "AWR Design Environment", "RS Logix"],
    },
    {
      title: "Design & UI/UX Software",
      icon: Palette,
      skills: ["Figma", "Photoshop", "Canva", "Filmora Video Editing"],
    },
    {
      title: "Soft Skills & Leadership",
      icon: Brain,
      skills: ["Problem Solving", "Communication", "Teamwork", "Analytical Thinking", "Leadership"],
    },
  ];

  const projects: ProjectData[] = [
    {
      title: "ChurnIQ – Customer Churn Analytics Dashboard",
      category: "Data Analytics & Machine Learning",
      description: "Turning customer data into actionable retention insights using Python, XGBoost, Pandas, and interactive visualization.",
      longDescription: "Analyzed 25,000 customer records using Pandas, SQL, and EDA to identify churn patterns. Trained XGBoost, Logistic Regression, and Random Forest models using an 80/20 train-test split. Selected XGBoost with 88.56% accuracy, 85.62% precision, 81.69% recall, and 0.955 ROC-AUC. Achieved the lowest test error of 11.44% with 572 misclassifications on 5,000 test records.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      tags: ["Pandas", "Seaborn", "SQL", "XGBoost", "Logistic Regression", "Random Forest", "Python", "EDA"],
      metrics: [
        { label: "Accuracy", value: "88.56%" },
        { label: "ROC-AUC", value: "0.955" },
        { label: "Dataset Size", value: "25,000" },
      ],
      features: [
        "25,000 customer records analyzed via Pandas, SQL & EDA",
        "Trained XGBoost, Logistic Regression & Random Forest models (80/20 split)",
        "Selected XGBoost with 88.56% accuracy & 0.955 ROC-AUC (85.62% precision, 81.69% recall)",
        "Achieved lowest test error of 11.44% with 572 misclassifications on 5,000 test records",
      ],
      liveUrl: "https://churniq-analytics.vercel.app/",
      githubUrl: "#",
    },
    {
      title: "Temperature Monitoring System",
      category: "Embedded Systems & 8051",
      description: "Engineered a precision temperature monitoring system using LM35, ADC0804, and 8051 with ±1°C accuracy.",
      longDescription: "Designed and implemented an embedded hardware temperature sensor system using the 8051 microcontroller, LM35 analog temperature sensor, and ADC0804 converter. Programmed in Keil µVision, enhancing data communication efficiency by 20%. Integrated LCD display output to reduce human reading error by 15%.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      tags: ["8051 Microcontroller", "Keil µVision", "LM35", "ADC0804", "LCD"],
      metrics: [
        { label: "Sensor Accuracy", value: "±1°C" },
        { label: "Communication Efficiency", value: "+20%" },
        { label: "Reading Error Cut", value: "-15%" },
      ],
      features: [
        "Keil µVision 8051 C & Assembly programming",
        "LM35 analog signal conditioning with ADC0804",
        "Custom 16x2 LCD display integration",
        "Low-drift temperature monitoring logic",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "MQ-2 Smoke & Gas Detector",
      category: "Hardware Safety & Sensors",
      description: "Developed real-time smoke detection system with <3s response time and 92% detection accuracy.",
      longDescription: "Created a hardware safety monitoring system using an MQ-2 gas/smoke sensor and Arduino. Calibrated sensor thresholds to achieve 92% detection accuracy with a sub-3-second response time. Integrated dual buzzer and LED alert indicators for 100% real-time hazard notification.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      tags: ["Arduino", "MQ-2 Sensor", "C++", "Buzzer Alerts", "LED Indicators"],
      metrics: [
        { label: "Response Speed", value: "< 3 Sec" },
        { label: "Detection Accuracy", value: "92%" },
        { label: "Alert Notification", value: "100% Real-Time" },
      ],
      features: [
        "Sub-3-second hazard interrupt trigger",
        "MQ-2 analog voltage calibration (92% accuracy)",
        "Buzzer audio & dual LED visual alert system",
        "Continuous safety threshold loop",
      ],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const experience = [
    {
      year: "May 2025 — Jun 2025",
      role: "Design Intern",
      company: "Confection Cosmos Pvt. Ltd., Mumbai",
      description: "Designed & developed company's official website focusing on modern UI/UX, responsive layouts across mobile/desktop, and visual branding optimization.",
    },
    {
      year: "2024 — Present",
      role: "Head of Design & Secretary",
      company: "Marathi Literary Association, VIT Vellore",
      description: "Directed design strategy, digital branding content creation, and event planning across major campus initiatives.",
    },
    {
      year: "2025",
      role: "Logistics Coordinator",
      company: "graVitas '25 Technical Fest, VIT Vellore",
      description: "Coordinated halls and refreshments logistics during graVitas '25 international technical fest, boosting operational efficiency.",
    },
  ];

  return (
    <div className="relative w-full text-zinc-100 z-10">
      {/* SECTION 1: HERO OVERLAY */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-sky-500/30 text-sky-400 text-xs sm:text-sm font-mono shadow-lg">
            <Sparkles className="w-4 h-4 text-sky-400" />
            B.Tech Electronics & Communication Engineering &bull; VIT Vellore
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            HARSH GANGARAM <span className="text-gradient-accent">PAI</span>
          </h1>

          <p className="text-zinc-400 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Embedded Systems, Microcontrollers, VLSI Design, and Modern UI/UX Web Engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 font-semibold text-white text-sm shadow-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 group"
            >
              Explore Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-card border border-white/15 text-zinc-200 font-semibold text-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Academic Background
            </a>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: ABOUT & METRICS */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/10 space-y-12 backdrop-blur-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-400 uppercase tracking-widest">
                <Terminal className="w-4 h-4" /> Education & Profile
              </div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
                B.Tech ECE Student at VIT Vellore
              </h2>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Currently maintaining an 8.45 CGPA at VIT Vellore (2023–Present). Proficient in C, C++, Verilog, 8051 Assembly, Python, ModelSim, and UI/UX design. Certified in VLSI Design & Verification (Grade A) and Oracle Cloud Data Science.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-sky-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-mono">
                  8.45
                </div>
                <div className="text-sm text-zinc-400 mt-1">CGPA (VIT Vellore)</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-purple-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-purple-400 font-mono">
                  Grade A
                </div>
                <div className="text-sm text-zinc-400 mt-1">VLSI Certified (90/100)</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-emerald-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">
                  95.8%
                </div>
                <div className="text-sm text-zinc-400 mt-1">High School Score</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 hover:border-amber-500/40 transition-colors">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
                  Oracle
                </div>
                <div className="text-sm text-zinc-400 mt-1">Data Science Cert.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SKILLS & TOOLKIT */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-10">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
              Technical Skillset
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Skills & Expertise
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base">
              Programming, hardware microcontrollers, simulation tools, and UI/UX design software.
            </p>
          </div>

          {/* All Skill Groups Displayed Simultaneously */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-3xl border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/10">
                      <div className="p-2 rounded-xl bg-sky-500/10 text-sky-400">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1.5 rounded-xl text-xs font-medium bg-white/5 text-zinc-200 border border-white/10 flex items-center gap-1.5"
                        >
                          <Sparkles className="w-3 h-3 text-sky-400" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FEATURED PROJECTS */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-purple-400 uppercase tracking-widest">
                Hardware & Embedded Systems
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold text-white mt-1">
                Featured Projects
              </h2>
            </div>
            <p className="text-zinc-400 text-sm max-w-md">
              Click any project card to inspect performance metrics, hardware specs, and key features.
            </p>
          </div>

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedProject(proj)}
                className="glass-card glass-card-hover rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-zinc-900">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-mono bg-zinc-950/80 text-sky-400 border border-white/10 backdrop-blur-md">
                      {proj.category}
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 group-hover:translate-x-1 transition-transform">
                    View Project Details <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: EXPERIENCE & LEADERSHIP */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
              Internship & Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Experience & Activities
            </h2>
          </div>

          <div className="space-y-6 relative before:absolute before:left-4 sm:before:left-1/2 before:top-0 before:bottom-0 before:w-0.5 before:bg-white/10">
            {experience.map((item, idx) => (
              <div
                key={idx}
                className="relative flex flex-col sm:flex-row items-start gap-6 sm:gap-12 group"
              >
                <div className="sm:w-1/2 sm:text-right space-y-1 sm:pr-8">
                  <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
                    {item.year}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2">{item.role}</h3>
                  <div className="text-sm font-medium text-purple-400">{item.company}</div>
                </div>

                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-sky-400 group-hover:scale-125 transition-transform" />

                <div className="sm:w-1/2 sm:pl-8">
                  <div className="glass-card p-5 rounded-2xl border border-white/10 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT FORM */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/15 backdrop-blur-2xl space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-widest">
              Direct Contact
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white">
              Connect With Harsh Pai
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
              Feel free to send an email, call, or drop a message for project collaborations or hardware engineering inquiries.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-zinc-300">
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center gap-3">
              <Mail className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="truncate">harshpai0hp@gmail.com</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center gap-3">
              <Phone className="w-4 h-4 text-purple-400 shrink-0" />
              <span>+91-9834044641</span>
            </div>
            <div className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center gap-3">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>VIT Vellore, India</span>
            </div>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-zinc-300 text-sm">
                Thank you for reaching out to Harsh Pai.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-300">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-300">Your Email</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 text-sm"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-zinc-300">Message</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Your message or project inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/80 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500 text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 font-bold text-white text-sm shadow-xl hover:opacity-95 transition-all flex items-center justify-center gap-2 group"
              >
                Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-xs text-zinc-500 border-t border-white/5">
        © {new Date().getFullYear()} Harsh Gangaram Pai. B.Tech ECE, VIT Vellore.
      </footer>

      {/* PROJECT MODAL */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
