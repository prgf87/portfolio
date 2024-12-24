/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { urlFor } from '../../sanity/lib/image';
import Skill from './Skill';

export default function Projects({ projects }) {
  return (
    <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] md:pl-0 text-gray-500 text-3xl">
        Projects
      </h3>
      <div className="w-full overflow-hidden flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-100 z-20 mt-10">
        {projects.map((p, i) => {
          return (
            <div
              className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-full snap-center  sm:mt-10 pt-10 transition-opacity duration-200 max-h-[600px] z-20"
              key={p._id}
            >
              <Link
                href={p.linkToBuild}
                className="m-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.img
                  initial={{ y: -50, opacity: 0 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  src={urlFor(p.image).url()}
                  alt="/"
                  className="max-w-full max-h-[200px] sm:max-h-[300px]  object-cover"
                />
              </Link>
              <div className="space-y-4 text-center px-0 md:px-10 max-w-6xl">
                <h4 className="text-2xl mt-4 font-semibold">
                  <span>
                    Case Study {i + 1} of {projects.length}:
                  </span>{' '}
                  <Link
                    href={'https://www.webuyanygold.com'}
                    className="underline decoration-[#eee]/60 hover:text-gray-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.title}{' '}
                  </Link>
                </h4>
                <p className="text-xs sm:text-base px-4 sm:px-10">
                  {p.summary}
                </p>
              </div>
              <div className={`flex flex-row px-8 gap-1 scale-75`}>
                {p.technologies.slice(0, 8).map((skill) => {
                  return <Skill key={skill._id} skill={skill} />;
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[27%] bg-green-800/20 left-0 h-[500px] -skew-y-12 z-0" />
    </div>
  );
}
