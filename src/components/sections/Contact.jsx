import React, { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { BackToTopArrow } from "../BackToTopArrow";

export const Contact = () => {
  const [showSent, setShowSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSent(true);
    e.target.reset();
  };

  // close the popup with the Escape key
  useEffect(() => {
    if (!showSent) return;
    const onKey = (e) => e.key === "Escape" && setShowSent(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [showSent]);

  return (
    <section id="contact" className="pt-16 pb-16">
      <RevealOnScroll>
        <div className="">
          <BackToTopArrow />
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
            Get In Touch
          </h2>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 max-w-2xl mx-auto p-6 sm:p-8 lg:p-10"
          >
            {/* Name Field */}
            <div className="relative group">
              <input
                placeholder="Enter your name"
                type="text"
                id="name"
                name="name"
                required
                className="peer w-full rounded-lg border border-white/20 bg-white/5 
                 px-5 py-4 text-white placeholder-transparent 
                 transition-all duration-200
                 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10
                 focus:ring-4 focus:ring-blue-500/20"
              />
              <label
                htmlFor="name"
                className="absolute left-5 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 
                 transition-all duration-200
                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-500
                 peer-focus:-top-2.5 peer-focus:text-blue-400 peer-focus:text-sm"
              >
                Enter your name
              </label>
            </div>

            {/* Email Field */}
            <div className="relative group">
              <input
                placeholder="example@gmail.com"
                type="email"
                id="email"
                name="email"
                required
                className="peer w-full rounded-lg border border-white/20 bg-white/5 
                 px-5 py-4 text-white placeholder-transparent 
                 transition-all duration-200
                 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10
                 focus:ring-4 focus:ring-blue-500/20"
              />
              <label
                htmlFor="email"
                className="absolute left-5 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 
                 transition-all duration-200
                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-500
                 peer-focus:-top-2.5 peer-focus:text-blue-400 peer-focus:text-sm"
              >
                Your email
              </label>
            </div>

            {/* Message Field */}
            <div className="relative group">
              <textarea
                placeholder="Your message"
                id="message"
                name="message"
                rows={6}
                required
                className="peer w-full resize-none rounded-lg border border-white/20 bg-white/5 
                 px-5 py-4 text-white placeholder-transparent 
                 transition-all duration-200
                 focus:outline-none focus:border-blue-500 focus:bg-blue-500/10
                 focus:ring-4 focus:ring-blue-500/20"
              />
              <label
                htmlFor="message"
                className="absolute left-5 -top-2.5 bg-gray-900 px-2 text-sm text-gray-400 
                 transition-all duration-200
                 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base 
                 peer-placeholder-shown:text-gray-500
                 peer-focus:-top-2.5 peer-focus:text-blue-400 peer-focus:text-sm"
              >
                Your message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-4 px-8 text-lg font-semibold text-white 
               transition-all duration-200
               hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/25
               active:scale-95"
            >
              Send Message
            </button>
          </form>
        </div>
      </RevealOnScroll>

      {/* Message sent popup */}
      {showSent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setShowSent(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="sent-title"
            className="modal-pop w-full max-w-md rounded-2xl border border-blue-500/30 bg-slate-900/95 p-8 text-center shadow-2xl shadow-blue-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/40">
              <svg
                className="h-8 w-8 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3
              id="sent-title"
              className="mb-3 text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent"
            >
              Message Sent!
            </h3>
            <p className="mb-8 text-gray-300">
              Thanks for reaching out. I'll get back to you soon.
            </p>
            <button
              autoFocus
              onClick={() => setShowSent(false)}
              className="w-full rounded-lg bg-blue-600 py-3 px-8 font-semibold text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/25 active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
