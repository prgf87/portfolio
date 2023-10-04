'use client';
import React from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';

export default function Contact() {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row px-18 justify-evenly mx-auto items-center">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-500 text-3xl">
        About
      </h3>
      <div className="space-y-10 flex flex-col">
        <h4 className="text-3xl font-semibold text-center">
          I am open to new opportunities.
          <br />
          <span className="underline decoration-green-500/50">
            Get in touch
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-8 w-8" />
            <p className="text-2xl">+44 7472 097 891</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-8 w-8" />
            <p className="text-2xl">prgf2011[at]gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-8 w-8" />
            <p className="text-2xl">Kent - UK</p>
          </div>
        </div>
      </div>
    </div>
  );
}