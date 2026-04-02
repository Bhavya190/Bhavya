"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";

export default function About() {
  const cards = [
    {
      title: "Current Study",
      icon: <GraduationCap className="text-orange-primary w-8 h-8" />,
      content: "I am currently pursuing my degree in Computer Science, focusing on full-stack web development and modern technologies like Next.js and React.",
      year: "2024 - Present"
    },
    {
      title: "Education History",
      icon: <BookOpen className="text-orange-primary w-8 h-8" />,
      content: "Completed my primary and secondary education with excellence, developing a strong foundation in mathematics and technology during my school years.",
      year: "Completed 2024"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-orange-primary uppercase tracking-widest"
        >
          About Me
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ x: idx === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="flex-1 p-8 rounded-3xl bg-dark-card/40 backdrop-blur-md border border-orange-primary/30 hover:border-orange-primary transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {card.icon}
              </div>
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-orange-primary/10 rounded-full">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4">{card.title}</h3>
              <p className="text-gray-400 text-center text-lg leading-relaxed mb-6">
                {card.content}
              </p>
              <div className="mt-auto pt-4 border-t border-orange-primary/10 text-center">
                 <span className="text-orange-primary font-bold italic">{card.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
