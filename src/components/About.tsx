"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center bg-dark-main overflow-hidden py-24">
      <div className="container mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center relative z-10">
        
        {/* Left Column: Content */}
        <div className="flex-1 lg:max-w-xl text-left">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter mb-2">
                About
                <div className="w-16 h-1 bg-cyan-primary mt-2" />
              </h2>
              <a href="mailto:bhavya.doshi2k26@gmail.com" className="text-cyan-primary font-medium hover:underline tracking-widest text-lg">
                bhavya.doshi2k26@gmail.com
              </a>
            </div>

            <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed font-light">
              <p>
                Highly skilled <span className="text-white font-medium italic">Frontend Developer</span>, 
                <span className="text-white font-medium italic"> Shopify Developer</span>, and 
                <span className="text-white font-medium italic"> Full Stack Developer</span> dedicated to building state-of-the-art web applications.
              </p>
              <p>
                I am currently pursuing a degree in Computer Science, where I&apos;ve developed a deep understanding of modern software architecture. My greatest strength is technical awareness, which allows me to implement effective IT strategies and permanently streamline infrastructure for high-performance projects.
              </p>
              <p>
                Combining mathematical precision with creative problem-solving, I specialize in crafting full-stack solutions using technologies like Next.js, React, and Shopify to deliver exceptional digital experiences.
              </p>
            </div>

            {/* Bottom Location Marker */}
            <div className="mt-20 pt-10 flex flex-col items-start border-t border-white/5 opacity-60">
               <p className="text-sm tracking-[0.4em] uppercase text-white/50 mb-4">India, Gujarat</p>
               <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-cyan-primary" />
                  <p className="text-xs tracking-[0.2em] uppercase text-white/80 font-medium">Bhavya Doshi</p>
                  <span className="w-8 h-[1px] bg-cyan-primary" />
               </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full lg:w-1/2 mt-16 lg:mt-0 relative h-[600px] md:h-[900px] lg:self-start">
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative h-full w-full"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-l from-transparent via-transparent to-dark-main lg:block hidden" />
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark-main via-transparent to-transparent lg:hidden block" />
            <Image
              src="/images/about(1).png"
              alt="Bhavya Doshi"
              fill
              className="object-contain object-top grayscale hover:grayscale-0 transition-all duration-1000" 
              priority
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
