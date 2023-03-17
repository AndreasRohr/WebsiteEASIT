import * as React from "react";
import SectionContainer from "../components/sectionContainer";
import styled from "@emotion/styled"
import {StaticImage} from "gatsby-plugin-image";

const Bulletpoint = styled.h2`
  
`

const Table = styled.table`
  width: 100%;
`

const Td = styled.td`
  height: 10em;
  text-align: center;
`

const Lifecycle = () => (
  <SectionContainer color={"#9ED8DB"}>
    <h1>Lifecycle</h1>
      <Table>
        <tr>
            <Td>
                <Bulletpoint>Auswählen</Bulletpoint>
            </Td>
            <Td>
                <StaticImage
                    src="../images/auswaehlen.png"
                    loading="eager"
                    width={75}
                    formats={["auto", "webp", "avif"]}
                    alt="auswaehlen"
                />
            </Td>
        </tr>
        <tr>
            <Td>
                <Bulletpoint>Bestellen</Bulletpoint>
            </Td>
            <Td>
                <StaticImage
                    src="../images/bestellen.png"
                    loading="eager"
                    width={75}
                    formats={["auto", "webp", "avif"]}
                    alt="bestellen"
                />
            </Td>
        </tr>
          <tr>
                <Td>
                    <Bulletpoint>Loslegen</Bulletpoint>
                </Td>
                <Td>
                    <StaticImage
                        src="../images/loslegen.png"
                        loading="eager"
                        width={75}
                        formats={["auto", "webp", "avif"]}
                        alt="loslegen"
                    />
                </Td>
            </tr>

      </Table>
  </SectionContainer>
)

export default Lifecycle
