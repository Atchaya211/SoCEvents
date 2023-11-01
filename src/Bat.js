import React from "react";
import "./style.css";
// import Text from "./text";
function Bat(props) {
    // const inpVal='';
  return (
        <form className="Bat">
            <input 
                type="text"
                className="Bat_inp"
                onChange={e => props.change(e.target.value)}
            />
        </form>
  );
}

export default Bat;