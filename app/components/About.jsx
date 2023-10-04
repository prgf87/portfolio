'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-500 text-3xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="pic1.jpg"
        alt="A photograph of Pedro Ferreira wearing sunglasses and smiling, set against a backdrop of Porto, in Portugal"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] mt-14 md:mt-0 "
      />
      <div className="space-y-4 px-2 md:pl-10 md:pr-40 text-lg">
        <h4 className="text-4xl">Stay a while, and listen...</h4>
        <p>
          From a young age, I&apos;ve always had an interest in computer
          technology. Navigating MS-DOS to install and play games, later
          leveraging Microsoft 3.1 to use the amazing Encarta 95 and surfing the
          web. This sparked a life-long interest in computer and other emerging
          technologies. I have dedicated the past two years of my life to
          learning programming, the software development lifecycle and software
          design principles to guide my approach to building and designing new
          software systems. I am currently looking for a challenge to sink my
          teeth into. You can get in touch with me by using the form on this
          site, or by sending me an{' '}
          <a href="mailto:prgf2011@gmail.com">
            <span className="text-blue-200 underline">email</span>.
          </a>
        </p>
      </div>
    </motion.div>
  );
}
