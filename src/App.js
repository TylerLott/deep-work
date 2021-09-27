import React, { useState } from "react"
import "./App.css"
import CircleProgressBar from "./components/CircleProgressBar"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <CircleProgressBar
        className={"circle"}
        strokeColor={"#76323F"}
        strokeWidth={"1px"}
        innerText={"Time"}
        percentage={10}
        trailStrokeWidth={"1px"}
        trailStrokeColor={"#565656"}
        speed={5}
      ></CircleProgressBar>
      <Footer></Footer>
    </div>
  )
}

export default App
