import React from 'react';
import { motion } from 'framer-motion';

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1.5, 1],
        opacity: [0.1, 0.2, 0.4, 0.5, 0.3, 0.6],
        borderRadius: '100%',
      }}
      transition={{
        duration: 0.3,
      }}
      className="relative flex justify-center items-center"
    >
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: [0, 0, 0.1, 0.6],
          borderRadius: '100%',
        }}
        transition={{
          delay: 0.7,
          duration: 0.8,
        }}
        className="absolute border border-slate-500 rounded-full h-[150px] w-[150px] mt-52 animate-ping"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [3, 4, 1],
          opacity: [0.1, 0.2, 1],
          borderRadius: '100%',
        }}
        transition={{
          duration: 1,
        }}
        className="absolute border border-slate-500/30 rounded-full h-[300px] w-[300px] mt-52 opacity-20"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [3, 4, 1],
          opacity: [0.1, 0.2, 1],

          borderRadius: '100%',
        }}
        transition={{
          duration: 1,
        }}
        className="absolute border border-slate-500/40 rounded-full h-[450px] w-[450px] mt-52 opacity-60"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [3, 4, 1],
          opacity: [0.1, 0.2, 1],

          borderRadius: '100%',
        }}
        transition={{
          duration: 1,
        }}
        className="absolute border border-slate-500/50 rounded-full h-[600px] w-[600px] mt-52 animate-pulse"
      />
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          scale: [3, 4, 1],
          opacity: [0.1, 0.2, 0.3],

          borderRadius: '100%',
        }}
        transition={{
          duration: 1,
        }}
        className="absolute border border-slate-500 rounded-full h-[750px] w-[750px] mt-52"
      />
    </motion.div>
  );
}

export default BackgroundCircles;
