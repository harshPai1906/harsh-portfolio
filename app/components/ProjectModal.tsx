"use client";

import React from "react";
import { X, ExternalLink, Code2, Layers, CheckCircle2, Cpu } from "lucide-react";

export interface ProjectData {
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-zinc-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Title */}
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <Layers className="w-3.5 h-3.5" />
            {project.category}
          </span>
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Project Feature Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-video">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {project.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-zinc-900/60 border border-white/10 text-center"
            >
              <div className="text-xl sm:text-2xl font-bold text-sky-400 font-mono">
                {metric.value}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Deep Dive Description */}
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-purple-400" /> Key Engineering Highlights
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed">
            {project.longDescription}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags */}
        <div className="space-y-2">
          <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
            Technologies Used
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-800/80 text-zinc-300 border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-white/10">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-purple-600 font-semibold text-white text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" /> Live Demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-zinc-800/80 border border-white/10 font-semibold text-zinc-200 text-sm flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
            >
              <Code2 className="w-4 h-4" /> View Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
