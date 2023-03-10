import * as React from "react"
import styled from "@emotion/styled";

const PillStyle = styled.a`
  float: left;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  padding-inline: 1.875em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: white;
  background: #dd356e;
  border-radius: 1.875em;
  &:hover {
    color: #dd356e;
    background: white;
    border-style: solid;
  }
`

const Pill = ({ children, link }) => {

    return (
            <PillStyle href={link}>
               { children }
            </PillStyle>
    )
}


export default Pill;