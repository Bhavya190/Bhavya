"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    title: "Introduction to HTML, CSS & JavaScript",
    issuer: "Coursera / IBM",
    date: "2023",
    url: "/Introduction to HTML,CSS & JavaScript.pdf",
    image: "/images/cert1.png", 
  },
  {
    id: 2,
    title: "Back-End Development with .Net",
    issuer: "Coursera / Microsoft",
    date: "2024",
    url: "/Back-End Development with .Net.pdf",
    image: "/images/cert2.png",
  },
  {
    id: 3,
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "Coursera / IBM",
    date: "2024",
    url: "/Exploratory Data Analysis for Machine Learning.pdf",
    image: "/images/cert3.png",
  },
  {
    id: 4,
    title: "Introduction to Java",
    issuer: "Coursera / IBM",
    date: "2025",
    url: "/Introduction to Java.pdf",
    image: "/images/cert4.png",
  },
  {
    id: 5,
    title: "Inheritance and Data Structures in Java",
    issuer: "Coursera / IBM",
    date: "2025",
    url: "/Inheritance and Data Structures in Java.pdf",
    image: "/images/cert5.png",
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4 bg-transparent border-t border-orange-primary/10">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16 text-orange-primary uppercase tracking-widest"
        >
          My Certificates
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-[32px] bg-[#030617] border border-white/5 overflow-hidden hover:border-orange-primary/30 transition-all duration-500 shadow-2xl flex flex-col h-full"
            >
              {/* Image Section (Screenshot of PDF) */}
              <div className="p-4">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-orange-primary/20 transition-all">
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 3}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      className="p-3 bg-orange-primary text-black rounded-full hover:scale-110 transition-transform"
                    >
                      <Eye size={24} />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="px-8 pb-8 pt-2 flex flex-col flex-grow text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight group-hover:text-orange-primary transition-colors min-h-[3.5rem] flex items-center justify-center">
                  {cert.title}
                </h3>
                <p className="text-gray-400 font-medium mb-6">
                  {cert.issuer}
                </p>

                <div className="mt-auto">
                  <a 
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-blue-primary text-white font-black text-lg rounded-2xl hover:bg-blue-600 transition-all shadow-xl shadow-blue-primary/20 active:scale-95"
                  >
                    View Certificate
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
