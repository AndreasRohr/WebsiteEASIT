import * as React from "react"
import styled from "@emotion/styled"

const Background = styled.div`
  background: #fee856;
  height: 10em;
  width: 10em;
  border-radius: 50%;
  display: inline-block;
  position: fixed;
  bottom: 2em;
  right: 2em;
`

const Text = styled.p`
  text-align: center;
  position: absolute;
  margin: auto;
  animation-name: spin;
  animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
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
