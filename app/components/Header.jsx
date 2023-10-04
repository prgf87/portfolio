'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.section
        className="flex flex-row items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/prgf87/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/prgf87"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.section>
      <motion.section
        className="flex flex-row items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* <p className="uppercase md:hidden inline-flex text-base text-gray-400">
          Get in Touch
        </p> */}
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-base text-gray-400">
          Get in Touch
        </p>
      </motion.section>
    </header>
  );
}
