import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header>
    <StaticImage
      src="../images/EASIT-Logo.png"
      loading="eager"
      width={100}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
      <h1>{siteTitle}</h1>
    <ul>
      <li>Preisrechner</li>
      <li>Hardware</li>
      <li>Kontakt</li>
    </ul>
  </header>
)

export default Header
