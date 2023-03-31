import * as React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Background = styled.div`
  z-index: 1;
  @media (max-width: 768px) {
    height: 6em;
    display: none;
    width: 6em;
    margin-bottom: 10vh;
    margin-right: 1rem;
  }

  background: #fee856;
  height: 10em;
  width: 10em;
  border-radius: 50%;
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 3rem;
  margin-bottom: 60vh;
  animation: wobble 4s ease infinite;

  @keyframes wobble {
    0%, 100% {
      -webkit-transform: translateX(0%);
      transform: translateX(0%);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }

    4% {
      -webkit-transform: translateX(-9px) rotate(-8deg);
      transform: translateX(-9px) rotate(-8deg);
    }

    8% {
      -webkit-transform: translateX(calc(9px / 2)) rotate(8deg);
      transform: translateX(calc(9px / 2)) rotate(8deg);
    }

    12% {
      -webkit-transform: translateX(calc(-9px / 2)) rotate(calc(-8deg / 1.8));
      transform: translateX(calc(-9px / 2)) rotate(calc(-8deg / 1.8));
    }

    16% {
      -webkit-transform: translateX(calc(9px / 3.3)) rotate(calc(8deg / 3));
      transform: translateX(calc(9px / 3.3)) rotate(calc(8deg / 3));
    }

    20% {
      -webkit-transform: translateX(calc(-9px / 5.5)) rotate(calc(-8deg / 5));
      transform: translateX(calc(-9px / 5.5)) rotate(calc(-8deg / 5));
    }

    75% {
      transform: rotate(0);
    }
}
  &:hover {
    background: #e1cb4b;
  }
`

const Text = styled.p`
  font-family: "JetBrains Mono", monospace;
  text-align: center;
  top: 25%;
  color: #000;
  position: absolute;
     @media (max-width: 768px) {
      font-size:10px;
  }

`

const Sticker = () => (
  <Link to="/contact">
    <Background>
      <Text>
        Jetzt einen Monat <b>gratis </b>testen!
      </Text>
    </Background>
  </Link>
)

export default Sticker
