import React from "react";

// faint glowing line with a center dot, used between page sections
export const SectionDivider = () => {
  return (
    <div
      className="relative mx-auto w-[min(56rem,calc(100%-2rem))]"
      aria-hidden="true"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400 shadow-[0_0_12px_4px_rgba(59,130,246,0.5)]" />
    </div>
  );
};
