'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';

export default function Skills({ skills }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="min-h-screen relative flex flex-col text-center md:text-left xl:flex-row max-w-7xl xl:px-10 justify-center items-center mx-auto xl:space-y-0"
    >
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-500 text-3xl">
        Skills
      </h3>
      <h4 className="absolute top-40 uppercase tracking-[4px] text-gray-500 text-sm">
        Hover over a skill
      </h4>
      <div className="grid grid-cols-4 gap-1 xl:gap-2 xl:pt-20 mt-20">
        {skills.slice(0, 8).map((skill) => {
          return <Skill key={skill._id} skill={skill} />;
        })}
        {skills.slice(8, 16).map((skill) => {
          return <Skill key={skill._id} skill={skill} directionLeft={true} />;
        })}
      </div>
    </motion.div>
  );
}
