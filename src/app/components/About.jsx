'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '../../sanity/lib/image';

export default function About({ pageInfo }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-2 sm:px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="hidden sm:block absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-500 text-3xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={urlFor(pageInfo.profileImage).url()}
        alt="A photograph of Pedro Ferreira wearing sunglasses and smiling, set against a backdrop of Porto, in Portugal"
        className="-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] mt-10 md:mt-0 "
      />
      <div className="space-y-4 px-2 md:pl-10 xl:pr-40 text-lg">
        <h4 className="text-center md:text-left text-lg pt-4 sm:text-4xl">
          {pageInfo.backgroundTitle}
        </h4>
        <p className="text-xs sm:text-base lg:text-lg text-center md:text-left leading-[15px]">
          {pageInfo.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
}
