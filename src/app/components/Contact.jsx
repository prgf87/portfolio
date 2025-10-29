'use client';
import React from 'react';
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import LoadingSpinner from './LoadingSpinner';

const reCaptchaKey = process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY;

export default function Contact() {
  const [captcha, setCaptcha] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        }),
      });

      if (response.status === 200) {
        setLoading(false);
        setSentEmail(true);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        const errorResponse = await response.json();
        throw new Error(
          errorResponse.message || 'Something went wrong, please try again.'
        );
      }
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };

  return (
    <div className="h-screen w-screen flex relative flex-col text-center md:text-left md:flex-row justify-evenly items-center">
      <h3 className="absolute text-center top-24 uppercase tracking-[8px]  text-gray-500 text-3xl">
        Contact me
      </h3>
      <div className="sm:space-y-4 flex flex-col mt-10 xl:mt-20 max-w-xl">
        <h4 className="text-2xl sm:text-4xl font-semibold text-center pb-4">
          Lend me your ear..
        </h4>

        <p className="text-left pb-4 text-[22px]">
          You can contact me directly using the details displayed or by filling
          in the form below. If you wish to use the form, make sure to complete
          the reCAPTCHA by confirming you are not a robot!
        </p>

        <div className="sm:space-y-6 py-4 xs:pt-0">
          <div className="flex items-center space-x-5 justify-start">
            <PhoneIcon className="h-8 w-8" />
            <p className="text-xl">+44 7472 097 891</p>
          </div>
          <div className="flex items-center space-x-4 justify-start">
            <EnvelopeIcon className="h-8 w-8" />
            <p className="text-xl">prgf2011 [at] gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-start">
            <MapPinIcon className="h-8 w-8" />
            <p className="text-xl">Kent - UK</p>
          </div>
        </div>
        <form
          onSubmit={submitHandler}
          className="flex flex-col space-y-0.5 sm:space-y-2 mt-4"
        >
          <div className="flex space-x-0.5 sm:space-x-2">
            <input
              placeholder="Name"
              value={name}
              className="contact-input"
              type="text"
              required
              autoComplete="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />

            <input
              placeholder="Email"
              value={email}
              className="contact-input"
              type="email"
              required
              autoComplete="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <input
            placeholder="Subject"
            value={subject}
            className="contact-input2"
            type="text"
            required
            autoComplete="subject"
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            className="contact-input2"
            required
            autoComplete="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          {sentEmail ? (
            <p className="btn2-dis text-center">Message sent</p>
          ) : (
            <button
              className={`${!captcha ? `btn2-dis ` : `btn2`}`}
              disabled={!captcha}
            >
              {loading ? <LoadingSpinner /> : 'Submit'}
            </button>
          )}
          <ReCAPTCHA
            sitekey={reCaptchaKey}
            onChange={(e) => {
              fetch('/api/captcha', {
                method: 'POST',
                body: e,
              }).then(({ ok }) => {
                if (ok === true) setCaptcha(true);
                else alert('Recaptcha failed, please try again');
              });
            }}
            className="flex justify-center items-center pt-4"
          />
        </form>
      </div>
    </div>
  );
}
