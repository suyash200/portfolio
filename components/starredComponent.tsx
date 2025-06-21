import Star9 from "./stars/s9";
import React from 'react';

export default function NeobrutalismTag(text: string) {
  return (
    <div className="relative inline-block px-6 py-2 bg-[#4C4BA7] text-white text-2xl font-bold rounded-md border border-black shadow-[4px_4px_0_#000]">
      <span className="relative z-10">{text}</span>

      {/* Top-left sparkle */}
      <div className="absolute -top-4 -left-4">
        <Star9 size={40} color="#9DB7F5" stroke="#1E1B4B" strokeWidth={2} />
      </div>

      {/* Bottom-right sparkle */}
      <div className="absolute -bottom-4 -right-4">
        <Star9 size={40} color="#9DB7F5" stroke="#1E1B4B" strokeWidth={2} />
      </div>
    </div>
  );
}
