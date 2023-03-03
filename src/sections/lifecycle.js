import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

const Container = styled.div`
  background: #dd356e;
  width: 100%;
`

const Lifecycle = () => (
  <Container>
    <StaticImage
      src="../images/Arrows.png"
      loading="eager"
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt=""
      style={{ marginBottom: `var(--space-3)` }}
    />
  </Container>
)

export default Lifecycle
