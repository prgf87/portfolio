'use client';
import React from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useForm } from 'react-hook-form';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { verifyCaptcha } from '@/utils/ServerActions';

const reCaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const [captcha, setCaptcha] = useState(null);
  const {
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('/api/mail', {
      method: 'POST',
      headers: {
        Accept: 'application/josn, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }),
    }).then((res) => {
      console.log('Fetch: ', res);
      if (res.status === 200) alert('Message sent!');
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
        <div className="space-y-10">
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
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              className="contact-input"
              type="text"
              required
            />
            <input
              placeholder="Email"
              className="contact-input"
              type="email"
              required
            />
          </div>
          <input
            placeholder="Subject"
            className="contact-input"
            type="text"
            required
          />
          <textarea placeholder="Message" className="contact-input" required />

          <button className={captcha ? `btn2` : `btn2-dis`} disabled={!captcha}>
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
