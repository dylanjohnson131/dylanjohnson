"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  {
    name: "CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "C#",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  { name: ".NET", icon: "https://cdn.simpleicons.org/dotnet" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel" },
  { name: "Vite", icon: "https://cdn.simpleicons.org/vite" },
  {
    name: "VS Code",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  {
    name: "Canva",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
  },
  { name: "Claude", icon: "https://cdn.simpleicons.org/anthropic" },
];

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Reduced parallax speeds - much more subtle
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="overflow-hidden">
      {/* Fixed Contact Sidebar - Desktop Only */}
      <div className="hidden lg:block fixed left-0 top-0 h-screen z-50">
        <div className="bg-slate-800/80 backdrop-blur-sm h-full w-24 flex flex-col items-center justify-center shadow-2xl border-r border-slate-700/50 px-6">
          <div className="flex flex-col gap-20">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/dylanjohnson100"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/dylanjohnson131"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>

            {/* Email */}
            <a
              href="mailto:dylanjohnson263@gmail.com"
              className="group relative"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                alt="Email"
                className="w-8 h-8 hover:scale-110 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="lg:ml-24">
        {/* Hero Section with Parallax */}
        <section className="relative h-screen flex items-center justify-center">
          {/* Parallax Background */}
          <motion.div
            style={{ y: backgroundY }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-700/20 via-slate-900/20 to-slate-900/0" />
          </motion.div>

          {/* Hero Content */}
          <motion.div
            style={{ y: textY }}
            className="relative z-10 text-center px-4"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6"
            >
              Dylan Johnson
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-300 mb-8"
            >
              Full-Stack Developer
            </motion.p>

            {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-slate-300 max-w-2xl mx-auto"
          >
          building scalable web apps with React, Next.js, .NET
          </motion.p> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-slate-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="min-h-screen bg-slate-800 py-20 px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-6xl w-full grid grid-cols-2 gap-8 items-center
            bg-slate-700 p-10 rounded-xl shadow-2xl"
          >
            <div>
              <h2 className="text-5xl font-bold text-white mb-8">
                About Me
              </h2>

              <p className="text-lg text-slate-300 leading-relaxed">
                I spent the past five years running my own barbering business, which
                taught me that communication is everything. Now I'm bringing
                that same mindset to software development, where understanding
                what people actually need is just as important as writing code.
                I recently built NextUp, a software solution at the intersection 
                of sports and technology to manage sports and technology efficiently. 
                Now I'm looking to join a team where I can continue to contribute and 
                grow as a developer.
              </p>
              </div>

              <div className="justify-self-end">
              <Image
                src="/DylanJohnson.svg"
                alt="DylanJohnson"
                width={400}
                height={300}
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </motion.div>
        </section>

        {/* Projects Section - Fades in on scroll */}
        <section className="min-h-screen bg-slate-700 py-20 px-8">
          <div className="max-w-6xl">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-5xl font-bold text-slate-900 mb-16 text-center"
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Project Card 1 - NextUp */}
              <motion.a
                href="https://github.com/dylanjohnson131/NextUp-Frontend"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-slate-400 rounded-2xl p-8 hover:shadow-xl transition-shadow block cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  NextUp
                </h3>
                <p className="text-slate-600 mb-4">
                  Youth football management platform with JWT authentication and
                  role-based access control
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    PostgreSQL
                  </span>
                </div>
              </motion.a>

              {/* Project Card 2 - AniDex */}
              <motion.a
                href="https://github.com/dylanjohnson131/AniDex-FrontEnd-Capstone-Project"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className="bg-slate-400 rounded-2xl p-8 hover:shadow-xl transition-shadow block cursor-pointer hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AniDex
                </h3>

                <p className="text-slate-600 mb-4">
                  Wildlife tracking application for conservation efforts with
                  real-time data management
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    React
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    C#
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    .NET
                  </span>
                </div>
              </motion.a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="min-h-screen bg-slate-800 py-20 px-8 flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl font-bold text-slate-900 mb-16"
          >
            Skills
          </motion.h2>

          {/* Carousel Container */}
          <div className="w-full overflow-x-hidden overflow-y-visible relative pb-12">
            <motion.div
              className="flex gap-8"
              animate={{
                x: [0, -100 * skills.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicate skills array for seamless loop */}
              {[...skills, ...skills].map((skill, index) => (
                <div key={index} className="flex-shrink-0 group relative">
                  {/* Logo */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-16 h-16 object-contain"
                  />

                  {/* Tooltip - Shows on hover */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className="text-sm text-slate-300 bg-slate-900 px-3 py-1 rounded">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 py-20 px-8 flex flex-col items-center justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl font-bold text-white mb-16 text-center"
          >
            Let's Connect!
          </motion.h2>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl w-full mb-12">
            {/* Email Card */}
            <motion.a
              href="mailto:dylanjohnson263@gmail.com"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all hover:scale-105 flex flex-col items-center text-center group"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
                alt="Email"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300 text-sm group-hover:text-blue-300 transition-colors">
                dylanjohnson263@gmail.com
              </p>
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              href="https://github.com/dylanjohnson131"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all hover:scale-105 flex flex-col items-center text-center group"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                alt="GitHub"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-300 text-sm group-hover:text-blue-300 transition-colors">
                github.com/dylanjohnson131
              </p>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://linkedin.com/in/dylanjohnson100"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all hover:scale-105 flex flex-col items-center text-center group"
            >
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                className="w-12 h-12 mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
              <p className="text-slate-300 text-sm group-hover:text-blue-300 transition-colors">
                linkedin.com/in/dylanjohnson100
              </p>
            </motion.a>
          </div>
        </section>
      </div>
    </div>
  );
}
