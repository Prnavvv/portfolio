import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { PiFigmaLogoFill } from "react-icons/pi";
import { VscGithubAlt } from "react-icons/vsc";
import figma from "../assets/figma.svg";

import Draggable from "react-draggable";

function TechStack() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center">
      <div className="lg:w-[60%] w-[100%] h-full text-white font-space-mono grid grid-cols-2 lg:grid-cols-4 mt-10 gap-14">
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center transition-transform transform hover:scale-105 cursor-grab">
            <FaHtml5 className="text-red-500 h-14 w-14" />
            <p className="mt-4">HTML</p>
          </div>
        </Draggable>

        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36  mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <FaCss3 className="text-blue-500 h-14 w-14" />
            <p className="mt-4">CSS</p>
          </div>
        </Draggable>

        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <TbBrandJavascript className="text-yellow-400 h-14 w-14" />
            <p className="mt-4">JavaScript</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <FaReact className="text-blue-400 h-14 w-14" />
            <p className="mt-4">ReactJS</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <SiNextdotjs className="text-white h-14 w-14" />
            <p className="mt-4">NextJS</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <SiTypescript className="text-blue-500 h-14 w-14" />
            <p className="mt-4">TypeScript</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <RiTailwindCssFill className="text-blue-400 h-14 w-14" />
            <p className="mt-4">Tailwind</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <FaNode className="text-green-500 h-14 w-14" />
            <p className="mt-4">NodeJS</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <SiMongodb className="text-green-700 h-14 w-14" />
            <p className="mt-4">MongoDB</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <DiMysql className="text-[#3E6E93] h-14 w-14" />
            <p className="mt-4">MySQL</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            {/* <PiFigmaLogoFill className='text-white h-14 w-14'/> */}
            <img src={figma} className="h-14 w-14" />
            <p className="mt-4">Figma</p>
          </div>
        </Draggable>
        <Draggable>
          <div className="border-2 rounded-xl h-32 w-36 mb-5 bg-[#171717] flex flex-col justify-center items-center cursor-grab">
            <FaGithub className="text-white h-14 w-14" />
            <p className="mt-4">Github</p>
          </div>
        </Draggable>
      </div>
    </div>
  );
}

export default TechStack;
