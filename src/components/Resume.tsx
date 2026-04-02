"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";

export default function Resume() {
  const resumeUrl = "/Doshi Bhavya  resume.pdf"; // Path to your resume in public folder

  return (
    <section id="resume" className="py-20 px-4 bg-transparent relative overflow-hidden">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-orange-primary uppercase tracking-widest"
        >
          My Professional Resume
        </motion.h2>

        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Resume Preview/Icon */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 relative group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-primary/50 to-orange-secondary/50 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-30"></div>
            <div className="relative bg-dark-card/40 backdrop-blur-md border border-orange-primary/30 rounded-3xl p-8 flex flex-col items-center justify-center aspect-[3/4] overflow-hidden">
              <div className="w-24 h-24 bg-orange-primary/10 rounded-full flex items-center justify-center mb-6">
                <FileText className="text-orange-primary w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Curriculum Vitae</h3>
              <p className="text-gray-400 text-center mb-8">
                Detailed overview of my professional experience, skills, and education.
              </p>
              
              <div className="w-full h-1 bg-orange-primary/20 rounded-full mb-8 relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  className="absolute top-0 left-0 h-full bg-orange-primary"
                />
              </div>

              <div className="flex flex-col gap-4 w-full">
                <a 
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-orange-primary text-dark-main font-extrabold rounded-2xl hover:bg-orange-secondary transition-all hover:scale-[1.02]"
                >
                  <ExternalLink size={20} />
                  View Resume Online
                </a>
                <a 
                  href={resumeUrl}
                  download="Bhavya_Doshi_Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-4 border-2 border-orange-primary text-orange-primary font-extrabold rounded-2xl hover:bg-orange-primary/10 transition-all"
                >
                  <Download size={20} />
                  Download PDF
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Highlights */}
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-orange-primary/10 hover:border-orange-primary/30 transition-all"
            >
              <h4 className="text-xl font-extrabold text-orange-primary mb-2">Education</h4>
              <p className="text-gray-300 font-bold">Bachelor of Science in Information Technology</p>
              <p className="text-sm text-gray-500">2020 - 2024</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-orange-primary/10 hover:border-orange-primary/30 transition-all"
            >
              <h4 className="text-xl font-extrabold text-orange-primary mb-2">Focus Areas</h4>
              <ul className="flex flex-wrap gap-2">
                {["Frontend Development", "Next.js & React", "Full Stack Architecture", "UI/UX Design"].map(tag => (
                  <li key={tag} className="px-3 py-1 bg-orange-primary/10 text-orange-primary rounded-full text-xs font-bold uppercase tracking-wider">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 rounded-2xl bg-dark-card/40 backdrop-blur-md border border-orange-primary/10 hover:border-orange-primary/30 transition-all"
            >
              <h4 className="text-xl font-extrabold text-orange-primary mb-2">Key Experience</h4>
              <p className="text-gray-300 font-bold italic">"Expertise in building scalable web applications with a focus on premium user experience and modern animations."</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
