import React, { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "youtube", label: "Youtube" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  // how far down the page we've scrolled, for the progress bar
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // highlight the section crossing the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 w-full z-40 bg-gradient-to-r from-slate-950 to-blue-950 backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            <span className="text-blue-500">MB</span> Tutorials
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-lg text-white cursor-pointer z-40 transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <HiMenu className="h-8 w-8" />
          </button>
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                aria-current={activeSection === id ? "true" : undefined}
                className={`relative py-1 transition-colors ${
                  activeSection === id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-transform duration-300 origin-left ${
                    activeSection === id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 shadow-[0_0_8px_rgba(59,130,246,0.7)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </nav>
  );
};
