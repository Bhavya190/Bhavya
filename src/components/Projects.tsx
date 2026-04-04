"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./SocialIcons";

const projects = [
  {
    id: 1,
    index: "01",
    title: "DND Cafe",
    tech: "React JS, Tailwind CSS, Smooth Animations, User-centric UI/UX",
    category: "Web",
    image: "/images/DND Cafe.png",
    link: "https://dnd-eta-jade.vercel.app/"
  },
  {
    id: 2,
    index: "02",
    title: "Revdix Exim",
    tech: "Next JS, Tailwind CSS, TypeScript, Node JS, Nodemailer",
    category: "Web",
    image: "/images/Revdix.png",
    link: "https://www.revdixexim.com/"
  },
  {
    id: 3,
    index: "03",
    title: "Dejavu NFT",
    tech: "React JS, Python, Django, Tailwind CSS",
    category: "Web",
    image: "/images/Dejavu NFT.png",
    link: "https://github.com/Bhavya190/Dejavu-NFT"
  },
  {
    id: 4,
    index: "04",
    title: "Rapid Read",
    tech: "React, Python, Django, Bootstrap",
    category: "Web",
    image: "/images/Repid Read.png",
    link: "https://github.com/Bhavya190/RapidRead"
  },
  {
    id: 5,
    index: "05",
    title: "TaskManager",
    tech: "React JS, Tailwind CSS, MongoDB",
    category: "Web",
    image: "/images/TaskManager.png",
    link: "https://github.com/Bhavya190/TaskManager"
  }
  
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-dark-main">
      <div className="container mx-auto max-w-6xl">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-left"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Projects
            <div className="w-20 h-1 bg-cyan-primary mt-4" />
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative group flex flex-col lg:flex-row items-center gap-8 bg-dark-card/30 backdrop-blur-xl border border-white/5 rounded-[40px] p-8 md:p-12 hover:border-cyan-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-primary/5 rounded-full blur-[100px] -m-20 group-hover:bg-cyan-primary/10 transition-all duration-700" />
              
              {/* Screenshot on Left */}
              <div className="w-full lg:w-1/2 aspect-video relative rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-primary/20 transition-all duration-500">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Content in Middle */}
              <div className="flex-1 text-left relative z-10">
                <h3 className="text-3xl md:text-5xl font-black text-white mb-6 group-hover:text-cyan-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="mb-8">
                  <p className="text-cyan-primary font-bold tracking-widest uppercase text-sm mb-2">Technologies used</p>
                  <p className="text-white/60 text-lg md:text-xl font-light italic">
                    {project.tech}
                  </p>
                </div>

                <div className="flex gap-6 mt-10">
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-cyan-primary hover:text-dark-main hover:border-cyan-primary transition-all duration-300 font-bold"
                  >
                    {project.link.includes('github') ? <GithubIcon size={20} /> : <ExternalLink size={20} />}
                    {project.link.includes('github') ? 'Source Code' : 'Live Demo'}
                  </a>
                </div>
              </div>

              {/* Project Metadata on Right */}
              <div className="hidden lg:flex flex-col items-end justify-between h-full min-h-[160px] pb-4">
                 <span className="text-8xl font-black text-white/5 translate-x-4">
                    {project.index}
                 </span>
                 <div className="flex items-center gap-4 origin-right rotate-90 translate-y-12 translate-x-6">
                    <span className="w-8 h-[1px] bg-cyan-primary" />
                    <span className="text-sm tracking-[0.4em] uppercase text-white/40">{project.category}</span>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
