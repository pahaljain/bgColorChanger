import React from 'react'

function Button({color , setColor , colorName}) {
    const getColor = () => {
        setColor(colorName);
    }

  return (
    <button 
      style={{backgroundColor : colorName}}
      onClick={() => getColor()} 
      className={` text-white font-bold py-2 px-4`}>
        {colorName}
    </button>
  )
}

export default Button

// bg-${colorName}-500 hover:bg-${colorName}-700 text-white font-bold py-2 px-4