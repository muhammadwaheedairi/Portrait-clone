'use client';

import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const MotionDiv = motion.div as any;

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-hero-glow opacity-60 blur-3xl -z-10 rounded-b-[50%] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        {/* Top Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href="#" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/50 border border-gray-200 text-xs font-medium text-gray-600 hover:bg-white transition-colors backdrop-blur-sm">
            Portrait launches Public Testnet <ArrowRight size={12} />
          </a>
          <a href="#" className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/50 border border-gray-200 text-xs font-medium text-gray-600 hover:bg-white transition-colors backdrop-blur-sm">
            <Play size={10} fill="currentColor" /> Discover Portrait in 90s
          </a>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6">
          Your <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 pr-2">forever</span> space for<br />
          everything you are.
        </h1>

        {/* Subhead */}
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          More than a link—a decentralized canvas to share<br className="hidden md:block" />
          your story, your work, and your life—in minutes.
        </p>

        {/* Input Action */}
        <div className="relative max-w-md mx-auto mb-20 group">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-pink-300 to-purple-300 rounded-full blur opacity-25 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative flex items-center bg-white rounded-full border border-gray-200 shadow-lg p-1.5 pl-6 focus-within:border-purple-300 focus-within:ring-4 focus-within:ring-purple-100 transition-all">
            <span className="text-gray-400 text-lg md:text-xl select-none font-medium tracking-tight">portrait.so/</span>
            <input 
              type="text" 
              placeholder="john" 
              className="flex-1 bg-transparent border-none outline-none text-lg md:text-xl text-gray-900 placeholder-gray-300 font-medium ml-0.5 w-24 ring-0 focus:ring-0"
            />
            <button className="bg-white text-gray-900 border-2 border-transparent bg-clip-padding relative px-5 py-2 rounded-full text-sm font-bold hover:opacity-90 transition-opacity overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 -z-10"></div>
              <div className="absolute inset-[2px] bg-white rounded-full -z-0"></div>
              <span className="relative z-10">Sign up</span>
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500 font-medium">
            <a href="#" className="underline decoration-gray-300 hover:text-gray-800">Already have a Portrait? Login</a>
          </div>
        </div>
      </div>

      {/* Floating Cards (Visual Only) */}
      <div className="absolute top-1/4 left-[5%] hidden xl:block pointer-events-none">
        <MotionDiv 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="w-48 h-64 bg-white rounded-2xl shadow-xl p-2 rotate-[-6deg]"
        >
          <img src="https://picsum.photos/300/400?random=1" alt="User" className="w-full h-full object-cover rounded-xl" loading="lazy" />
        </MotionDiv>
      </div>
      
      <div className="absolute bottom-1/4 left-[12%] hidden xl:block pointer-events-none">
        <MotionDiv 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="w-40 h-40 bg-white rounded-2xl shadow-lg p-2 rotate-[12deg]"
        >
          <img src="https://picsum.photos/300/300?random=2" alt="User" className="w-full h-full object-cover rounded-xl" loading="lazy" />
        </MotionDiv>
      </div>

      <div className="absolute top-1/3 right-[8%] hidden xl:block pointer-events-none">
        <MotionDiv 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-64 bg-white rounded-2xl shadow-2xl p-3 rotate-[4deg]"
        >
           <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-orange-100"></div>
              <div className="h-2 w-24 bg-gray-100 rounded"></div>
           </div>
           <div className="space-y-2">
             <div className="h-24 bg-gray-50 rounded-lg mb-2"></div>
             <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
             <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
           </div>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Hero;