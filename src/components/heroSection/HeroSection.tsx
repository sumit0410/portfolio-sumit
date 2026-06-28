import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FlipWords } from "../ui/flip-words";

export default function Hero() {
  const words = [
    "Full-Stack Engineer.",
    "UI/UX Enthusiast.",
    "Frontend Developer.",
  ];
  return (
    <section
      id="home"
      className=" pt-40 mb-20 pb-20 flex flex-col justify-center bg-transparent text-zinc-50 px-6 sm:px-12 md:px-45 relative overflow-hidden"
    >
      <div className="max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-full px-4 py-1.5 text-xs text-amber-100 mb-6"
        >
          <span className="w-2 h-2 bg-yellow-700 rounded-full animate-pulse" />
          Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-7xl font-bold tracking-tight text-zinc-100 leading-[1.1] mb-6"
        >
          👋 I’m Sumit Gautam
          <br />
          <span className="text-zinc-400 font-serif italic font-normal"></span>{" "}
          a{" "}
          <span className=" text-3xl sm:text-6xl text-amber-100">
            {" "}
            <FlipWords words={words} />
          </span>{" "}
          <br />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-xl text-zinc-400 max-w-xl font-light leading-relaxed mb-10"
        >
          I’m a Full-Stack Engineer specializing in architectural clean code,
          fluid micro-interactions, and robust server-side ecosystems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 bg-zinc-100 text-zinc-950 px-4 py-2 rounded-2xl font-medium hover:bg-zinc-200 transition-colors group"
          >
            View My Work
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 text-zinc-300 px-6 py-3 rounded-2xl font-medium hover:bg-zinc-900 hover:text-zinc-100 transition-colors"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
