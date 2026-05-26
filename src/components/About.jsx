import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  return <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={ref} initial={{
        opacity: 0,
        y: 50
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {
        opacity: 0,
        y: 50
      }} transition={{
        duration: 0.8
      }}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            x: -50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: -50
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-green-400 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img alt="Rishi Desai - Software Engineer portrait" className="relative rounded-2xl w-full h-auto shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300" src="https://horizons-cdn.hostinger.com/7a5ff1ea-2df9-4130-8f35-e960a9420c3c/658580b5504764c237dc0d4898868c1f.jpg" />
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} animate={isInView ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: 50
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }} className="space-y-6">
              <p className="text-white/80 text-lg leading-relaxed">I attend the University of Waterloo, majoring in Computational Mathematics with a minor in Computer Science. My interests lie in data engineering, software development, web development, data analysis, and UI/UX design.</p>
              
              <p className="text-white/80 text-lg leading-relaxed">I'm a passionate Software Engineer with a keen eye for building robust software solutions and scalable applications. My expertise lies in designing efficient architectures, optimizing performance, and leveraging cutting-edge technologies to solve complex development challenges.</p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
                  <h3 className="text-3xl font-bold text-green-400 mb-2">2+</h3>
                  <p className="text-white/70 text-sm">Years Experience</p>
                </motion.div>
                
                <motion.div whileHover={{
                scale: 1.05
              }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-400/50 transition-all">
                  <h3 className="text-3xl font-bold text-purple-400 mb-2">10+</h3>
                  <p className="text-white/70 text-sm">Projects Completed</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;