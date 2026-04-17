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
      <div className="container mx-auto max-w-6xl md:pl-32 lg:pl-40 md:pr-8">
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
              <div className="w-full lg:w-[55%] aspect-video relative rounded-3xl overflow-hidden border border-white/10 group-hover:border-cyan-primary/20 transition-all duration-500 shadow-2xl">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              {/* Content in Middle */}
              <div className="flex-1 text-left relative z-10">
                <h3 className="text-2xl md:text-4xl font-black text-white mb-4 group-hover:text-cyan-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="mb-6">
                  <p className="text-cyan-primary font-bold tracking-widest uppercase text-xs mb-2">Technologies used</p>
                  <p className="text-white/60 text-base md:text-lg font-light italic">
                    {project.tech}
                  </p>
                </div>

                <div className="flex gap-4 mt-8">
                  <a 
                    href={project.link} 
                    target="_blank"
                    className="flex items-center justify-center gap-2 px-5 py-2.5 border border-cyan-primary/30 text-cyan-primary font-bold text-xs tracking-widest uppercase rounded-full hover:bg-cyan-primary hover:text-dark-main transition-all shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95"
                  >
                    {project.link.includes('github') ? <GithubIcon size={18} /> : <ExternalLink size={18} />}
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
