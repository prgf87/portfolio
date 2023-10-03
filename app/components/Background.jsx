import React from 'react';
import { motion } from 'framer-motion';

export default function Background() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.4, 0.1, 1],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="border border-slate-500 rounded-full h-[200px] w-[200px] animate-ping" />
      <div className="border border-slate-500 rounded-full h-[300px] w-[300px] absolute" />
      <div className="border border-slate-500 rounded-full h-[500px] w-[500px] absolute" />

      <div className="border border-slate-200 rounded-full opacity-20 h-[650px] w-[650px] animate-pulse absolute" />
      <div className="border border-slate-500 rounded-full h-[800px] w-[800px] absolute" />
      <div />
    </motion.div>
  );
}
