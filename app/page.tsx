'use client';

import React, { useRef, useState } from 'react';
import { useScroll, motion, AnimatePresence } from 'framer-motion';
import { ScrollyCanvas } from '@/components/ScrollyCanvas';
import { Overlay } from '@/components/Overlay';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { Skills } from '@/components/Skills';
import { Contact } from '@/components/Contact';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Preloader } from '@/components/Preloader';
import { MarqueeBanner } from '@/components/MarqueeBanner';

export default function Home() {
  const storySectionRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  const { scrollYProgress } = useScroll({
    target: storySectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <AnimatePresence>
        {loading && (
          <Preloader onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <motion.main
        className="relative min-h-screen w-full overflow-x-hidden bg-[#F2EFE7] text-[#2F2E2F] selection:bg-[#DBCDC9] selection:text-[#2F2E2F]"
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Navbar />

        {/* Hero Section */}
        <div ref={storySectionRef} className="relative overflow-hidden">
          <ScrollyCanvas>
            <Overlay progress={scrollYProgress} />
          </ScrollyCanvas>
        </div>

        {/* Top Infinite Marquee Banner (Crimson Variant) */}
        <MarqueeBanner direction="left" variant="crimson" />

        {/* Experience Timeline Section (Right after Home) */}
        <ExperienceTimeline />

        {/* Portfolio Sections */}
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
        <Footer />
      </motion.main>
    </>
  );
}
