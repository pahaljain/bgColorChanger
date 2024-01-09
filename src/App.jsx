import React, { useState } from 'react'
import Button from "./Button";

function App() {
  const [color , setColor] = useState('white');

  console.log(color);
  return (
    <div className={`app bg-${color}-400 text-black`} style={{backgroundColor: color}}>
      <h1 className='text-3xl m-12'>Background-Color Changer</h1>
      <div className="color">
        <Button color={color} setColor={setColor} colorName="red" />
        <Button color={color} setColor={setColor} colorName="blue" />
        <Button color={color} setColor={setColor} colorName="teal" />
        <Button color={color} setColor={setColor} colorName="indigo" />
        <Button color={color} setColor={setColor} colorName="navy" />
        <Button color={color} setColor={setColor} colorName="lime" />
        <Button color={color} setColor={setColor} colorName="orange" />
      </div>
    </div>
  )
}

export default App