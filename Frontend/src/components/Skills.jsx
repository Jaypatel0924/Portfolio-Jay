
// import { MorphingCardStack } from "./ui/MorphingCardStack";
// import { 
//   Database, Layout, Server, Boxes, GitBranch, Bot
// } from "lucide-react";

// // Mapped data
// const skillsData = [
//   {
//     id: "core",
//     title: "Core Stack",
//     badge: "MERN",
//     icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
//     // Stack/Grid View: Tags
//     tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
//     // List View: Description
//     description: "Building full-stack applications with the MERN stack. utilizing Mongoose for efficient data modeling and Express for robust server-side logic.",
//     footer: "Full-Stack MERN Development",
//   },
//   {
//     id: "frontend",
//     title: "Frontend & Design",
//     badge: "UI / UX",
//     icon: <Layout className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["Tailwind CSS", "Bootstrap", "Figma", "Canva"],
//     description: "Translating designs from Figma and Canva into responsive code using Tailwind CSS and Bootstrap for clean, modern interfaces.",
//     footer: "Responsive Design Implementation",
//   },
//   {
//     id: "backend",
//     title: "Backend & Security",
//     badge: "API",
//     icon: <Server className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["REST APIs", "JWT", "Node.js", "Express"],
//     // Rich Description for List View
//     description: (
//       <span>
//         Developing secure <strong className="text-emerald-400 font-medium">RESTful APIs</strong> with Node.js. Implementing <strong className="text-emerald-400 font-medium">JWT authentication</strong> for secure user sessions.
//       </span>
//     ),
//     footer: "Secure API Architecture",
//   },
//   {
//     id: "creative",
//     title: "Creative & 3D",
//     badge: "INTERACTIVE",
//     icon: <Boxes className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["Three.js", "React", "3D Web", "Interactive UI"],
//     description: "Integrating 3D elements using Three.js to create immersive and interactive web experiences that stand out.",
//     footer: "Immersive Web Experiences",
//   },
//   {
//     id: "deployment",
//     title: "Deployment",
//     badge: "DEVOPS",
//     icon: <GitBranch className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["Git", "Vercel", "Render", "Cloudinary"],
//     description: "Managing code versions with Git and deploying applications to Vercel and Render. Handling media assets efficiently via Cloudinary.",
//     footer: "Streamlined Deployment Pipelines",
//   },
//   {
//     id: "ai",
//     title: "AI & Integrations",
//     badge: "MODERN TECH",
//     icon: <Bot className="h-5 w-5 md:h-6 md:w-6" />,
//     tags: ["Agentic AI", "Payment Integration", "API Integration"],
//     description: "Building intelligent workflows with Agentic AI and integrating secure payment gateways into e-commerce applications.",
//     footer: "Smart Integrations & AI",
//   },
// ];

// const Skills = () => {
//   return (
//     <section id="skills" className="relative min-h-screen px-6 py-24 md:px-10 lg:px-20 overflow-hidden bg-black">
      
//       {/* --------------------------------------------------
//           HIDDEN SEO SKILLS INDEX
//           -------------------------------------------------- */}
//       <div style={{
//           position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px',
//           overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0
//       }}>
//         <h3>Jay Patel - Technical Skills & Tech Stack</h3>
//         <p>
//           Jay Patel is a Full Stack Developer specializing in the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js) 
//           and <strong>3D Web Technologies</strong>.
//         </p>
//         <ul>
//           <li><strong>Frontend:</strong> React.js, Tailwind CSS, Three.js (3D), Framer Motion, Figma to React.</li>
//           <li><strong>Backend:</strong> Node.js, Express.js, REST APIs, JWT Authentication, MongoDB Aggregation.</li>
//           <li><strong>Advanced Tech:</strong> Agentic AI Workflows, Interactive 3D Portfolios, WebGL, Payment Gateway Integration (Razorpay).</li>
//           <li><strong>DevOps:</strong> Vercel Deployment, Git Version Control, Render, Cloudinary Asset Management.</li>
//         </ul>
//       </div>

//       {/* Background Ambience */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute top-1/4 right-0 h-96 w-96 rounded-full bg-emerald-500/10 blur-[100px]" />
//         <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-600/5 blur-[80px]" />
//       </div>

//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mb-16 md:text-center max-w-3xl mx-auto">
//           <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
//             02 · Expertise
//           </p>
//           <h2 className="text-3xl font-semibold text-slate-50 sm:text-4xl md:text-5xl leading-tight">
//             The stack I use to ship <br className="hidden md:block" />
//             <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
//               premium products.
//             </span>
//           </h2>
//         </div>

//         {/* The Component */}
//         <MorphingCardStack 
//           cards={skillsData} 
//           defaultLayout="stack" 
//         />
//       </div>
//     </section>
//   );
// };

// export default Skills;

import { MorphingCardStack } from "./ui/MorphingCardStack";
import {
  Database,
  Layout,
  Server,
  Boxes,
  GitBranch,
  Bot,
} from "lucide-react";

// Skills Data
const skillsData = [
  {
    id: "core",
    title: "Core Stack",
    badge: "MERN",
    icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg",
    tags: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    description:
      "Building full-stack applications with the MERN stack using scalable backend architecture.",
    footer: "Full-Stack MERN Development",
  },
  {
    id: "frontend",
    title: "Frontend & Design",
    badge: "UI / UX",
    icon: <Layout className="h-5 w-5 md:h-6 md:w-6" />,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    tags: ["Tailwind CSS", "Bootstrap", "Figma", "Canva"],
    description:
      "Translating UI designs into pixel-perfect responsive interfaces.",
    footer: "Responsive Design Implementation",
  },
  {
    id: "backend",
    title: "Backend & Security",
    badge: "API",
    icon: <Server className="h-5 w-5 md:h-6 md:w-6" />,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    tags: ["REST APIs", "JWT", "Node.js", "Express"],
    description:
      "Designing secure REST APIs with authentication and authorization.",
    footer: "Secure API Architecture",
  },
  {
    id: "creative",
    title: "Creative & 3D",
    badge: "INTERACTIVE",
    icon: <Boxes className="h-5 w-5 md:h-6 md:w-6" />,
    image: "https://threejs.org/files/favicon.ico",
    tags: ["Three.js", "React", "3D Web", "Interactive UI"],
    description:
      "Building immersive 3D web experiences using Three.js.",
    footer: "Immersive Web Experiences",
  },
  {
    id: "deployment",
    title: "Deployment",
    badge: "DEVOPS",
    icon: <GitBranch className="h-5 w-5 md:h-6 md:w-6" />,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    tags: ["Git", "Vercel", "Render", "Cloudinary"],
    description:
      "Managing deployments, CI/CD pipelines, and cloud assets.",
    footer: "Streamlined Deployment Pipelines",
  },
  {
    id: "ai",
    title: "AI & Integrations",
    badge: "MODERN TECH",
    icon: <Bot className="h-5 w-5 md:h-6 md:w-6" />,
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    tags: ["Agentic AI", "Payment Integration", "API Integration"],
    description:
      "Integrating AI workflows and modern third-party services.",
    footer: "Smart Integrations & AI",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-24 md:px-10 lg:px-20 bg-black"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-4">
            02 · Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-50">
            The stack I use to ship{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
              premium products
            </span>
          </h2>
        </div>

        <MorphingCardStack cards={skillsData} defaultLayout="stack" />
      </div>
    </section>
  );
};

export default Skills;
