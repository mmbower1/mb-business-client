import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {
  return (
    <section id="contact" className="">
      <RevealOnScroll>
        <div className="">
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
          <form className="space-y-6 max-w-2xl mx-auto p-6 sm:p-8 lg:p-10">
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
    </section>
  );
};
