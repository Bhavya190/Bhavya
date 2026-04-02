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
    <section id="skills" className="py-20 px-4 bg-transparent relative">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-orange-primary uppercase tracking-widest"
        >
          My Technical Expertise
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-orange-primary/20 hover:border-orange-primary/50 transition-all group overflow-hidden relative shadow-lg hover:shadow-orange-primary/5"
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
                  <span className="text-xl font-bold group-hover:text-orange-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="font-bold text-orange-primary text-xl">
                  {skill.rating}
                  <span className="text-sm opacity-50 ml-1">/10</span>
                </span>
              </div>
              
              <div className="w-full h-2 bg-dark-main rounded-full overflow-hidden border border-orange-primary/10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.rating * 10}%` }}
                  transition={{ duration: 1.5, delay: idx * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-orange-primary/80 to-orange-primary shadow-[0_0_10px_rgba(255,140,0,0.3)]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
