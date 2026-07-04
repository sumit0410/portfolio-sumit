"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Tech Stack", href: "#tech", id: "tech" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "About", href: "#about", id: "about" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 1. Change background opacity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Track which section is currently on screen
  useEffect(() => {
    const observers = [];

    const observerCallback = (entries: any) => {
      entries.forEach((entry: any) => {
        // If the section takes up a decent portion of the screen, mark it active
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Triggers when section hits near the middle of viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/70 backdrop-blur-md border-b border-zinc-900/80 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className=" px-6 sm:px-12 md:px-40 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2">
            {/* <span className="w-2 h-2 bg-amber-500 rounded-full group-hover:scale-125 transition-transform" /> */}
            <img
              width="20"
              height="20"
              className="rounded-full rotate-360 group-hover:scale-125 transition-transform"
              src={"./sumit2.jpeg"}
              alt="sumit"
            />
            <span className="font-mono text-sm tracking-wider font-semibold text-zinc-100">
              Sumit
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-xs font-mono uppercase tracking-wider transition-colors duration-200 flex items-center gap-1.5 py-1 ${
                    isActive
                      ? "text-zinc-100 font-medium"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeDot"
                      className="w-1 h-1 bg-amber-400 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-400 hover:text-zinc-100 p-1 z-50 relative"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-zinc-950/98 backdrop-blur-xl z-40 lg:hidden flex flex-col justify-center px-8 sm:px-12"
          >
            <div className="space-y-6 flex flex-col">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-3xl sm:text-4xl font-medium tracking-tight transition-colors flex items-center gap-3 ${
                      isActive
                        ? "text-amber-200"
                        : "text-zinc-400 hover:text-zinc-200"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
