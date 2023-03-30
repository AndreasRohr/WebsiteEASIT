import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import Navbar from "../components/navbar";
import { Link } from "gatsby"

const HeaderContainer = styled.header`
display: flex;
  overflow: hidden;
  padding: 1.25em 0.625em;
  position: fixed;
  z-index: 1;
  max-height: 4.5rem;
  background-color: white;
  width: 100%;
  
  .easit-logo{
  margin-left:7%;
  }
`

const ImageWrapper = styled.div`
width: 60%;
`


const Header = () => (
  <HeaderContainer>
      <ImageWrapper>
        <Link to="/">
          <StaticImage
              placeholder= 'none'
              src="../images/EASIT-Logo-slim.png"
              loading="eager"
              width={120}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="EASIT Logo"
              className="easit-logo"
          />
        </Link>
      </ImageWrapper>
      <Navbar/>
  </HeaderContainer>
)

export default Header
