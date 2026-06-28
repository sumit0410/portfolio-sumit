import { motion } from "framer-motion";

const techData = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
      "Material UI",
      "Bootstrap",
    ],
  },
  {
    category: "Backend & DB",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "MySQL",
      "MongoDB",
      "Prisma",
      "JWT",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "Tools & DevOps",
    items: ["Docker", "Vercel", "AWS", "Git", "Socket.io", "Playwright"],
  },
];

export default function TechStack() {
  return (
    <section
      id="tech"
      className="py-24 bg-zinc-950 text-zinc-50 px-6 sm:px-12 md:px-24 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold uppercase tracking-widest text-amber-100 mb-12">
          Tech Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {techData.map((tech, idx) => (
            <motion.div
              key={tech.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-sm font-semibold text-zinc-400 font-mono">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span
                    key={item}
                    className="bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/30 px-3 py-1.5 rounded-2xl text-sm text-zinc-300 transition-colors duration-300"
                  >
                    {item}
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
