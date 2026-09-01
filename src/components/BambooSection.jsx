import React from 'react';
import { motion } from 'framer-motion';

import bambooGraphic from '../assets/bamboo.svg';
import bonsaiGraphic from '../assets/bonsai-tree.svg';

export default function BambooSection() {
  return (
    <section className="relative min-h-screen bg-[#F7F6F2] text-zinc-900 px-6 md:px-16 py-28 flex flex-col justify-between overflow-hidden">
      
      {/* Red Watercolor Sun Backdrop */}
      <div className="absolute top-12 right-12 md:right-28 w-56 h-56 rounded-full bg-red-600/10 blur-2xl pointer-events-none"></div>

      {/* Top Narrative Title */}
      <div className="max-w-4xl z-10">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-600"></div>
          <span className="text-xs uppercase font-mono tracking-widest text-zinc-500 font-bold">Discipline & Precision</span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 font-display">
          And listen...
        </h2>
      </div>

      {/* Middle Interactive Row */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center z-10">
        
        {/* Bamboo Forest Section */}
        <div className="md:col-span-5 flex items-end justify-center md:justify-start h-72">
          <motion.div 
            whileHover={{ scaleY: 1.05 }}
            className="cursor-pointer transition-transform duration-300"
          >
            <img src={bambooGraphic} alt="Bamboo grove" className="h-64 sm:h-72 w-auto object-contain" />
          </motion.div>
        </div>

        {/* Right Red Bonsai Card */}
        <div className="md:col-span-7">
          <div className="p-8 sm:p-10 rounded-2xl bg-white/80 border border-zinc-200 shadow-xl backdrop-blur-sm relative overflow-hidden">
            <div className="absolute right-2 top-2 w-32 h-32 opacity-20 pointer-events-none">
              <img src={bonsaiGraphic} alt="" className="w-full h-full object-contain" />
            </div>

            <span className="text-xs font-mono uppercase text-red-600 tracking-wider font-semibold">
              Traditional Flow
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1.5 mb-4 text-zinc-900 font-display">
              To master the sword is to master the code.
            </h3>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
              Every transition must feel natural, precise, and razor-sharp. Just like the disciplined strikes of a seasoned ronin cutting through bamboo in an instant.
            </p>
          </div>
        </div>

      </div>

      {/* Lower Status Bar */}
      <div className="border-t border-zinc-200/80 pt-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-zinc-500 font-mono">
        <span>STR-CODE: 0092-BAMBOO</span>
        <span>FLOW STATE CALIBRATED</span>
      </div>

    </section>
  );
}