// import Project from "./Project.jsx";

import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[50vh] flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2
            className="            
            text-3xl 
            font-bold 
            mb-8 
            bg-gradient-to-r
            from-blue-500 
            to-cyan-400 
            bg-clip-text 
            text-transparent 
            text-center"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Pearl Dating </h3>
              <p className="text-gray-400 mb-4"></p>
              <p>
                My first patented project, I built a dating app with MERN + Typescript. What makes this app different is
                that swiping gets disabled once you have gained a match. Along with this, there is an accountability score
                to prevent bad behaviors from users. Rather than endless swiping, lets make dating how it should be again. 
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "Tailwind", "Vercel"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://dating-app-pearl-nine.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Eagles Ecommerce</h3>
              <p className="text-gray-400 mb-4"></p>
              <p>
                A full stack ecommerce website built with React Vite, Firebase,
                React context for state managment, and hosted with Vercel. Buy
                your favorite Eagles products here with the Stripe API.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Firebase", "Tailwind", "Vercel"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://react-firebase-store-rouge.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Tesla Interactice UI</h3>
              <p className="text-gray-400 mb-4"></p>
              <p>
                Clean appearance and interactive web page built with React.jsx
                to measure the range for a Tesla with added factors of weather,
                speed, tire size, and AC usage.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Javascript", "SCSS", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://tesla-ui-taupe.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">American Arbor</h3>
              <p className="text-gray-400 mb-4"></p>
              <p>
                A freelance website built for a close friends' Horticulture Tree
                Arbor business for the Davis and Sacramento region. Scaled with
                Vite, React, Scss, Firebase and Vercel.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Scss", "Firebase", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://american-arbor.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Trivia</h3>
              <p className="text-gray-400">
                Built with Vanilla JavaScript, HTML and CSS come test your
                knowledge and find out your score.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "CSS", "JavaScript", "JQuery"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://trivia-game-rho-eight.vercel.app/"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div>
            {/* <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Cloud Platform 3</h3>
              <p className="text-gray-400">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "NodeJS", "MongoDB", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div> */}
            {/* <div className="p-6 rounded-xl border border-white/20 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Cloud Platform 3</h3>
              <p className="text-gray-400">
                Scalable cloud infrastructure management with real-time
                monitoring and automated scaling.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "NodeJS", "MongoDB", "AWS"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                  hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                  "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  {" "}
                  View Project →
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
