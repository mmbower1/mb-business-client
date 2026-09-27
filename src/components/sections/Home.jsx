import React from "react";
import profilePhoto from "../../assets/portrait.jpg";

import { RevealOnScroll } from "../RevealOnScroll";
import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVite,
  SiRedux,
  SiSass,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { FaAws, FaChevronDown, FaMapMarkerAlt } from "react-icons/fa";

const roles = [
  "Full Stack Web Developer",
  "IT Specialist",
  "Content Creator",
];

const techStack = [
  { name: "React", Icon: SiReact },
  { name: "Node.js", Icon: SiNodedotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Express", Icon: SiExpress },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Firebase", Icon: SiFirebase },
  { name: "AWS", Icon: FaAws },
  { name: "Vite", Icon: SiVite },
  { name: "Redux", Icon: SiRedux },
  { name: "Sass", Icon: SiSass },
  { name: "Git", Icon: SiGit },
  { name: "Vercel", Icon: SiVercel },
];

// import { Divider } from "../Divider";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[70vh] flex items-center justify-center relative overflow-x-clip"
    >
      {/* Glowing background blobs */}
      <div className="absolute inset-0 overflow-x-clip pointer-events-none">
        <div className="hero-blob absolute top-20 left-[10%] h-72 w-72 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="hero-blob hero-blob-delay absolute top-40 right-[10%] h-80 w-80 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="hero-blob absolute bottom-10 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
      </div>

      <div className="relative z-10">
        <RevealOnScroll>
          <div className="text-center px-4 mt-28">
            <div className="photo-ring">
              <img
                src={profilePhoto}
                alt=""
                className="h-60 w-70 rounded-full mx-auto"
              />
            </div>
            <br />
            <h1
              className="
            text-4xl 
            md:text-6xl 
            font-bold 
            mb-3 
            bg-gradient-to-r 
            from-blue-500 
            to-purple-600 
            bg-clip-text 
            text-transparent 
            leading-right"
            >
              Matthew M. Bower
            </h1>
            <p className="flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-1 text-gray-200 text-lg md:text-xl font-semibold">
              {roles.map((role, i) => (
                <React.Fragment key={role}>
                  {i > 0 && (
                    <span
                      className="hidden md:inline text-blue-400"
                      aria-hidden="true"
                    >
                      •
                    </span>
                  )}
                  <span>{role}</span>
                </React.Fragment>
              ))}
            </p>
            <p className="mt-2 mb-8 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base text-gray-400">
              <FaMapMarkerAlt className="text-blue-400" />
              Sacramento, CA • San Francisco, CA
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#projects"
                className="
            bg-blue-500 
            text-white 
            py-3 
            px-6 
            rounded 
            font-medium 
            transition 
            relative 
            overflow-hidden 
            hover:-translate-y-0.5
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]
            "
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="
            border
            border-blue-500/50
            text-blue-500
            py-3
            px-6
            rounded
            font-medium
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)]
            hover:bg-blue-500/10
            "
              >
                Contact Me
              </a>
            </div>
            {/* Tech stack ticker */}
            <div className="tech-marquee mx-auto mt-16 w-[min(72rem,calc(100vw-2rem))] overflow-hidden">
              <div className="tech-marquee-track flex w-max">
                {[...techStack, ...techStack].map(({ name, Icon }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 pr-12 text-gray-400 transition-colors hover:text-blue-400"
                    aria-hidden={i >= techStack.length}
                  >
                    <Icon className="h-7 w-7" />
                    <span className="text-sm whitespace-nowrap">{name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll down arrow */}
            <a
              href="#about"
              aria-label="Scroll to About section"
              className="mt-14 inline-block animate-bounce text-blue-400/70 transition-colors hover:text-blue-400"
            >
              <FaChevronDown className="h-7 w-7" />
            </a>
            {/* <Divider /> */}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
