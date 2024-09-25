import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import emailjs from '@emailjs/browser';

function Connect() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, message);
    const formData = {
      to_name: name,
      from_email: email,
      message: message,
    };
    emailjs
      .send('service_eyw3jko', 'template_6kp0ki7', formData, 
        'JtN0tKsULaeXrbSHE',
      )
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full min-h-[80vh] flex flex-col lg:flex-row mt-10">
      <div className="lg:w-[50%] flex items-center justify-center">
        
        <form
          onSubmit={handleSubmit}
          className="border-2 min-h-[80%] lg:w-[80%] w-[100%] rounded-xl shadow-top-right-small flex flex-col justify-center items-center text-white bg-[#171717] p-10"
        >
          <h1 className="text-neonpink font-extrabold lg:text-4xl text-2xl m-5 font-space-mono">Send a Message</h1>
          <input
            type="text"
            className="bg-transparent border-t-4 border-r-4  rounded-lg border-2 p-2 w-60 lg:w-80 mb-5 outline-none caret-white"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            className="bg-transparent border-t-4 border-r-4 rounded-lg border-2 p-2 w-60 lg:w-80 mb-5 outline-none caret-white"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <textarea
            className="bg-transparent border-t-4 border-r-4 rounded-lg border-2 p-2 w-60 lg:w-80 h-32 mb-5 outline-none caret-white"
            placeholder="Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <input
            type="submit"
            className="border-2 p-1 w-32 rounded-lg bg-neonpink font-bold cursor-pointer"
          />
        </form>
      </div>
      <div className="lg:w-[50%] flex items-center justify-center mt-10 lg:mt-0">

        <div className="border-2 min-h-[60%] lg:w-[80%] w-[100%] shadow-top-right-small rounded-xl p-10 flex flex-col items-center justify-around bg-[#171717]">

        <h1 className="text-neonpink font-extrabold lg:text-4xl text-2xl m-5 block font-space-mono">Socials</h1>

        <div className="flex flex-col w-full lg:flex-row items-center justify-between">

        <a href="https://www.linkedin.com/in/pranav-kadam24/" target="_blank" className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-pointer">
            <FaLinkedin className="text-blue-500 h-14 w-14" />

            <p className="mt-4 text-white">LinkedIn</p>
          </a>

          <a href="" target="_blank" className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-pointer">
            <FaInstagram className="text-white h-14 w-14" />

            <p className="mt-4 text-white">Instagram</p>
          </a>

          <a href="https://github.com/Prnavvv" target="_blank" className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-pointer">
            <FaGithub className="text-white h-14 w-14" />

            <p className="mt-4 text-white">Github</p>
          
          </a>

        </div>



        </div>

      </div>

      {/* <div className="lg:w-[50%] flex items-center justify-center">
        
        <div className="border-2 min-h-[80%] lg:w-[80%] w-[90%] rounded-xl flex flex-col items-center justify-center shadow-top-right-small  text-white bg-[#171717] p-10 mt-10">
        <h1 className="text-neonpink font-extrabold lg:text-4xl text-2xl m-5 block">Socials</h1>
          <div className="flex flex-col lg:flex-row justify-between flex-wrap items-center">
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-grab">
            <FaLinkedin className="text-blue-500 h-14 w-14" />

            <p className="mt-4 text-white">LinkedIn</p>
          </div>

          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-grab">
            <FaInstagram className="text-white h-14 w-14" />

            <p className="mt-4 text-white">LinkedIn</p>
          </div>

          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-grab">
            <FaGithub className="text-white h-14 w-14" />

            <p className="mt-4 text-white">LinkedIn</p>
          
          </div>
        
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Connect;
