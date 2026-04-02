"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Hero", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Skills", href: "#skills" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-dark-main/90 backdrop-blur-md py-4 border-b border-orange-primary/20" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-extrabold text-orange-primary tracking-tighter"
        >
          BD<span className="text-white">.</span>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-orange-primary font-bold text-sm uppercase tracking-widest transition-all hover:scale-110"
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 items-center pl-6 border-l border-white/10">
            <a href="https://github.com/Bhavya190" target="_blank" className="hover:text-orange-primary transition-all"><GithubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/bhavya-doshi-a42b11292/" target="_blank" className="hover:text-orange-primary transition-all"><LinkedinIcon size={20} /></a>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white hover:text-orange-primary transition-colors">
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-dark-main border-b border-orange-primary/20 p-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold text-center hover:text-orange-primary transition-all active:scale-95"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
