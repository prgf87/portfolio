'use client';
import React from 'react';
import { motion } from 'framer-motion';
import ExpCard from './ExpCard';
export default function WorkExperience() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden justify-evenly item md:flex-row px-20 mx-auto max-w-full items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[8px] md:pl-0 text-gray-400 text-3xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExpCard />
        <ExpCard />
        <ExpCard />
      </div>
    </motion.div>
  );
}
