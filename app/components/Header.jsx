'use client';

import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Header({ socials }) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.section
        className="flex flex-row items-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {socials.map((social) => {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              fgColor="gray"
              bgColor="transparent"
            />
          );
        })}
      </motion.section>
      <Link href="#contact">
        <motion.section
          className="flex flex-row items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* <p className="uppercase md:hidden inline-flex text-base text-gray-500">
          Get in Touch
        </p> */}
          <EnvelopeIcon
            className="cursor-pointer h-6 w-6 text-gray-500 mr-2"
            network="email"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-500">
            Get in Touch
          </p>
        </motion.section>
      </Link>
    </header>
  );
}
