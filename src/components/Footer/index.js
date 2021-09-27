import React from "react"
import AnalyticsIcon from "./AnalyticsIcon"
import { IconContainer, LinkContainer } from "./FooterElements"

const Footer = () => {
  return (
    <div>
      <LinkContainer>
        <IconContainer>
          <AnalyticsIcon />
        </IconContainer>
        Analytics
      </LinkContainer>
    </div>
  )
}

export default Footer
