import React, { useState } from "react"
import "./App.css"
import Tab from "./components/Tab"
import Timer from "./components/Timer"

function App() {
  const [taskTabOpen, setTaskTabOpen] = useState(false)
  const [noteTabOpen, setNoteTabOpen] = useState(false)

  const toggleTab = () => {
    setTaskTabOpen(!taskTabOpen)
  }

  const toggleNote = () => {
    setNoteTabOpen(!taskTabOpen)
  }

  return (
    <div className="App">
      <Timer rtoggle={toggleNote} ltoggle={toggleTab}></Timer>
      <Tab toggle={toggleTab} side={"left"}></Tab>
      <Tab toggle={toggleNote} side={"right"}></Tab>
    </div>
  )
}

export default App
