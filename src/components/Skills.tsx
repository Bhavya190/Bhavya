"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/images/html-5-svgrepo-com.svg" },
  { name: "CSS", icon: "/images/css-svgrepo-com.svg" },
  { name: "Bootstrap", icon: "/images/bootstrap-svgrepo-com.svg" },
  { name: "Tailwind", icon: "/images/tailwind-css-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/images/js-official-svgrepo-com.svg" },
  { name: "React.js", icon: "/images/react-javascript-js-framework-facebook-svgrepo-com.svg" },
  { name: "Next.js", icon: "/images/next-dot-js-svgrepo-com.svg" },
  { name: "TypeScript", icon: "/images/typescript-official-svgrepo-com.svg" },
  { name: "Shopify", icon: "/images/shopify-svgrepo-com.svg" },
  { name: "WordPress", icon: "/images/wordpress-svgrepo-com.svg" },
  { name: "Python", icon: "/images/python-svgrepo-com.svg" },
  { name: "Java", icon: "/images/java-svgrepo-com.svg" },
  { name: "Django", icon: "/images/django-svgrepo-com.svg" },
  { name: "MySQL", icon: "/images/mysql-logo-svgrepo-com.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark-main relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl mb-16 md:pl-32 lg:pl-40 md:pr-8">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Skills
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full overflow-hidden py-10">
        {/* Left and Right Blur Gradients for sleek entrance/exit */}
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-dark-main to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-dark-main to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
        >
          {/* First Block of items */}
          <div className="flex gap-12 md:gap-20 items-center pr-12 md:pr-20">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center gap-6 group cursor-pointer w-24"
              >
                <div className="relative w-24 h-24 bg-dark-card/40 p-4 rounded-3xl border border-cyan-primary/20 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:border-cyan-primary/70 flex-shrink-0">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    fill
                    className="object-contain p-4 group-hover:brightness-125 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-bold text-white/40 group-hover:text-cyan-primary transition-colors duration-300 uppercase tracking-widest whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>

          {/* Second Block of items (Exact Duplicate) for seamless loop */}
          <div className="flex gap-12 md:gap-20 items-center pr-12 md:pr-20">
            {skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="flex flex-col items-center justify-center gap-6 group cursor-pointer w-24"
              >
                <div className="relative w-24 h-24 bg-dark-card/40 p-4 rounded-3xl border border-cyan-primary/20 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] group-hover:border-cyan-primary/70 flex-shrink-0">
                  <Image 
                    src={skill.icon} 
                    alt={skill.name} 
                    fill
                    className="object-contain p-4 group-hover:brightness-125 transition-all duration-300"
                  />
                </div>
                <span className="text-sm font-bold text-white/40 group-hover:text-cyan-primary transition-colors duration-300 uppercase tracking-widest whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
