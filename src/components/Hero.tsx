"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Frontend Enthusiast", "Shopify Developer", "Fullstack Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
            filter: ["blur(40px)", "blur(20px)", "blur(40px)"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-orange-primary/20 rounded-full"
        />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-30">
        {/* Left Side: Content */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-primary/10 border border-orange-primary/20 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
            <span className="text-orange-primary text-sm font-bold uppercase tracking-wider">Available for Freelance Work</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-orange-primary text-2xl md:text-3xl font-bold mb-4"
          >
            Hello, I&apos;m
          </motion.h2>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            Bhavya <span className="text-orange-primary">Doshi</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="min-h-[60px] md:min-h-[80px]">
              <h3 className="text-3xl md:text-5xl font-bold italic font-serif text-white/90">
                {text}
                <span className="inline-block w-[3px] h-[30px] md:h-[45px] bg-blue-primary ml-1 animate-pulse"></span>
              </h3>
            </div>
            <p className="text-gray-400 text-xl md:text-2xl max-w-2xl leading-relaxed">
              I specialize in crafting high-end, responsive web applications with a focus on premium user experiences and cutting-edge animations.
            </p>

            <div className="flex flex-wrap gap-6 pt-8">
              <a href="#contact" className="px-10 py-4 bg-orange-primary text-dark-main font-black text-lg rounded-2xl hover:bg-orange-secondary hover:scale-105 transition-all shadow-xl shadow-orange-primary/20">
                Hire Me
              </a>
              <a href="#projects" className="px-10 py-4 border-2 border-orange-primary text-orange-primary font-black text-lg rounded-2xl hover:bg-orange-primary/10 hover:scale-105 transition-all">
                View Portfolios
              </a>
              <a href="/Doshi Bhavya  resume.pdf" target="_blank" className="px-10 py-4 border-2 border-blue-primary/40 text-blue-primary font-black text-lg rounded-2xl hover:bg-blue-primary/10 hover:scale-105 transition-all flex items-center gap-2">
                Resume
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Image */}
        <motion.div 
          initial={{ x: 100, opacity: 0, scale: 0.9 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          {/* Enhanced Background Decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-primary to-orange-secondary opacity-20 blur-[100px] rounded-full -z-10 group-hover:opacity-30 transition-opacity duration-1000"></div>
          
          <motion.div
            animate={{
              filter: ["blur(15px)", "blur(0px)"],
              opacity: [0.5, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 bg-orange-primary/20 rounded-full -m-6 md:-m-12 z-0"
          />
          
          <div className="relative z-10 w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border-[12px] border-orange-primary/20 p-2 overflow-hidden bg-dark-card shadow-[0_0_50px_rgba(255,140,0,0.2)] group-hover:shadow-[0_0_80px_rgba(255,140,0,0.4)] transition-all duration-500">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image 
                src="/images/me.png" 
                alt="Bhavya Doshi" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-700" 
                priority
              />
            </div>
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
