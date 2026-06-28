import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Tech Mahindra Ltd.",
    period: "June 2024 — Present",
    description:
      "Building and shipping production-grade frontend applications. Architecting scalable dashboard modules, performance optimization, and custom state managers.",
    techUsed: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Redux",
      "Bootstrap",
    ],
  },
  {
    role: "Associate Intern",
    company: "Internshala",
    period: "Oct 2021 — Nov 2021",
    description:
      "Gained hands-on experience in full-stack application development and deployment workflows.",
    techUsed: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Bootstrap",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 bg-transparent text-zinc-50 px-6 sm:px-12 md:px-24 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold uppercase tracking-widest text-amber-100 mb-16">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col sm:flex-row justify-between items-start gap-4 border-b border-zinc-900 pb-10 last:border-0"
            >
              <div className="space-y-2 max-w-xl">
                <h3 className="text-xl font-medium text-zinc-100">
                  {exp.role}
                </h3>
                <p className="text-sm font-mono text-amber-200">
                  {exp.company}
                </p>
                <p className="text-zinc-400 text-sm font-light leading-relaxed pt-2">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.techUsed &&
                    exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/30 px-3 py-1.5 rounded-2xl text-xs text-zinc-300 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
              </div>

              <span className="text-sm font-mono text-zinc-500 whitespace-nowrap">
                {exp.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
