import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Twitter, FileText } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/sumit0410",
    icon: <Github className="w-5 h-5" />,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sumit-kr0410",
    icon: <Linkedin className="w-5 h-5" />,
  },

  {
    name: "Instagram",
    href: "https://instagram.com/sumit.04.10",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    name: "Resume",
    href: "/SumitKGCV.pdf", // Put your pdf file in the public folder
    icon: <FileText className="w-5 h-5" />,
    download: true, // Triggers automatic file download
  },
];

export default function SocialLinks({ variant = "dock" }) {
  // Option A: Floating desktop side dock (disappears gracefully on mobile to preserve layout)
  if (variant === "dock") {
    return (
      <div className="hidden md:flex fixed bottom-0 left-6 lg:left-12 flex-col items-center gap-6 z-40">
        <div className="flex flex-col gap-5">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              download={social.download}
              title={social.name}
              whileHover={{ y: -4, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="text-zinc-500 hover:text-emerald-400 transition-colors duration-200"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
        {/* Minimal structural architectural line */}
        <div className="w-[1px] h-24 bg-zinc-800 mt-2" />
      </div>
    );
  }

  // Option B: Flat row (Responsive layout for embedding inside explicit page sections)
  return (
    <div className="flex flex-wrap gap-4 items-center">
      {socials.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          download={social.download}
          whileHover={{ y: -2 }}
          className="flex items-center gap-2 bg-zinc-900/60  hover:text-amber-300 text-zinc-400  rounded-xl text-xs font-mono transition-colors duration-200"
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
}
