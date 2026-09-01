import React from 'react';
import { Play } from 'lucide-react';
import logoIcon from '../assets/logo-mark.svg';

export default function Navbar({ isLight = false }) {
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 py-3.5 px-6 md:px-14 flex items-center justify-between backdrop-blur-md ${
      isLight 
        ? 'bg-white/85 text-zinc-900 border-b border-zinc-200 shadow-sm' 
        : 'bg-[#09090b]/70 text-white border-b border-white/5'
    }`}>
      {/* Brand */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img src={logoIcon} alt="StringTune Logo" className="w-8 h-8 rounded-lg shadow-md shadow-red-600/30" />
        <div className="flex flex-col">
          <span className="font-bold text-base md:text-lg tracking-tight font-display flex items-center">
            StringTune<span className="text-[10px] text-red-500 ml-0.5 font-sans font-normal">®</span>
          </span>
          <span className={`text-[9px] uppercase tracking-widest font-mono font-medium -mt-1 ${isLight ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Skills
          </span>
        </div>
      </div>

      {/* Navigation & Action Buttons */}
      <div className="flex items-center gap-2.5 sm:gap-3 text-xs font-medium">
        <button className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border transition-all duration-300 ${
          isLight 
            ? 'border-zinc-300 hover:border-zinc-800 bg-zinc-100 hover:bg-zinc-200 text-zinc-900' 
            : 'border-white/10 hover:border-white/30 bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300'
        }`}>
          <Play className="w-3 h-3 fill-red-500 text-red-500" />
          <span>Dev Guides</span>
        </button>

        <button className="px-4 py-1.5 rounded-full bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold transition-all duration-200 shadow-md shadow-red-600/30">
          Skill Hub
        </button>
      </div>
    </header>
  );
}