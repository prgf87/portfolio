/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/client';

export default function Footer({ pageInfo }) {
  return (
    <div className="sticky bottom-5 w- full cursor-pointer">
      <div className="flex items-center justify-center">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 3 }}
          src={urlFor(pageInfo.heroImage).url()}
          alt="Photograph of the designer of this website"
          className="h-10 w-10 rounded-full object-cover filter grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
}
