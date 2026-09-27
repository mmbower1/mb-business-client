import React from "react";
import { FaChevronUp } from "react-icons/fa";

// bouncing up arrow that scrolls back to the top, mirrors the hero's down arrow
export const BackToTopArrow = () => {
  return (
    <div className="flex justify-center mb-6">
      <a
        href="#home"
        aria-label="Back to top"
        className="inline-block animate-bounce text-blue-400/70 transition-colors hover:text-blue-400"
      >
        <FaChevronUp className="h-7 w-7" />
      </a>
    </div>
  );
};
