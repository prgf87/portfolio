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
    <article className="flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[900px] snap-center bg-slate-800 p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 max-h-[550px]">
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
        <h4 className="text-2xl font-extralight">{jobTitle}</h4>
        <p className="font-semibold text-2xl mt-1">{company}</p>
        <div className="flex space-x-2 my-2 ">
          {technologies.map((tech) => {
            return (
              <img
                key={tech._id}
                src={urlFor(tech.image).url()}
                alt="/"
                className="h-8 w-8 rounded-full"
              />
            );
          })}
          {/* <img
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
          /> */}
        </div>
        <p className="uppercase py-4 text-gray-500">
          Started {dateStarted} -{' '}
          {!dateEnded ? 'Still working here' : `Ended ${dateEnded}`}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-xs">
          {points.map((point) => {
            return <li key={point}>{point}</li>;
          })}
          {/* <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li>
          <li>Some information</li> */}
        </ul>
      </div>
    </article>
  );
}
