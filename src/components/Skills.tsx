"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", rating: 9, icon: "/images/html-5-svgrepo-com.svg" },
  { name: "CSS", rating: 9, icon: "/images/css-svgrepo-com.svg" },
  { name: "Bootstrap", rating: 7, icon: "/images/bootstrap-svgrepo-com.svg" },
  { name: "Tailwind", rating: 7, icon: "/images/tailwind-css-svgrepo-com.svg" },
  { name: "JavaScript", rating: 8, icon: "/images/js-official-svgrepo-com.svg" },
  { name: "React.js", rating: 9, icon: "/images/react-javascript-js-framework-facebook-svgrepo-com.svg" },
  { name: "Next.js", rating: 7, icon: "/images/next-dot-js-svgrepo-com.svg" },
  { name: "TypeScript", rating: 7, icon: "/images/typescript-official-svgrepo-com.svg" },
  { name: "Shopify", rating: 7, icon: "/images/shopify-svgrepo-com.svg" },
  { name: "WordPress", rating: 6, icon: "/images/wordpress-svgrepo-com.svg" },
  { name: "Python", rating: 7, icon: "/images/python-svgrepo-com.svg" },
  { name: "Java", rating: 5, icon: "/images/java-svgrepo-com.svg" },
  { name: "Django", rating: 6, icon: "/images/django-svgrepo-com.svg" },
  { name: "MySQL", rating: 7, icon: "/images/mysql-logo-svgrepo-com.svg" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-dark-main relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Skills
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-cyan-primary/20 hover:border-cyan-primary/50 transition-all group overflow-hidden relative shadow-lg hover:shadow-cyan-primary/5"
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                    <Image 
                      src={skill.icon} 
                      alt={skill.name} 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-xl font-bold group-hover:text-cyan-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-bold text-cyan-primary text-xl">
                  {skill.rating}
                  <span className="text-sm opacity-50 ml-1">/10</span>
                </span>
              </div>
              
              <div className="w-full h-2 bg-dark-main rounded-full overflow-hidden border border-cyan-primary/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.rating * 10}%` }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-cyan-primary/80 to-cyan-primary shadow-[0_0_10px_rgba(6,182,212,0.3)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
