import React from 'react';
import { motion } from 'framer-motion';

export default function PrinciplesSection() {
  const principles = [
    {
      title: "Wide Range of Effects",
      desc: "Built-in precision shaders, motion blurs, and vector paths for complete creative freedom in layout styling.",
      tag: "SHADERS",
      id: "01"
    },
    {
      title: "Performance Oriented",
      desc: "Fast as a cut. Light as breath. 60 FPS pinned physics and buttery scroll execution across all screen sizes.",
      tag: "60 FPS",
      id: "02"
    },
    {
      title: "Effortless Integration",
      desc: "Plug right into modern React and Vite projects with zero setup headaches and modular clean component architecture.",
      tag: "ZERO-CONFIG",
      id: "03"
    }
  ];

  return (
    <section className="bg-[#F7F6F2] text-zinc-900 px-6 md:px-16 py-20 border-t border-zinc-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Large Header Section */}
        <div className="mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-red-600 font-bold">
            Fundamental Core
          </span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-zinc-900 mt-2 font-display">
            StringTune <br />
            <span className="text-zinc-400">Principles</span>
          </h2>
        </div>

        {/* 3 Column Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -6 }}
              className="p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-mono font-bold bg-zinc-100 text-zinc-700 px-3 py-1 rounded-md border border-zinc-200">
                    {item.tag}
                  </span>
                  <span className="text-xs font-mono text-red-600 font-bold">{item.id}</span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 font-display">{item.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-light">{item.desc}</p>
              </div>

              <div className="mt-8 pt-4 border-t border-zinc-100 flex items-center text-xs font-semibold text-zinc-900 group-hover:text-red-600 transition-colors cursor-pointer">
                <span>Learn technique</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}