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
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';

const reCaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const [captcha, setCaptcha] = useState(null);
  const [name, setName] = useState('Test User');
  const [email, setEmail] = useState('test@email.com');
  const [subject, setSubject] = useState('Subject');
  const [message, setMessage] = useState('This is the message');
  const [validForm, setValidForm] = useState(false);
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!validForm) {
        alert('Sorry, something went wrong, please try again.');
        setLoading(false);
        return;
      }
      await fetch('/api/mail', {
        method: 'POST',
        headers: {
          Accept: 'application/josn, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
          validation: validForm,
        }),
      }).then((res) => {
        if (res.status === 200) {
          alert('Message sent, thanks for getting in touch.');
          setLoading(false);
        } else {
          alert('Something went wrong, please try again.');
          setLoading(false);
        }
      });
    } catch (err) {
      console.log(err, 'ERRROR##########');
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex relative flex-col text-center md:text-left md:flex-row px-18 justify-evenly mx-auto items-center">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px] pl-4 md:pl-0 text-gray-500 text-3xl">
        Contact me
      </h3>
      <div className="space-y-6 flex flex-col mt-10">
        <h4 className="text-4xl font-semibold text-center">
          Lend me your ear..
        </h4>

        <div className="space-y-4">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="h-8 w-8" />
            <Link href="tel:+44 7472 097 891">
              <p className="text-2xl">+44 7472 097 891</p>
            </Link>
          </div>
          <div className="flex items-center space-x-4 justify-center">
            <EnvelopeIcon className="h-8 w-8" />
            <Link href="mailto:prgf2011@gmail.com">
              <p className="text-2xl">prgf2011 [at] gmail.com</p>
            </Link>
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
          <p className="text-center text-xl pb-4">
            Please submit this form to contact me
          </p>
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              value={name}
              className="contact-input"
              type="text"
              required
              onChange={(e) => setName(e.target.value)}
            />

            <input
              placeholder="Email"
              value={email}
              className="contact-input"
              type="email"
              required
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
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
            className={!captcha ? `btn2-dis` : `btn2`}
            disabled={!captcha}
          >
            {loading ? <LoadingSpinner /> : 'Submit'}
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
