import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "DevPairr - Connect Developers",
    desc: "DevPairr helps developers connect, collaborate, chat and grow together. Discover amazing people based on skills, interests and tech stack.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Vite",
    ],
    liveLink: "https://devpairrs.onrender.com",
    gitLink: "https://github.com/sumit0410/devpairr",
  },
  {
    title: "Full Stack Chat App",
    desc: "A real-time messaging application engineered for fluid communication. Built on an event-driven architecture with WebSocket integration, it features instant message delivery, dynamic active-status indicators, and granular workspace controls wrapped inside a highly refined, low-latency interface.",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Socket.io",
      "MongoDB",
      "Vite",
      "Material UI",
      "PWA",
    ],
    gitLink: "https://github.com/sumit0410/chat-app",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-24 bg-zinc-950 text-zinc-50 px-6 sm:px-12 md:px-24 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono uppercase font-bold tracking-widest text-amber-100 mb-16">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-zinc-900/40 border border-zinc-900 hover:border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between backdrop-blur-sm group"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
                    {project.title}
                  </h3>
                  <div className="flex gap-3 text-zinc-400">
                    <a
                      href={project.gitLink}
                      className="hover:text-zinc-100 transition-colors"
                      target="_blank"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.liveLink}
                      className="hover:text-amber-500/30  transition-colors"
                      target="_blank"
                    >
                      {project.liveLink && <ArrowUpRight className="w-5 h-5" />}
                    </a>
                  </div>
                </div>
                <p className="text-zinc-400 font-light text-sm sm:text-base mb-8 leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-2xl text-xs font-mono text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
