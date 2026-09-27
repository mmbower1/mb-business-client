import { RevealOnScroll } from "../RevealOnScroll";
import reactLogo from "../../assets/react.svg";
import { StatCounter } from "../StatCounter";

const stats = [
  { value: 6, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "", label: "Featured Projects" },
  { value: 50, suffix: "", label: "YouTube Videos" },
  { value: 14, suffix: "K+", label: "YouTube Views" },
];

const jobs = [
  {
    role: "Full Stack Web Engineer",
    company: "Prestwood IT Solutions",
    dates: "Apr 2026 - Present",
  },
  {
    role: "Data Technician",
    company: "State of California",
    dates: "2024 - 2025",
  },
  {
    role: "Technical Support Engineer",
    company: "Solaredge Technologies",
    dates: "2021 - 2023",
  },
  {
    role: "Software Engineer",
    company: "Splash Factory LLC",
    dates: "2019 - 2020",
  },
  { role: "Lead Code Mentor", company: "Hackingtons", dates: "2018 - 2019" },
  {
    role: "Software Developer",
    company: "Tallac Networks",
    dates: "2018 - 2019",
  },
];

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
      className="min-h-[70vh] flex items-center justify-center pt-20 pb-4 md:pb-8"
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
          <div className="glow-card rounded-xl p-8 border-white/20 border">
            <p
              className="text-gray-300 mb-6"
              // style={{ "font-family": "Arial, sans-serif" }}
            >
              Full Stack Software Engineer and IT Specialist with 6+ years
              building scalable, reliable web applications and resolving complex
              technical issues. Skilled in JavaScript, TypeScript, React,
              Node.js, REST APIs, and cloud platforms, with a proven record of
              driving operational efficiency and strong user experience
              outcomes.
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {stats.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="glow-card p-6 rounded-xl border-white/10 border">
              <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Sacramento City College,</strong> Cybersecurity and
                  Network Assurance
                </li>
                <br />
                <li>
                  <strong>
                    UC Davis Trilogy Professional & Continuing Education,
                  </strong>{" "}
                  Full Stack Web Development (2018)
                </li>
                <br />
                <li>
                  <strong>San Jose State University,</strong> B.A.
                  Communications (2015-17)
                </li>
              </ul>
            </div>
            <div className="glow-card p-6 rounded-xl border-white/10 border">
              <h3 className="text-xl font-bold mb-4">📁 Work Experience</h3>
              {/* Timeline */}
              <ol className="ml-2 border-l border-blue-500/30 space-y-5">
                {jobs.map((job, i) => (
                  <li key={job.company} className="relative pl-6">
                    <span
                      className={`absolute -left-[6.5px] top-1.5 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-blue-500/20 ${
                        i === 0 ? "animate-pulse" : ""
                      }`}
                    />
                    <p className="text-xs text-blue-400">{job.dates}</p>
                    <h4 className="font-semibold text-gray-100">{job.role}</h4>
                    <p className="text-sm text-gray-400">{job.company}</p>
                  </li>
                ))}
              </ol>
            </div>
            <div className="react-logo-container md:col-span-2">
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
