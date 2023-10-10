/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/client';
import Link from 'next/link';

export default function Projects({ projects }) {
  return (
    <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] md:pl-0 text-gray-500 text-3xl">
        Projects
      </h3>
      <div className="w-full overflow-hidden flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-100 z-20 mt-24">
        {projects.map((p, i) => {
          return (
            <div
              className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-screen snap-center bg-slate-800 sm:mt-10 pt-10 cursor-pointer transition-opacity duration-200 max-h-[550px] z-20"
              key={p._id}
            >
              <Link href={p.linkToBuild} className="m-0">
                <motion.img
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src={urlFor(p.image).url()}
                  alt="/"
                  className="max-w-full max-h-[200px] sm:max-h-[300px] lg:max-h-[400px] object-cover"
                />
              </Link>
              <div className="space-y-4 text-center px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl mt-4 font-semibold">
                  <span className="underline decoration-[#eee]/60">
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  {p.title}{' '}
                </h4>
                <p className="text-xs sm:text-base px-4 sm:px-10">
                  {p.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[27%] bg-green-800/20 left-0 h-[500px] -skew-y-12 z-0" />
    </div>
  );
}
