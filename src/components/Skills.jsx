import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Terminal, Layers } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS", "TailwindCSS", "Go", "R", "VBA"],
      icon: Code,
      color: "from-blue-400 to-purple-500",
      bgHover: "hover:border-blue-500/50"
    },
    {
      title: "Backend & Data",
      skills: ["GraphQL", "PostgreSQL", "MySQL", "Snowflake", "Databricks", "Apache Kafka", "Apache Spark", "Airflow", "Flink"],
      icon: Terminal,
      color: "from-green-400 to-emerald-600",
      bgHover: "hover:border-green-500/50"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django", "React.js", "FastAPI", "Flask", "Node.js", "GatsbyJS", "NumPy", "Pandas", "PyTorch", "React Bootstrap", "Matplotlib", "TensorFlow"],
      icon: Layers,
      color: "from-orange-400 to-yellow-500",
      bgHover: "hover:border-orange-500/50"
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Technical <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            A comprehensive toolkit for building robust data solutions
          </p>

          <div className="flex flex-col gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 ${category.bgHover} transition-all h-full`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 bg-white/5 rounded-lg text-sm font-medium text-white/80 border border-white/10 hover:bg-white/10 transition-all`}
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;