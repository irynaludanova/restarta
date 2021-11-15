import React from "react"
import styled, { keyframes } from "styled-components"

export default function TextAnimations({ children }) {
  const text = children

  const array = text.split("")

  return (
    <Wrapper>
      {array.map((item, index) => (
        <h2 key={index}>{item}</h2>
      ))}
    </Wrapper>
  )
}
const animation = keyframes`
0% {opacity:0; transform: translateY(-100px) skewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px);}
50% {opacity:1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}
100% {opacity:1; transform: translateY(0px) skewY(0deg) skewX(0deg) rotateZ(0deg); filter:blur(0px);}

`
const Wrapper = styled.h2`
  display: flex;
  flex-direction: row;
  h2 {
    opacity: 0;
    animation-name: ${animation};
    animation-duration: 6s;
    animation-fill-mode: forwards;
    opacity-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.075, 0.02, 0.165, 1);
  }
  h2:nth-child(1) {
    animatiom-delay: 0.1s;
  }
  h2:nth-child(2) {
    animatiom-delay: 0.2s;
  }
  h2:nth-child(3) {
    animatiom-delay: 0.3s;
  }
  h2:nth-child(4) {
    animatiom-delay: 0.4s;
  }
  h2:nth-child(5) {
    animatiom-delay: 0.5s;
  }
  h2:nth-child(6) {
    animatiom-delay: 0.6s;
  }
  h2:nth-child(7) {
    animatiom-delay: 0.7s;
  }
`
