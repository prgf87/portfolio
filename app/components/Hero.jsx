'use client';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, my name's Pedro Ferreira",
      'coffee-drinker.jsx',
      '<WithAPurpose />',
    ],
    loop: 0,
    delaySpeed: 2500,
  });
  return (
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#eee" />
      </h1>
    </div>
  );
}
