import * as React from "react"
import {StaticImage} from "gatsby-plugin-image";
import SectionContainer from "../components/sectionContainer";

const Intro = () => (
  <SectionContainer color={"#ffffff"}>
        <h1>Senken Sie IT-Kosten und verbessern Sie Ihre Infrastruktur!</h1>
        <p>
            Mit EASIT.rent können Sie Hard- & Software sowie Support zu einem Fixpreis
            einkaufen. Dank unserem All-Inclusive Angebot müssen Sie sich nicht mehr
            um Ihre IT-Infrastruktur kümmern.
        </p>
        <StaticImage
            src="../images/laptop-arrows.png"
            loading="eager"
            width={500}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="Laptop with arrows"
            style={{ marginBottom: `var(--space-3)` }}
        />
  </SectionContainer>
)

export default Intro
