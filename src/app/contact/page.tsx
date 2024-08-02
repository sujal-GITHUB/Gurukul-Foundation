'use client';

import React, { FormEvent, useState } from 'react';

export default function Page(){
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return(
    <main className="min-h-screen bg-white dark:bg-black antialiased overflow-hidden">
      <div>
      <div className="min-h-screen py-12 pt-36 relative">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-black dark:text-white">
          Contact Us
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm p-4 sm:text-md md:text-lg lg-text-lg text-center">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center justify-center mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-gray-500 focus:ring-2 focus:ring-teal-500 w-3/4 sm:w-3/4 md:w-2/3 lg:w-2/3 p-4 bg-gray-400 dark:bg-zinc-800 placeholder:text-neutral-700 dark:placeholder:text-neutral-500"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className=" resize-none rounded-lg border border-gray-500 focus:ring-2 dark:bg-zinc-800 focus:ring-teal-500 w-3/4 sm:w-3/4 md:w-2/3 lg:w-2/3 p-4 bg-gray-400 placeholder:text-neutral-700 dark:placeholder:text-neutral-500"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </form>
      </div>
      </div>
    </main>
  )
}