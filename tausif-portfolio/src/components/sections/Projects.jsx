import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Swiggy Clone",
      description:
        "A Swiggy-like food ordering app with real-time API fetching and state management.",
      techStack: ["React", "React Router", "TailwindCSS", "API Fetching"],
      link: "https://github.com/tausifcoder1111",
    },
    {
      title: "NetflixGPT",
      description:
        "A Netflix clone with GPT-powered search, dynamic content fetching, and authentication.",
      techStack: ["React", "GPT-3 API", "Firebase Auth", "TailwindCSS"],
      link: "https://github.com/tausifcoder1111",
    },
    {
      title: "YouTube Clone",
      description:
        "A fully functional YouTube UI with real-time search, video streaming, and authentication.",
      techStack: ["React", "Redux Toolkit", "Firebase", "YouTube API"],
      link: "https://github.com/tausifcoder1111",
    },
    {
      title: "DevTinder",
      description:
        "A dating app for developers with swiping features and real-time data fetching.",
      techStack: ["React", "Redux Toolkit", "Firebase", "TailwindCSS"],
      link: "https://github.com/tausifcoder1111",
    },
    {
      title: "Parallax Website",
      description:
        "A visually stunning parallax scrolling website with smooth animations and modern UI.",
      techStack: ["React", "Framer Motion", "TailwindCSS"],
      link: "https://github.com/tausifcoder1111",
    },
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{project?.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                  target="_blank"
                    href={project.link}
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
