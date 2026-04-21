import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {

  let [para,setPara]=useState(false);
  const handlePara=()=>{
    setPara(prev=>!prev);
  }
  return (
    <div className="App" id="main">
      <p id="para" className={para?"show":"hide"}>
        Hello, World!....
      </p>
      <button id="click" onClick={handlePara}>
        Click Me
      </button>
    </div>
  );
}

export default App
