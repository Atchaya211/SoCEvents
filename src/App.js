import React from "react";
import { useState } from "react";
import "./style.css";
import image from "./img/background.jpg";
import Bat from './Bat';
import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [one, setOne]=useState('');
  const handleOne = data => setOne(data);
  const [two, setTwo]=useState("");
  const handleTwo = data => setTwo(data);
  const [three, setThree]=useState("");
  const handeleThree = data => setThree(data);
  const Validate = () => {
    if(one === 'Stephen' && two === 'Elizabeth' && three === 'Isabelle') {
      root.render(
        <div className="App" style={{ backgroundImage:`url(${image})` }}>
          <div className="Title"></div>
          <div className="Success"></div>
        </div>
      );
    }
    else{
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    }
  };
  return (
    <div className="App" style={{ backgroundImage:`url(${image})`}} id="App">
      <div className="Title"></div>
      <div className="inp">
        <Bat change={handleOne}/>
        <Bat change={handleTwo}/>
        <Bat change={handeleThree}/>
      </div>
    <button className="btn" onClick={Validate}>.</button>
    </div>
  );
}

export default App;
