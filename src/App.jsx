import { useState } from "react"
import Button from "./Button"

function App() {

  const [color , setColor] = useState("red")

  return (
    <div className=	"sec" style={{backgroundColor:`${color}`}}>
      <div className="w-128 h-32 flex flex-row ... m-28 ">
        <Button clr="red" color={color} setColor={setColor}/>
        <Button clr="blue" color={color} setColor={setColor}/>
        <Button clr="green" color={color} setColor={setColor}/>
        <Button clr="purple" color={color} setColor={setColor}/>
        <Button clr="black" color={color} setColor={setColor}/>
        <Button clr="darkblue" color={color} setColor={setColor}/>
      </div>
    </div>
  )
}

export default App

// <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor : "green"}} >Red</button>
