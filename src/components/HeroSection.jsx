import React from 'react';
import { motion } from 'framer-motion';
import treeGraphic from '../assets/tree-silhouette.svg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#09090B] flex flex-col justify-between px-6 md:px-16 pt-28 pb-10 overflow-hidden">
      
      {/* Background Japanese Watermark */}
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[650px] h-[650px] opacity-15 pointer-events-none select-none">
        <img src={treeGraphic} alt="" className="w-full h-full object-contain" />
      </div>

      <div className="max-w-6xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center my-auto">
        {/* Left Column Typography */}
        <motion.div 
          className="lg:col-span-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-950/30 text-red-400 text-xs font-mono tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            BUILT FOR WEB ANIMATIONS
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-white font-display">
            Master <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-300 to-zinc-600">
              Your Skills
            </span>
          </h1>

          <p className="mt-6 text-sm sm:text-base text-zinc-400 max-w-lg font-light leading-relaxed tracking-wide">
            FOR SMOOTH MODELING AND 60FPS WEB SCROLL SCENES. Designed to unleash the warrior flow within modern creative developers.
          </p>
        </motion.div>

        {/* Right Floating Card Preview */}
        <motion.div 
          className="lg:col-span-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative rounded-2xl p-4 bg-zinc-900/60 border border-zinc-800 shadow-2xl backdrop-blur-md group hover:border-zinc-700 transition-all duration-300">
            <div className="w-full h-44 rounded-xl bg-gradient-to-br from-zinc-800 via-zinc-950 to-black flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.2)_0,transparent_75%)]"></div>
              <img src={treeGraphic} alt="Skill Preview" className="w-28 h-28 object-contain opacity-70 group-hover:scale-105 transition-transform duration-500" />
            </div>
            
            <div className="mt-4 flex items-center justify-between text-xs font-mono">
              <span className="text-red-400">● Skill Hub Online</span>
              <span className="text-zinc-500">Scroll Down ↓</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Giant Bottom Watermark Banner */}
      <div className="max-w-6xl mx-auto w-full z-10 border-t border-zinc-800/80 pt-5 flex items-baseline justify-between">
        <span className="text-3xl sm:text-5xl font-extrabold tracking-tighter text-zinc-700/50 select-none font-display">
          StringTune
        </span>
        <span className="font-mono text-xs text-red-500/80 uppercase tracking-widest animate-pulse">
          STAGE 01 / UNSHEATH
        </span>
      </div>

    </section>
  );
}