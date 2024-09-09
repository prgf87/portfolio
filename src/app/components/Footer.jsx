/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../sanity/lib/image';

export default function Footer({ pageInfo }) {
  return (
    <div className="flex justify-center items-center">
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 3 }}
        src={urlFor(pageInfo.heroImage).url()}
        alt="Photograph of the designer of this website"
        className="object-cover filter grayscale hover:grayscale-0 cursor-pointer h-8 w-8 sm:h-12 sm:w-12 rounded-full"
      />
    </div>
  );
}
