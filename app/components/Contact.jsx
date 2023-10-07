'use client';
import React from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
// import { useForm } from 'react-hook-form';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const reCaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default function Contact() {
  const [captcha, setCaptcha] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [validForm, setValidForm] = useState(false);
  console.log(name, email, subject, message);
  const data = { name, email, subject, message };

  const submitHandler = async () => {
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/josn, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Fetch: ', res);
      if (res.status === 200)
        alert('Message sent, thanks for getting in touch.');
      // else alert('Something went wrong, please try again.');
    });
  };

  return (
    <div className="h-screen w-screen flex relative flex-col text-center md:text-left md:flex-row px-18 justify-evenly mx-auto items-center">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-500 text-3xl">
        Contact me
      </h3>
      <div className="space-y-10 flex flex-col mt-10">
        <h4 className="text-3xl font-semibold text-center">
          I am open to new opportunities.
          <br />
          <span className="underline decoration-green-500/50">
            Get in touch
          </span>
        </h4>
        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-8 w-8" />
            <p className="text-2xl">+44 7472 097 891</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-8 w-8" />
            <p className="text-2xl">prgf2011 [at] gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-8 w-8" />
            <p className="text-2xl">Kent - UK</p>
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              value={name}
              className="contact-input"
              type="text"
              required
              min={10}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="Email"
              value={email}
              className="contact-input"
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <input
            placeholder="Subject"
            value={subject}
            className="contact-input"
            type="text"
            required
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            className="contact-input"
            required
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            className={captcha || validForm ? `btn2` : `btn2-dis`}
            // disabled={!captcha}
          >
            Submit
          </button>
          <ReCAPTCHA
            sitekey={reCaptchaKey}
            onChange={setCaptcha}
            className="flex justify-center items-center"
          />
        </form>
      </div>
    </div>
  );
}
