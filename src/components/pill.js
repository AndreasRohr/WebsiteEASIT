import * as React from "react"
import styled from "@emotion/styled";

const PillStyle = styled.button`
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
  border: 1px solid white;
  font-size: 1.2rem;
  white-space: nowrap;


  &:hover {
    color: #dd356e;
    background: white;
    border-style: solid;
    border-color: black
  }
`

const Pill = ({ children, action }) => {

    return (
            <PillStyle onClick={action}>
               { children }
            </PillStyle>
    )
}


export default Pill;