import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32  text-zinc-50 px-6 bg-transparent sm:px-12 md:px-24 border-t border-zinc-900 relative"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono font-bold uppercase tracking-widest text-amber-100">
          Get in Touch
        </h2>

        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100"
        >
          Let's build something <br />
          <span className="text-zinc-500 font-serif italic font-normal">
            extraordinary together.
          </span>
        </motion.h3>

        <p className="text-zinc-400 font-light max-w-md mx-auto text-sm sm:text-base">
          Got a project in mind, want to collaborate, or just want to talk shop?
          Drop a message.
        </p>

        <motion.div whileHover={{ scale: 1.02 }} className="inline-block pt-4">
          <a
            href="mailto:sumit.kg0410@gmail.com"
            className="inline-flex items-center gap-3 bg-zinc-900 border border-zinc-800 hover:border-amber-500/30 text-zinc-100 px-8 py-4 rounded-2xl text-base font-medium transition-all group"
          >
            Say Hello
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
