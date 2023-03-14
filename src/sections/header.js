import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"
import Pill from "../components/pill"

const HeaderContainer = styled.header`
  overflow: hidden;
  padding: 1.25em 0.625em;
`

const A = styled.a`
    float: left;
    text-align: center;
    padding: 0.75em;
    text-decoration: none;
    font-size: 1.125em;
    font-weight: bold;
`

const Menu = styled.menu`
    float: right;
`

const Header = () => (
  <HeaderContainer>
      <a href="">
          <StaticImage
              src="../images/EASIT-Logo.png"
              loading="eager"
              width={150}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="EASIT Logo"
          />
      </a>
    <Menu>
      <A>FAQ</A>
      <A>Ablauf</A>
      <A>Vorteile</A>
      <A>Zufriedene Kunden</A>
      <Pill link="#default">Zum Angebot</Pill>
    </Menu>
  </HeaderContainer>
)

export default Header
