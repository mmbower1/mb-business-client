import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

// components
import VideoPlayer from "../VideoScreen";

export const Youtube = () => {
  return (
    <section
      id="youtube"
      className="min-h-[50vh] flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4">
          <h2
            className="text-3xl 
            font-bold 
            mb-8 
            bg-gradient-to-r
            from-blue-500 
            to-cyan-400 
            bg-clip-text 
            text-transparent 
            text-center"
          >
            YouTube: MB Tutorials
          </h2>
          <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <ul>
                  <li>www.youtube.com/@mmbower1</li>
                  <li>70 subscribers</li>
                  <li>50 videos</li>
                  <li>14,000 views</li>
                </ul>
              </div>
            </div>
            <VideoPlayer />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
