import React from "react";
import invoicery from "../assets/invoicery.png";
import cheatonme from "../assets/cheatonme.png"
import musicstore from "../assets/musicstore.png"

function Projects() {
  return (
    <div className="min-h-[85vh] w-full flex flex-col items-center justify-center font-space-mono">
      <div className="lg:w-[80vw] w-[100vw] flex flex-col lg:flex-row justify-around items-center">

        <div className="border-2 h-44 w-80 rounded-lg bg-[#171717] flex flex-col items-center justify-around m-10">
          <img src={invoicery} className="w-[80%] h-[60%] rounded-lg" />
          <p className="text-white">Invoicery</p>
        </div>

        <div className="border-2 h-44 w-80 rounded-lg bg-[#171717] flex flex-col items-center justify-around m-10">
          <img src={cheatonme} className="w-[80%] h-[60%] rounded-lg" />
          <p className="text-white">Cheat on Me</p>
        </div>

        <div className="border-2 h-44 w-80 rounded-lg bg-[#171717] flex flex-col items-center justify-around m-10">
          <img src={musicstore} className="w-[80%] h-[60%] rounded-lg" />
          <p className="text-white">Music Store</p>
        </div>

      </div>

      <a target="_blank" href="https://drive.google.com/file/d/1_RKogsObWIiUe6lFbOLRSuzgMEVB_tMt/view?usp=sharing" className="border-2 mt-20 text-white rounded-xl p-2 w-40 text-center bg-neonpink font-bold">RESUME</a>
    </div>
  );
}

export default Projects;
