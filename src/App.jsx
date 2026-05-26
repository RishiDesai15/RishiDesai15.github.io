import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Rishi Desai - Data Engineer | Portfolio</title>
        <meta name="description" content="Rishi Desai's portfolio - Data Engineer specializing in data pipelines, analytics, and cloud infrastructure. Explore my projects and experience." />
      </Helmet>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Education />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;