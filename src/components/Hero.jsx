import React from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming shadcn button is used

const Hero = () => {
  return <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6">
        <motion.h1 initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="bg-gradient-to-r from-purple-500 to-green-400 bg-clip-text text-transparent">Rishi Desai</span>
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-xl md:text-2xl text-white/80 mb-8">An Engineer passionate about building scalable data solutions.</motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-wrap justify-center gap-4 mt-8">
          <Button asChild className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg rounded-full shadow-lg transition-all transform hover:scale-105">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild className="px-8 py-3 md:px-10 md:py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white text-lg rounded-full shadow-lg transition-all transform hover:scale-105">
          <a href="https://drive.google.com/file/d/1zUmNWfRrILPaYsB_0cVpD02GRw_ybz68/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" /> Resume
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8,
      delay: 1
    }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
        <motion.a href="#about" className="flex flex-col items-center text-white/70 hover:text-white transition-colors" animate={{
        y: [0, -10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }}>
          <ChevronDown className="h-8 w-8" />
          <span className="text-sm mt-1">Scroll Down</span>
        </motion.a>
      </motion.div>
    </section>;
};
export default Hero;