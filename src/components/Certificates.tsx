"use client";

import { motion } from "framer-motion";
import { FileText, Award, Eye } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Introduction to HTML, CSS & JavaScript",
    issuer: "Coursera / IBM",
    date: "2023",
    url: "/Introduction to HTML,CSS & JavaScript.pdf",
    color: "from-orange-500/10 to-orange-500/20"
  },
  {
    id: 2,
    title: "Back-End Development with .Net",
    issuer: "Coursera / Microsoft",
    date: "2024",
    url: "/Back-End Development with .Net.pdf",
    color: "from-blue-500/10 to-blue-500/20"
  },
  {
    id: 3,
    title: "Exploratory Data Analysis for Machine Learning",
    issuer: "Coursera / IBM",
    date: "2024",
    url: "/Exploratory Data Analysis for Machine Learning.pdf",
    color: "from-green-500/10 to-green-500/20"
  },
  {
    id: 4,
    title: "Introduction to Java",
    issuer: "Coursera / IBM",
    date: "2025",
    url: "/Introduction to Java.pdf",
    color: "from-red-500/10 to-red-500/20"
  },
  {
    id: 5,
    title: "Inheritance and Data Structures in Java",
    issuer: "Coursera / IBM",
    date: "2025",
    url: "/Inheritance and Data Structures in Java.pdf",
    color: "from-purple-500/10 to-purple-500/20"
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
              className={`p-8 rounded-3xl border border-orange-primary/20 bg-dark-card/40 backdrop-blur-md hover:shadow-2xl hover:shadow-orange-primary/10 transition-all group`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-4 bg-dark-main/30 rounded-2xl border border-orange-primary/30">
                  <Award className="text-orange-primary w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-gray-500">{cert.date}</span>
              </div>
              
              <h3 className="text-2xl font-extrabold mb-2 leading-tight">{cert.title}</h3>
              <p className="text-orange-primary/80 font-medium mb-8">Issued by {cert.issuer}</p>

              <a 
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-orange-primary text-dark-main font-extrabold rounded-2xl hover:bg-orange-secondary hover:scale-[1.02] transition-all group-hover:bg-orange-secondary"
              >
                <Eye size={20} />
                Check Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
