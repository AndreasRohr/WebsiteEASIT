import * as React from "react"
import styled from "@emotion/styled"

const Background = styled.div`
  position: absolute;
  background: #fee856;
  height: 10em;
  width: 10em;
  border-radius: 50%;
`

const Text = styled.p`
  font-family: "JetBrains Mono", monospace;
  text-align: center;
  top: 25%;
  position: absolute;
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;;
  @keyframes spin {
    from {
      transform: rotate(-45deg);
    }
    to {
      transform: rotate(45deg);
    }
  }
`

const Sticker = () => (
  <Background>
    <Text>
      Jetzt einen Monat <b>gratis </b>testen!
    </Text>
  </Background>
)

export default Sticker
