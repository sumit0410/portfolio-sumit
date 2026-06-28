import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-transparent text-zinc-50 px-6 sm:px-12 md:px-24 border-t border-zinc-900"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold uppercase tracking-widest text-amber-100">
          About Me
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 space-y-6 text-zinc-400 font-light leading-relaxed text-base sm:text-lg"
        >
          <p>
            Full Stack Developer with 2+ years of experience building scalable,
            high performance web application using MERN stack. Skilled in
            designing responsive user interfaces, developing efficient backend
            services and optimizing application performance for large-scale
            systems.
          </p>
          <p>
            I love bridging design and engineering — turning complex application
            logic into smooth, highly deterministic interfaces, while balancing
            robust data pipelines behind the scenes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
