//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

let count =0;
setInterval(() => {
    const numberOne = Math.floor( count / 1) % 10;
    const numberTwo = Math.floor( count / 10) % 10;
    const numberThree = Math.floor( count / 100) % 10;
    const numberFour = Math.floor( count / 1000) % 10;
    const numberFive = Math.floor( count / 10000) % 10;
    const numberSix = Math.floor( count / 100000) % 10;

    count ++;


    ReactDOM.render(<SecondsCounter numOne={numberOne} numTwo={numberTwo} numThree={numberThree} numFour={numberFour}  numFive={numberFive}  numSix={numberSix} />, document.querySelector("#app"));
    //ReactDOM.render(<SecondsCounter numTwo={numberTwo} />, document.querySelector("#app"));

  }, 0.00000001);

//render your react application

