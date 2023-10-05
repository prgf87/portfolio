'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import Background from './Background';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      'Hi, my name is Pedro Ferreira',
      'GuyWhoLovesCoffee.jsx',
      '<ButLovesCodingMore />',
    ],
    loop: 0,
    delaySpeed: 2500,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden top-0">
      <Background />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.8, 1] }}
        transition={{ duration: 1.5, delay: 2 }}
        className="z-[2]"
      >
        <div className="relative bottom-44">
          <Image
            src={'/profile-pic.jpg'}
            alt="/"
            width={800}
            height={800}
            className="rounded-full relative h-32 w-32 mx-auto border-2 border-white/20"
          />
          <h2 className="uppercase text-gray-400 pb-2 tracking-[15px]">
            Software engineer
          </h2>
          {/* <h1 className="text-3xl lg:text-4xl">
            <span>{text}</span>
            <Cursor cursorColor="#eee" />
          </h1> */}
          <div className="pt-5">
            <Link href="#about" className="btn">
              About
            </Link>
            <Link href="#experience" className="btn">
              Experience
            </Link>
            <Link href="#skills" className="btn">
              Skills
            </Link>
            <Link href="#projects" className="btn">
              Projects
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
