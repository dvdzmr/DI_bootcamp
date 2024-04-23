import React, { useState } from 'react';

const clickMe = () => alert("I was clicked")
// const keyPress = () => alert("I was pressed")
const keyPress = (e) => {
    if (e.key !== "Enter") return;
    const message = "The following key was pressed:" + e.target.value;
    alert(message);
}


export default function Events() {
    const [isToggled, setIsToggled] = useState(false);
    const handleChange = () => {
      setIsToggled(!isToggled);
    };
  
    return (
        <div>
        <p>Hello there</p>
        <button onClick={clickMe}>Click</button>
        <button onClick={handleChange} className={`toggle-button ${isToggled ? 'on' : 'off'}`}>
            {isToggled ? 'ON' : 'OFF'}
        </button>
        <input type="text" onKeyDown={keyPress}></input>
        </div>
    );
  
  }