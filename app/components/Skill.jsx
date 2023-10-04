'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function Skill({ directionLeft }) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -100 : 100, opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        alt="Current company logo"
        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover object-center filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-32 md:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-semibold text-black opacity-100">100%</p>
        </div>
      </div>
    </div>
  );
}
