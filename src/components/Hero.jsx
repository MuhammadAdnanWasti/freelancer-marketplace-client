import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-pink-900">
        I am a{' '}
        <span className="text-blue-600">
          <Typewriter
            words={['Developer', 'Designer', 'Engineer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
      <p className="text-lg text-gray-600">
        Building modern, responsive web applications with React & Tailwind.
      </p>
    </div>
  );
};

export default Hero;
