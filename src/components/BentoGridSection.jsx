import React from 'react';
import { motion } from 'framer-motion';

export default function BentoGridSection() {
  return (
    <section className="bg-[#F7F6F2] text-zinc-900 px-6 md:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento 1: Safe Natural Learning */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 p-7 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-zinc-400 font-bold">01 / SPLITTING</span>
              <h3 className="text-lg font-bold mt-2 font-display">Safe natural learning when Splitting</h3>
            </div>
            <div className="h-32 bg-zinc-50 border border-dashed border-zinc-200 rounded-xl my-5 flex items-center justify-center text-4xl font-serif text-red-600 select-none">
              スタイル
            </div>
            <p className="text-xs text-zinc-500 font-light">Autonomous segment slicing for dynamic letter-by-letter reveals.</p>
          </motion.div>

          {/* Bento 2: Control Your Progress Data (Hero Dark Panel) */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 p-8 sm:p-10 rounded-2xl bg-zinc-950 text-white shadow-xl flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute -top-12 -right-12 w-52 h-52 bg-red-600/20 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="flex items-center justify-between z-10">
              <span className="px-3 py-1 bg-red-600 text-[11px] font-bold uppercase rounded-full tracking-wider">
                Real-time Analytics
              </span>
              <span className="text-xs font-mono text-zinc-400">PROGRESS MATRIX</span>
            </div>

            <div className="my-8 z-10">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
                Control Your Progress Data
              </h3>
              <p className="text-sm text-zinc-400 mt-2 max-w-lg font-light leading-relaxed">
                Direct integration to sync scroll positions, cursor velocity, and hardware acceleration in a unified render loop.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 z-10 text-xs font-mono">
              <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                60.0 FPS Sync
              </div>
              <div className="bg-zinc-900 border border-zinc-800 px-4 py-2 rounded-lg text-zinc-300">
                Memory: 14.2 MB
              </div>
            </div>
          </motion.div>

          {/* Bento 3: Ultra Optimized */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-4 p-7 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between"
          >
            <div>
              <span className="text-xs font-mono text-zinc-400 font-bold">02 / SPEEDS</span>
              <h3 className="text-lg font-bold mt-1 font-display">Ultra Optimized</h3>
            </div>
            <div className="py-6 text-center">
              <span className="text-5xl font-black text-red-600 font-mono tracking-tighter">0.4ms</span>
              <span className="block text-[11px] text-zinc-500 font-mono mt-1">Average execution latency</span>
            </div>
            <p className="text-xs text-zinc-500 font-light">Pure WebGL and CSS composites with zero main-thread blocking.</p>
          </motion.div>

          {/* Bento 4: Cursor Tracking & Gravity */}
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-8 p-7 sm:p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-zinc-400 font-bold">03 / INTERACTION</span>
                <h3 className="text-xl font-bold mt-1 font-display">Cursor Tracking & Gravity</h3>
              </div>
              <span className="text-xs font-mono bg-red-50 text-red-600 font-bold px-2.5 py-1 rounded-md border border-red-100">
                LIVE ENGINE
              </span>
            </div>
            
            <div className="h-28 my-4 rounded-xl bg-gradient-to-r from-zinc-100 via-zinc-50 to-zinc-100 border border-zinc-200 flex items-center justify-around px-4">
              <div className="w-12 h-12 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center text-xs font-mono font-bold text-red-600">X:240</div>
              <div className="w-12 h-12 rounded-full bg-zinc-200 flex items-center justify-center text-xs font-mono font-bold text-zinc-700">Y:180</div>
              <div className="w-12 h-12 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-mono font-bold">VEL:0</div>
            </div>

            <p className="text-xs text-zinc-500 font-light">Sub-pixel physics simulation with fluid inertia smoothing.</p>
          </motion.div>

        </div>

        {/* Bottom Section: Who It's For */}
        <div className="mt-28 text-center">
          <h2 className="text-5xl sm:text-7xl font-black tracking-tight text-zinc-900 mb-4 font-display">
            Who It's For
          </h2>
          <p className="text-zinc-600 max-w-xl mx-auto text-sm sm:text-base font-light">
            Direct, welcoming, with respect for each type of developer.
          </p>
        </div>

      </div>
    </section>
  );
}