'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Background from './Background';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's Pedro Ferreira",
      'code-crafter.jsx',
      '<SoftwareEngineer />',
    ],
    loop: 0,
    delaySpeed: 2500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <Background />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 0.8, 1] }}
        transition={{ duration: 5 }}
        className="absolute"
      >
        <Image
          src={'/profile-pic.jpg'}
          alt="/"
          width={800}
          height={800}
          className="rounded-full relative h-32 w-32 mx-auto border-2 border-white/20"
        />
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#eee" />
        </h1>
      </motion.div>
    </div>
  );
}
