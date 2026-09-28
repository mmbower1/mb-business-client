import { RevealOnScroll } from "../RevealOnScroll";
import { BackToTopArrow } from "../BackToTopArrow";

import lockheartImg from "../../assets/projects/lockheart.jpg";
import eaglesImg from "../../assets/projects/eagles.jpg";
import teslaImg from "../../assets/projects/tesla.jpg";
import arborImg from "../../assets/projects/arbor.jpg";

const projects = [
  {
    title: "Lockheart Dating",
    image: lockheartImg,
    description:
      "My first patented project, built this one-of-a-kind dating app with MERN + Typescript. What makes it different is that swiping gets disabled once you have gained two matches. Along with this there is an accountability score to prevent bad behaviors from users, such as notoriously ghosting. Rather than endless swiping, lets make dating how it should be, with true intentions.",
    tech: ["React", "Firebase", "Tailwind", "Vercel"],
    link: "https://lockheartdating.com",
  },
  {
    title: "Eagles Ecommerce",
    image: eaglesImg,
    description:
      "A full stack ecommerce website built with React Vite, Firebase, React context for state managment, and hosted with Vercel. Buy your favorite Eagles products here with the Stripe API.",
    tech: ["React", "Firebase", "Tailwind", "Vercel"],
    link: "https://react-firebase-store-rouge.vercel.app/",
  },
  {
    title: "Tesla Interactice UI",
    image: teslaImg,
    description:
      "Clean appearance and interactive web page built with React.jsx to measure the range for a Tesla with added factors of weather, speed, tire size, and AC usage.",
    tech: ["React", "Javascript", "SCSS", "AWS"],
    link: "https://tesla-ui-taupe.vercel.app/",
  },
  {
    title: "American Arbor",
    image: arborImg,
    description:
      "A freelance website built for a close friends' Horticulture Tree Arbor business for the Davis and Sacramento region. Scaled with Vite, React, Scss, Firebase and Vercel.",
    tech: ["React", "Scss", "Firebase", "Vercel"],
    link: "https://american-arbor.vercel.app/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-[50vh] flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <BackToTopArrow />
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
            {projects.map((project) => (
              <div
                key={project.title}
                className="glow-card group flex flex-col p-6 rounded-xl border border-white/20"
              >
                {/* Preview screenshot */}
                <a
                  href={project.link}
                  className="mb-4 block overflow-hidden rounded-lg border border-white/10"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="aspect-video w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p>{project.description}</p>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
