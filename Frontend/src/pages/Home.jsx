

import React, { Suspense } from "react";
import Hero from "../components/Hero"; // Keep Hero standard import for speed
import Contact from "../components/Contact"; // Keep Contact if you want it fast

// Lazy load the rest
const Skills = React.lazy(() => import("../components/Skills"));
const Experience = React.lazy(() => import("../components/Experience"));
const Projects = React.lazy(() => import("../components/Projects"));
const Education = React.lazy(() => import("../components/Education"));
const Certificates = React.lazy(() => import("../components/Certificates"));
const Achievements = React.lazy(() => import("../components/Achievements"));

const Home = () => {
  return (
    <main className="text-white">
      <Hero /> {/* Loads instantly */}

      <Suspense fallback={<div className="h-screen flex items-center justify-center text-emerald-500">Loading...</div>}>
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certificates />
        <Achievements />
      </Suspense>

      <Contact />

      
        
    </main>
  );
};

export default Home;