import styled from "styled-components"

export const LinkContainer = styled.a`
  border-radius: 3px;
  border: none;
  cursor: pointer;
  padding: 4px;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  letter-spacing: 5px;
  font-weight: 200;
  font-size: large;

  display: flex;
  justify-content: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #c2b4a9;
    text-decoration: none;
  }
`

export const IconContainer = styled.div`
  padding-right: 15px;
`
