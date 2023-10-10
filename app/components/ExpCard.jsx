/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { urlFor } from '@/sanity/lib/client';

export default function ExpCard({ exp }) {
  const {
    company,
    companyImage,
    dateStarted,
    dateEnded,
    jobTitle,
    points,
    technologies,
  } = exp;
  return (
    <article className="flex flex-col overflow-hidden rounded-lg items-center space-y-4 flex-shrink-0 w-full md:w-[600px] xl:w-[1200px] snap-center bg-slate-800/70 p-4 sm:p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 max-h-[550px]">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        src={urlFor(companyImage).url()}
        alt={`The ${company} company logo`}
        className="w-20 h-20 rounded-full md:w-[100px] md:h-[100px] object-cover object-center"
      />
      <div className="px-0 md:px-20">
        <h4 className="text-2xl font-extralight text-center">{jobTitle}</h4>
        <p className="font-semibold text-2xl mt-1 text-center">{company}</p>
        <div className="flex space-x-2 my-2 justify-center">
          {technologies.slice(0, 7).map((tech) => {
            return (
              <img
                key={tech._id}
                src={urlFor(tech.image).url()}
                alt="/"
                className="h-8 w-8 rounded-full object-center p-1"
              />
            );
          })}
        </div>
        <p className="uppercase pb-2 text-gray-500 text-center">
          Started {dateStarted} -{' '}
          {!dateEnded ? 'Still working here' : `Ended ${dateEnded}`}
        </p>
        <ul className="space-y-2 ml-5 text-xs xl:text-base">
          {points.slice(0, 6).map((point) => {
            return <li key={point}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
