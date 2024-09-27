import React, {useEffect, useState, useRef} from 'react'
import TechStack from './TechStack';
import Connect from './Connect';
import Projects from './Projects';

function Sections() {

    const [option1, setOption1] = useState(true);
    const [option2, setOption2] = useState(false);
    const [option3, setOption3] = useState(false);

    const option1Ref = useRef(null);
    const option2Ref = useRef(null);
    const option3Ref = useRef(null);

    const showOption1 = () => {
        setOption1(true);
        setOption2(false);
        setOption3(false);
    }

    const showOption2 = () => {
        setOption1(false);
        setOption2(true);
        setOption3(false);
    }

    const showOption3 = () => {
        setOption1(false);
        setOption2(false);
        setOption3(true);
    }

    useEffect(()=>{

        if(option1){
            option1Ref.current.style.textDecoration = 'underline'
            option2Ref.current.style.textDecoration = 'none'
            option3Ref.current.style.textDecoration = 'none'

            option1Ref.current.style.color = 'rgb(247,39,152)'
            option2Ref.current.style.color = 'white'
            option3Ref.current.style.color = 'white'
        }
        else if(option2){
            option1Ref.current.style.textDecoration = 'none'
            option2Ref.current.style.textDecoration = 'underline'
            option3Ref.current.style.textDecoration = 'none'

            option2Ref.current.style.color = 'rgb(247,39,152)'
            option1Ref.current.style.color = 'white'
            option3Ref.current.style.color = 'white'
        }
        else if(option3){
            option1Ref.current.style.textDecoration = 'none'
            option2Ref.current.style.textDecoration = 'none'
            option3Ref.current.style.textDecoration = 'underline'

            option3Ref.current.style.color = 'rgb(247,39,152)'
            option2Ref.current.style.color = 'white'
            option1Ref.current.style.color = 'white'
        }

    },[option1, option2, option3])


  return (
    <div className='w-[100vw] min-h-[100vh] lg:pt-10'>

        <div id='menu-options' className='flex justify-around items-center text-white font-unlock text-[16px] lg:text-4xl'>
            <h1 ref={option1Ref} onClick={showOption1} className='cursor-pointer'>TECH STACK</h1>
            <h1 ref={option2Ref} onClick={showOption2} className='cursor-pointer'>PROJECTS</h1>
            <h1 ref={option3Ref} onClick={showOption3} className='cursor-pointer'>CONNECT</h1>
        </div>
        <div>
           {option1 && <TechStack/>}
           {option2 && <Projects/>}
           {option3 && <Connect/>}
        </div>

        


    </div>
  )
}

export default Sections