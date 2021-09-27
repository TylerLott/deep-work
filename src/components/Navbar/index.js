import React, { useState } from "react"
import {
  IconLink,
  MainTitle,
  NavbarContainer,
  NoteIconContainer,
  TaskIconContainer,
  TabContainer,
  TaskContainer,
  NoteContainer,
} from "./NavbarElements"

import TaskIcon from "./TaskIcon"
import NoteIcon from "./NoteIcon"
import "./NavbarElements.css"

const Navbar = () => {
  const [taskSidebar, setTaskSidebar] = useState(false)
  const [noteSidebar, setNoteSidebar] = useState(false)

  const showTasks = () => setTaskSidebar(!taskSidebar)
  const showNotes = () => setNoteSidebar(!noteSidebar)

  return (
    <>
      <NavbarContainer>
        <TaskIconContainer>
          <IconLink onClick={showTasks}>
            <TaskIcon />
          </IconLink>
        </TaskIconContainer>
        <MainTitle>COFFEE</MainTitle>
        <NoteIconContainer>
          <IconLink onClick={showNotes}>
            <NoteIcon />
          </IconLink>
        </NoteIconContainer>
      </NavbarContainer>
      <div className={taskSidebar ? "task-tab active" : "task-tab"}>
        <TabContainer>
          <button onClick={showTasks}>test</button>
          <TaskContainer></TaskContainer>
          <input></input>
        </TabContainer>
      </div>
      <div className={noteSidebar ? "note-tab active" : "note-tab"}>
        <TabContainer>
          <button onClick={showNotes}>test</button>
          <NoteContainer></NoteContainer>
          <input></input>
        </TabContainer>
      </div>
    </>
  )
}

export default Navbar
