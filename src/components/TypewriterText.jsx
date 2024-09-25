import React from 'react';
import Typewriter from 'typewriter-effect';

const TypewriterText = () => {
  return (
    <div className='text-white font-space-mono text-[10px] lg:text-[20px] opacity-100 text-justify'>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("I’m a passionate full-stack developer who loves turning ideas into seamless, interactive digital experiences. With expertise in ReactJS, NextJS, and Node.js, I create responsive, user-friendly applications that make a difference. I’ve built projects that focus on functionality, design, and user experience. Whether it's crafting dynamic front-ends or robust back-end systems, my goal is always the same: deliver innovative solutions that connect people and simplify their lives. Let’s build something amazing together!")
            .pauseFor(2000) // Optional pause after typing
            .start(); // Ensure this is called to start the animation
        }}
        options={{
            delay: 25, // Set a lower value for faster typing speed
          }}
      />
    </div>
  );
};

export default TypewriterText;
