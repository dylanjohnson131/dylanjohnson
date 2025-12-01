"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Parallax Background */}
        <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
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
        <section className="min-h-screen bg-slate-800 py-20 px-4 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl"
          >
            <h2 className="text-5xl font-bold text-slate-900 mb-8">About Me</h2>

            <p className="text-lg text-slate-300 leading-relaxed">
              I spent five years running my own barbering business, which taught
              me that communication is everything. Now I'm bringing that same
              mindset to software development, where understanding what people
              actually need is just as important as writing code. After
              graduating from Nashville Software School, I joined Code Campfire
              where I've been collaborating with other developers on real
              projects. I recently built NextUp, a youth football management
              platform, because I wanted to create something at the intersection
              of sports and technology. Now I'm looking to join a team where I
              can continue to contribute and grow as a developer.
            </p>
          </motion.div>
        </section>

      {/* Projects Section - Fades in on scroll */}
      <section className="min-h-screen bg-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
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
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">NextUp</h3>
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
            </motion.div>

            {/* Project Card 2 - AniDex */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AniDex</h3>
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
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
