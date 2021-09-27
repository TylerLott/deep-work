import styled from "styled-components"

export const NavbarContainer = styled.div`
  display: flex;
  min-width: 100vw;
  max-height: 10vh;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`

export const MainTitle = styled.h1`
  letter-spacing: 10px;
  font-weight: 200;
`

export const TaskIconContainer = styled.div`
  justify-self: flex-start;
  padding-left: 5%;
`

export const NoteIconContainer = styled.div`
  justify-self: flex-end;
  padding-right: 5%;
`

export const IconLink = styled.a`
  border-radius: 3px;
  border: none;
  cursor: pointer;
  padding-top: 10px;
  padding-left: 4px;
  padding-right: 4px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c2b4a9;
    text-decoration: none;
  }
`

export const TabContainer = styled.div`
  display: grid;
`

export const TaskContainer = styled.div`
  min-height: 60vh;
`

export const NoteContainer = styled.div`
  min-height: 60vh;
`
