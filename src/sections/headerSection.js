import * as React from "react"
import styled from "@emotion/styled"
import Navbar from "../components/navbar";


const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  z-index: 1;
  background-color: white;
`


const HeaderSection = ({toggleModal}) => (
  <HeaderContainer>
      <Navbar toggleModal={toggleModal}/>
  </HeaderContainer>
)

export default HeaderSection
