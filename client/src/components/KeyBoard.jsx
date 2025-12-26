import { useEffect, useState } from 'react';

import PianoKey from './PianoKey';
import React from 'react'
import { playNote } from '../audio/synth';

const whiteNotes = ['C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5'];
const blackNotes = ["C#4","D#4","F#4","G#4","A#4"];

const whiteKeys = ["a","s","d","f","g","h","j","k"];
const blackKeys = ["w","e","t","y","u"]; // map to keyboard letters

const blackOffsets = [50, 120, 272, 340 ,415]; //px offsets for black keys

export default function KeyBoard() {

    const [activeKeys, setActiveKeys] = useState(null);

        useEffect(() => {   
        const handleKeyDown = (e) =>{
            if(e.repeat) return; //prevent holding key down

            const key = e.key.toLowerCase();

            let index =whiteKeys.indexOf(key);

            if(index !== -1){
                playNote(whiteNotes[index]);
                setActiveKeys(key);
                return;
            }

            index = blackKeys.indexOf(key);

            if(index !== -1){
                playNote(blackNotes[index]);
                setActiveKeys(key);
                return;
            }
        }

        const handleKeyUp = (e) =>{
            const allKeys = [...whiteKeys, ...blackKeys];
            
            if(allKeys.includes(e.key.toLowerCase())){
                setTimeout(() =>{
                    setActiveKeys(null);
                }, 150);
            }
        }

        window.addEventListener("keydown",handleKeyDown);
        window.addEventListener("keyup",handleKeyUp);
        
        return() => {
            window.removeEventListener("keydown",handleKeyDown);
            window.removeEventListener("keyup",handleKeyUp);
        };
},[]);

    //mouse click handler
    const handleClick = (note,key) => {
        playNote(note);
        setActiveKeys(key);
        setTimeout(() => 
            setActiveKeys(null),150);
    }

  return (
    <div className='relative flex'>
          {/* WHITE KEYS */}
        {whiteNotes.map((note,i) => (
            <PianoKey 
            key={note} 
            note={note}
            pressed={activeKeys === whiteKeys[i]}
            onClick={() => handleClick(note, whiteKeys[i])} />
        ))}

        {/* BLACK KEYS */}
        {blackNotes.map((note,i) => (
             <div
          key={note}
          className="absolute"
          style={{ left: blackOffsets[i] }}
        >
            <PianoKey 
            key={note}
            className="absolute"
            black={true}
            pressed={activeKeys === blackKeys[i]}
            onClick={() => handleClick(note, blackKeys[i])}
            />
            </div>
        ))}
    </div>
  )
}
    
