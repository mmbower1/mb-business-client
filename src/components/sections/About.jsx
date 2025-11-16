import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Redux",
    "Scss",
    "Bootstrap",
    "Html",
    "Document Object Model",
    "Chrome tools",
    "Grok3",
  ];
  const backendSkills = [
    "Unix",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "HTTPS",
    "Postman",
    "MVC",
    "AWS",
    "Grok3",
    "Apache",
    "Package Manager",
  ];

  return (
    <section
      id="about"
      className="min-h-[70vh] flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
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
            text-center
            "
          >
            About me
          </h2>
          <div className="rounded-xl p-8 border-white/20 border hover:-translate-y-1 transition-all">
            <p
              className="text-gray-300 mb-6"
              // style={{ "font-family": "Arial, sans-serif" }}
            >
              Passionate developer since 2017 with expertise in building
              scalable full-stack web applications in creating dynamic,
              innovative, high-level language solutions using package managers,
              artificial intelligence and blockchain technology. I am available
              for consulting.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-1">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 
                    text-blue-500 
                    py-1 
                    px-1
                    rounded-full 
                    text-sm 
                    hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)]
                    transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 
                    text-blue-500 
                    py-1 
                    px-1 
                    rounded-full 
                    text-sm 
                    hover:bg-blue-500/20
                    hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)]
                    transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>
                    UC Davis Trilogy Professional & Continuing Education,
                  </strong>{" "}
                  Web Development (2018)
                </li>
                <br />
                <li>
                  <strong>San Jose State University,</strong> B.A.
                  Communications (2015-17)
                </li>
                <br />
                <li>
                  <strong>Santa Barbara City College</strong> (2013-15)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">📁 Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4>Technician @ State of California (2024-2025)</h4>
                  <br />
                  <h4>
                    IT Subject Matter Expert @ Solaredge Technologies
                    (2021-2023)
                  </h4>
                  <br />
                  <h4>Software Engineer @ Splash Factory LLC (2019-2020)</h4>
                  <br />
                  <h4>Lead Code Mentor @ Hackingtons (2018-2019)</h4>
                  <br />
                  <h4>Software Developer @ Tallac Networks (2018-2019)</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
