"use client";

import { motion } from "framer-motion";
import { Menu, X, ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    id: 1,
    title: "EcoWorld Dashboard",
    category: "Full Stack",
    image: "/images/project1.png",
    link: "https://github.com/Bhavya190"
  },
  {
    id: 2,
    title: "Solar Portfolio Site",
    category: "Web App",
    image: "/images/project2.png",
    link: "https://github.com/Bhavya190"
  },
  {
    id: 3,
    title: "E-Commerce Plateform",
    category: "Next.js",
    image: "/images/project1.png",
    link: "https://github.com/Bhavya190"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-transparent">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-orange-primary uppercase tracking-widest"
        >
          My Creative Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden border border-orange-primary/20 bg-dark-card/40 backdrop-blur-md"
            >
              {/* Image Container */}
              <div className="h-64 overflow-hidden relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-dark-main/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
                  <div className="flex gap-4">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-orange-primary text-dark-main rounded-full hover:bg-orange-secondary hover:scale-110 transition-all font-bold"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="p-6 relative">
                 <span className="text-orange-primary mb-2 block font-medium tracking-wider text-sm">{project.category}</span>
                 <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                 <div className="flex justify-between items-center text-sm text-gray-500">
                    <a href={project.link} className="hover:text-orange-primary transition-colors flex items-center gap-1">
                       <GithubIcon size={16} /> Repository
                    </a>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
