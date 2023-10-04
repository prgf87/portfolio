'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ExpCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-slate-800 p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden max-h-[550px]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src="/nc-logo.jpeg"
        alt="Current company logo"
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />
      <div className="px-0 md:px-20">
        <h4 className="text-3xl font-extralight">Trainee Software Engineer</h4>
        <p className="font-semibold text-2xl mt-1">Northcoders</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="/"
            className="h-10 w-10 rounded-full"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="/"
            className="h-10 w-10 rounded-full"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="/"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-4 text-gray-500">Started... - Ended...</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
        </ul>
      </div>
    </article>
  );
}
