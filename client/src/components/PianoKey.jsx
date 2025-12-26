import React from 'react'

const PianoKey = ({note,pressed,onClick,black}) => {
  return (
   <button
    onClick={onClick}
    className={`select-none flex items-end justify-center font-semibold
        ${
          black
            ? `
              w-10 h-32 absolute z-10
              ${pressed ? "bg-blue-800 border-blue-400" : "bg-black border-gray-700"}
            `
            : `
              w-16 h-52 m-1
              ${pressed ? "bg-blue-200 border-blue-500" : "bg-white border-gray-400"}
            `
        }
        border-2 rounded
      `}
   >
        {!black && note}
   </button>        
  );
}

export default PianoKey