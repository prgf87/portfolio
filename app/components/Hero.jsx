'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/client';
import BackgroundCircles from './BackgroundCircles';

export default function Hero({ pageInfo }) {
  const { role, heroImage } = pageInfo;
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden top-0">
      <BackgroundCircles />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0.8, 1] }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="z-[2]"
      >
        <div className="relative bottom-[25px]">
          <Image
            src={urlFor(heroImage).url()}
            alt="/"
            width={800}
            height={800}
            className="rounded-full relative h-48 w-48 mx-auto border-2 border-gray-400/20"
          />
          <h2 className="text-sm sm:text-base uppercase text-gray-400 pt-4 tracking-[10px] sm:tracking-[15px]">
            {role}
          </h2>
          <div className="grid grid-cols-2 mx-auto pt-4 sm:flex sm:space-x-2">
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
