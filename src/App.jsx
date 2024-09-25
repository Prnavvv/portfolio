import { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import Sections from './components/Sections'

function App() {

 

  return (
    <div>
    <div id='firstDiv'><LandingPage/></div>
      <div id='secondDiv' className='bg-black'><Sections/></div>
      
    </div>
  )

}

export default App
