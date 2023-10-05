/* eslint-disable @next/next/no-img-element */
import React from 'react';

export default function Footer() {
  return (
    <div className="sticky bottom-5 w- full cursor-pointer">
      <div className="flex items-center justify-center">
        <img
          src="/profile-pic.jpg"
          alt="Photograph of the designer of this website"
          className="h-10 w-10 rounded-full object-cover filter grayscale hover:grayscale-0"
        />
      </div>
    </div>
  );
}
