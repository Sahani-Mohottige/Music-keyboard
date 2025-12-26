import './App.css'

import KeyBoard  from './components/KeyBoard'
import { startAudio } from './audio/synth'
import { useState } from 'react'

function App() {
  
  const [started,setStarted]=useState(false);

  const handleStart = async () =>{
    await startAudio();
    setStarted(true);
  }

  return (
    <div className='p-4'><h1 className='className=" text-blue-800 font-bold'>Web Music Keyboard</h1>
  
    {!started? (
      <button 
         onClick={handleStart}
         className='px-8 py-3 bg-blue-200 rounded-xl mt-20 text-xl font-semibold hover:bg-blue-300'
         >Start</button>
    ):(<KeyBoard />)}
    </div>
  )
}

export default App
