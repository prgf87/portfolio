import React from 'react';
import { motion } from 'framer-motion';

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [0, 1, 2, 0.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.5, 0.3, 0.6],
        borderRadius: ['10%', '100%', '50%', '80%', '100%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-slate-500 rounded-full h-[150px] w-[150px] mt-52 animate-ping" />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [1, 2, 3, 4, 1],
          opacity: [0.1, 0.5, 1],

          borderRadius: ['10%', '100%', '50%', '80%', '100%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute border border-slate-500 rounded-full h-[300px] w-[300px] mt-52 animate-pulse opacity-80"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [1, 2, 3, 4, 1],
          opacity: [0.1, 0.5, 1],

          borderRadius: ['10%', '100%', '50%', '80%', '100%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute border border-slate-500 rounded-full h-[450px] w-[450px] mt-52 animate-pulse opacity-60"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [1, 2, 3, 4, 1],
          opacity: [0.1, 0.5, 1],

          borderRadius: ['10%', '100%', '50%', '80%', '100%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute border border-slate-500 rounded-full h-[600px] w-[600px] mt-52 animate-pulse opacity-80"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [1, 2, 3, 4, 1],
          opacity: [0.1, 0.5, 1],

          borderRadius: ['10%', '100%', '50%', '80%', '100%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute border border-slate-500 rounded-full h-[750px] w-[750px] mt-52 opacity-60"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [1, 2, 3, 2, 1],
          opacity: [0.1, 0.5, 1],

          borderRadius: ['10%', '100%', '30%', '50%', '100%'],
        }}
        transition={{
          duration: 2.5,
        }}
        className="absolute border border-slate-500 rounded-full h-[900px] w-[900px] mt-52 opacity-60"
      />
      <div />
      <div />
    </motion.div>
  );
}

export default BackgroundCircles;
