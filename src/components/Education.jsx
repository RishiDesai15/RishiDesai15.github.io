import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, BookOpen, Award } from 'lucide-react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const educationData = [
    {
      institution: "University of Waterloo",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/7196f1deff1b1ad6e9d7276a64c3445d.png",
      degree: "Bachelor of Mathematics in Computational Mathematics and Computer Science",
      period: "2021 - 2026",
      location: "Waterloo, ON",
      coursework: "Algorithmic Problem Solving, IM Systems, Probability, Neural Networks, Networks and Distributed Computer Systems, Data Types and Structures, Statistics, Computer Systems"
    },
    {
      institution: "Udemy",
      logo: "https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/c36920143ceb588f7becfe8db2dc8918.png",
      degree: "Complete Machine Learning & Data Science Bootcamp",
      period: "May 2023 - Jul 2023",
      achievements: [
        "Learned to pre-process data, clean data, and analyze large data along with exploring large datasets and wrangling data using Pandas on Jupyter Notebook.",
        "Grasped which Machine Learning model to choose for specific problems and learned how to set the Developer Environment like Anaconda for Data Science and Machine Learning."
      ]
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            My <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            Academic background and certifications
          </p>

          <div className="flex flex-col gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="group relative"
              >
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-400 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
                
                <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-transparent transition-colors h-full relative z-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center border border-white/5 shrink-0 overflow-hidden p-2">
                        <img 
                          src={edu.logo} 
                          alt={`${edu.institution} logo`} 
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                          {edu.institution}
                        </h3>
                        <p className="text-white/80 text-lg">{edu.degree}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-start md:items-end gap-1 text-sm text-white/60 shrink-0">
                       <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-medium text-green-400">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      {edu.location && (
                        <span className="flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {edu.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/5 pt-6">
                    {edu.coursework && (
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-white/90 font-semibold">
                          <BookOpen className="w-4 h-4 text-purple-400" />
                          <span>Recent Coursework:</span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed">
                          {edu.coursework}
                        </p>
                      </div>
                    )}

                    {edu.achievements && (
                      <div>
                        <div className="flex items-center gap-2 mb-3 text-white/90 font-semibold">
                          <Award className="w-4 h-4 text-green-400" />
                          <span>Key Learnings:</span>
                        </div>
                        <ul className="space-y-3">
                          {edu.achievements.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-green-400 mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;