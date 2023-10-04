import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['10%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-slate-500 rounded-full h-[200px] w-[200px] animate-ping mt-52 duration-200" />
      <div className="border border-slate-500 rounded-full h-[250px] w-[250px] absolute mt-52 animate-pulse duration-200" />
      <div className="border border-slate-500 rounded-full h-[400px] w-[400px] absolute mt-52 animate-pulse duration-300" />
      <div className="border border-slate-500 rounded-full h-[600px] w-[600px] absolute mt-52 animate-pulse duration-400" />

      <div className="border border-slate-200 rounded-full opacity-20 h-[750px] w-[750px] animate-pulse duration-500 absolute mt-52" />
      <div className="border border-slate-500 rounded-full h-[900px] w-[900px] absolute mt-52 animate-pulse duration-600" />
      <div />
    </motion.div>
  );
}
