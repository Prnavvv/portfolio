import React, {useRef} from 'react'
import { BiSolidDownArrow } from "react-icons/bi";
import TypewriterText from './TypewriterText';


function LandingPage() {

    const scroll = () => {
        window.scrollBy({
          top: window.innerHeight, // Scroll by 100vh
          behavior: 'smooth', // Smooth scrolling
        });
      };


  return (
    <div className='bg-background-img bg-cover bg-center  h-screen w-[100vw]'>

        <div className='h-full w-[100vw] flex items-center justify-center'>
        <div className='border-2 min-h-[40vh] w-[90vw] lg:w-[70vw] lg:min-h-[75vh] bg-black rounded-xl shadow-top-right-small lg:shadow-top-right  p-5 lg:p-10'>
            <div>
                <div className='flex flex-col  '>
                <h1 className='text-white font-space-mono text-[15px] lg:text-[40px] text-left opacity-100'>hey, I'm</h1>
                <h1 className='font-unlock text-[37px] lg:text-[80px] text-deeppurple opacity-100 text-left'>Pranav Kadam</h1>
                <h1 className='font-unlock text-coral text-[20px] lg:text-[30px] mb-5'>Full-Stack Developer</h1>
                
                <TypewriterText/>
                </div>
                <div></div>
            </div>
        </div>

        
        <BiSolidDownArrow onClick={scroll} style={{color: "#ffffff", fontSize: "50px", position: "absolute", bottom: "10",}} className="icon-bounce"/>
        
        </div>

        

    </div>
  )
}

export default LandingPage