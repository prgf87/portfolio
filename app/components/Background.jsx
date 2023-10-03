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
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.5,
        // repeat: Infinity,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-slate-500 rounded-full h-[200px] w-[200px] animate-ping mt-52" />
      <div className="border border-slate-500 rounded-full h-[300px] w-[300px] absolute mt-52 animate-pulse" />
      <div className="border border-slate-500 rounded-full h-[500px] w-[500px] absolute mt-52 animate-pulse" />

      <div className="border border-slate-200 rounded-full opacity-20 h-[650px] w-[650px] animate-pulse duration-500 absolute mt-52" />
      <div className="border border-slate-500 rounded-full h-[800px] w-[800px] absolute mt-52 animate-pulse duration-500" />
      <div />
    </motion.div>
  );
}
