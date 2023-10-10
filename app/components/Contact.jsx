'use client';
import React, { useEffect } from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';

const reCaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const [captcha, setCaptcha] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // const [validEmail, setValidEmail] = useState(false);
  // const [validName, setValidName] = useState(false);
  // const [validForm, setValidForm] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  // const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  // const nameRegex = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/gm;

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // if (!validEmail || !validName) {
    //   alert('Please provide a valid name and email address.');
    //   setLoading(false);
    //   return;
    // } else {
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message,
          // validation: validForm,
        }),
      });

      if (response.status === 200) {
        setSentEmail(true);
        alert('Message sent, thanks for getting in touch.');
      } else {
        const errorResponse = await response.json();
        alert(
          errorResponse.message || 'Something went wrong, please try again.'
        );
      }
    } catch (err) {
      console.error(err);
      alert('Sorry, something went wrong, please try again.');
    } finally {
      setLoading(false);
    }
    // }
  };

  // if (validEmail && validName) setValidForm(true);

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
            Please submit this form to contact me directly
          </p>
          <div className="flex space-x-2">
            <input
              placeholder="Name"
              value={name}
              className="contact-input"
              type="text"
              required
              onChange={(e) => {
                setName(e.target.value);
                // setValidName(nameRegex.test(name));
              }}
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
              onChange={(e) => {
                setEmail(e.target.value);
                // setValidEmail(emailRegex.test(email));
              }}
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
            disabled={!captcha || sentEmail ? true : false}
          >
            {loading ? <LoadingSpinner /> : 'Submit'}
          </button>
          <ReCAPTCHA
            sitekey={reCaptchaKey}
            onChange={(e) => {
              if (e !== undefined || e.length !== 0 || e !== null)
                setCaptcha(true);
            }}
            className="flex justify-center items-center"
          />
        </form>
      </div>
    </div>
  );
}
