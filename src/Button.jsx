import React from 'react'

function Button({clr , color , setColor}) {
    const change = () => {
        setColor(clr);
        console.log(color);
    }

  return (
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
     style={{backgroundColor : clr}} 
     onClick={change}
     >
        {clr}
     </button>
  )
}

export default Button