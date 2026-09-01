import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#09090b] text-zinc-500 text-xs py-8 px-6 md:px-16 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
      <span className="font-mono">© 2026 StringTune Skills. All rights reserved.</span>
      <div className="flex items-center gap-6 font-mono text-[11px]">
        <a href="#docs" className="hover:text-white transition-colors">DOCUMENTATION</a>
        <a href="#skills" className="hover:text-white transition-colors">SKILL HUB</a>
        <a href="#github" className="hover:text-white transition-colors">GITHUB</a>
      </div>
    </footer>
  );
}