import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectCard = ({
  title,
  description,
  tech,
  github,
  gradient,
  delay,
  children
}) => {
  const { toast } = useToast();

  const handleCodeClick = url => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "🚧 No repository link available for this project yet! 🚀"
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -12 }}
      className="group relative"
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 rounded-2xl`}></div>
      
      <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all h-full flex flex-col">
        <div className="relative overflow-hidden h-48 bg-black/20">
          {children}
          <div className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-green-400 group-hover:bg-clip-text transition-all">
            {title}
          </h3>
          
          <p className="text-white/70 text-sm leading-relaxed mb-4 flex-1">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map(t => (
              <span
                key={t}
                className="px-2 py-1 bg-white/5 rounded-lg text-xs text-white/70 border border-white/10"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCodeClick(github)}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-green-400 hover:from-purple-600 hover:to-green-500 rounded-lg text-sm font-medium transition-all w-full justify-center"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const imageClasses = "w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500";

  return (
    <section id="projects" className="py-24 px-6 relative bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-white/60 text-center mb-16 max-w-2xl mx-auto">
            A selection of my recent work in software development and engineering
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Reddit Data Engineer Pipeline */}
            <ProjectCard
              title="Reddit Data Engineer Pipeline"
              description="An end-to-end ETL data pipeline that extracts data from Reddit using its API, orchestrates workflows with Apache Airflow, and processes data using AWS services including S3, Glue, Athena, and Redshift."
              tech={["Python", "Apache Airflow", "AWS S3", "AWS Glue", "AWS Athena", "Redshift", "PostgreSQL", "Docker"]}
              github="https://github.com/RishiDesai15/Reddit-DataEng-Pipeline"
              gradient="from-orange-500 to-red-500"
              delay={0}
            >
              <img
                className={imageClasses}
                alt="Reddit Data Engineer Pipeline Architecture"
                src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/4810bc263eb08f12fe4a433dd0ff6fce.png"
              />
            </ProjectCard>

            {/* Fake News Detection Neural Network */}
            <ProjectCard
              title="Fake News Detection Neural Network"
              description="Developed end-to-end pipeline training Bi-LSTM and 1D-CNN models on the Kaggle Fake News dataset (headlines + full text), automating hyperparameter tuning with Talos to reach 95% accuracy"
              tech={["Python", "Pytorch", "Talos", "Flask", "Numpy", "Pandas"]}
              github="https://github.com/RishiDesai15/Fake-News-NN"
              gradient="from-rose-500 to-red-600"
              delay={0.1}
            >
              <img
                className={imageClasses}
                alt="Neural Network Visualization"
                src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/fn-CrzOm.jpg"
              />
            </ProjectCard>

            {/* Staff Management Integration */}
            <ProjectCard
              title="Staff Management Integration"
              description="Engineered responsive and interactive UI components, optimized user experience, implemented modular code architecture with Replit to build a better managing platform for pharmacists."
              tech={["Replit", "React", "TypeScript", "HTML", "CSS", "Git"]}
              github="https://github.com/RishiDesai15/Staff-Management"
              gradient="from-blue-500 to-indigo-500"
              delay={0.2}
            >
              <img
                src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/smi-Uz9Y9.jpg"
                alt="Staff Management Integration"
                className={imageClasses}
              />
            </ProjectCard>

            {/* Appointment Configuration Tool */}
            <ProjectCard
              title="Appointment Configuration Tool"
              description="Built a JSON comparison tool Python script using DeepDiff to analyze differences between two JSON structures, highlighting changes with custom rules."
              tech={["Python", "Windmill", "DeepDiff"]}
              github="https://github.com/RishiDesai15/Appointment-Configuration-Tool"
              gradient="from-yellow-400 to-orange-500"
              delay={0.3}
            >
              <img
                src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/appointment-scheduling-all-DvqQI.png"
                alt="Appointment Configuration Tool"
                className={imageClasses}
              />
            </ProjectCard>

            {/* Spotify Song Searcher */}
            <ProjectCard
              title="Spotify Song Searcher"
              description="Used React-bootstrap to create a basic front-end that handles incoming song, album, and artist data. Implemented search functionality using Spotify API."
              tech={["React", "Spotify API", "JavaScript", "CSS"]}
              github="https://github.com/RishiDesai15/Spotify-Song-Searcher"
              gradient="from-green-500 to-emerald-600"
              delay={0.4}
            >
               <img
                 src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/ss-sREX3.png"
                 alt="Spotify Song Searcher"
                 className={imageClasses}
               />
            </ProjectCard>

            {/* Tic Tac Toe Bot */}
            <ProjectCard
              title="Tic Tac Toe Bot"
              description="Developed an automatic bot for Tic-Tac-Toe using Python that would compete against you."
              tech={["Python", "VS Code"]}
              github="https://github.com/RishiDesai15/Tic-Tac-Toe"
              gradient="from-purple-500 to-pink-500"
              delay={0.5}
            >
              <img
                src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/5707d11cdb8f87aae74635a73f1e54c5.png"
                alt="Tic Tac Toe Bot"
                className={imageClasses}
              />
            </ProjectCard>

            {/* Game Dev */}
            <ProjectCard
              title="Game Dev"
              description="Constructed two 2D games, Tetris and Asteroids with implemented add-ons and power-ups to increase user experience."
              tech={["Java", "Python", "PyCharm", "NumPy"]}
              github="https://github.com/RishiDesai15/Asteroids.java"
              gradient="from-red-500 to-pink-600"
              delay={0.6}
            >
              <img
                src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/gd-etJHj.jpg"
                alt="Game Dev"
                className={imageClasses}
              />
            </ProjectCard>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;