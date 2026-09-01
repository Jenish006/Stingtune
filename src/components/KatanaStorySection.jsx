import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import katanaBlade from '../assets/katana-blade.svg';
import katanaSheath from '../assets/katana-sheath.svg';
import katanaTsuba from '../assets/katana-tsuba.svg';
import cloudBg from '../assets/cloud-bg.svg';
import senseiAvatar from '../assets/sensei-avatar.svg';

export default function KatanaStorySection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Physical unsheathing transforms
  const bladeX = useTransform(scrollYProgress, [0, 0.35, 0.75], [0, 200, 360]);
  const sheathX = useTransform(scrollYProgress, [0, 0.35, 0.75], [0, -180, -320]);
  const swordRotation = useTransform(scrollYProgress, [0, 0.5, 0.85], [-12, -4, 2]);
  const glintOpacity = useTransform(scrollYProgress, [0.15, 0.45, 0.7], [0.2, 1, 0.4]);

  // Story step text opacities
  const step1Opacity = useTransform(scrollYProgress, [0, 0.18, 0.3], [1, 1, 0]);
  const step2Opacity = useTransform(scrollYProgress, [0.32, 0.46, 0.62], [0, 1, 0]);
  const step3Opacity = useTransform(scrollYProgress, [0.65, 0.8, 1], [0, 1, 1]);

  return (
    <div ref={containerRef} className="relative h-[320vh] bg-black text-white">
      {/* Pinned Sticky Stage */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Japanese cloud artwork background */}
        <div className="absolute inset-x-0 top-16 md:top-20 mx-auto max-w-5xl h-72 opacity-40 pointer-events-none select-none">
          <img src={cloudBg} alt="" className="w-full h-full object-contain" />
        </div>

        {/* Phase Titles with absolute overlapping transitions */}
        <div className="absolute top-24 md:top-28 text-center z-20 w-full px-4">
          <motion.div style={{ opacity: step1Opacity }} className="transition-opacity duration-300">
            <span className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-mono">Phase I</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-1 font-display tracking-tight">Concentrate</h2>
          </motion.div>

          <motion.div style={{ opacity: step2Opacity }} className="absolute inset-x-0 top-0 transition-opacity duration-300">
            <span className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-mono">Phase II</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-1 font-display tracking-tight">The Spirit Awakened</h2>
          </motion.div>

          <motion.div style={{ opacity: step3Opacity }} className="absolute inset-x-0 top-0 transition-opacity duration-300">
            <span className="text-[11px] uppercase tracking-[0.35em] text-red-500 font-mono">Phase III</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold mt-1 font-display tracking-tight">Keep Scrolling</h2>
          </motion.div>
        </div>

        {/* Katana Mechanical Rig (Blade, Guard, and Sheath) */}
        <motion.div 
          style={{ rotate: swordRotation }}
          className="relative w-full max-w-4xl h-52 flex items-center justify-center my-10 select-none pointer-events-none"
        >
          {/* Blade & Handle Group */}
          <motion.div 
            style={{ x: bladeX }}
            className="absolute flex items-center z-20 left-[calc(50%-180px)] sm:left-[calc(50%-230px)] md:left-[calc(50%-270px)]"
          >
            {/* Tsuka Handle + Tsuba Handguard */}
            <div className="relative -mr-1 z-30">
              <img src={katanaTsuba} alt="Katana Handle" className="h-10 sm:h-12 w-auto object-contain" />
            </div>
            {/* Katana Blade */}
            <div className="relative z-20">
              <img src={katanaBlade} alt="Katana Blade" className="h-8 sm:h-10 w-[280px] sm:w-[380px] md:w-[480px] object-contain" />
            </div>
          </motion.div>

          {/* Katana Saya (Sheath) Group */}
          <motion.div 
            style={{ x: sheathX }}
            className="absolute z-10 right-[calc(50%-190px)] sm:right-[calc(50%-240px)] md:right-[calc(50%-280px)]"
          >
            <img src={katanaSheath} alt="Katana Sheath" className="h-9 sm:h-11 w-[320px] sm:w-[420px] md:w-[500px] object-contain" />
          </motion.div>

          {/* Dynamic Light Flare */}
          <motion.div 
            style={{ opacity: glintOpacity }}
            className="absolute w-56 h-56 bg-red-600/25 blur-3xl -z-10"
          />
        </motion.div>

        {/* Master Takeda Dialogue Card */}
        <div className="absolute bottom-12 sm:bottom-16 w-full max-w-lg px-6 z-20">
          <motion.div 
            style={{ opacity: step3Opacity }}
            className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md flex items-center gap-4 shadow-2xl"
          >
            <img src={senseiAvatar} alt="Master Takeda" className="w-12 h-12 rounded-lg border border-zinc-700 flex-shrink-0" />
            <div>
              <p className="text-xs sm:text-sm text-zinc-300 font-light italic leading-snug">
                "Ah, you've finally awoken... Every great warrior starts with one true blade. And this is yours."
              </p>
              <span className="text-[10px] text-red-500 font-mono font-semibold uppercase tracking-wider block mt-1">
                MASTER TAKEDA — 01 // ORIGIN
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}