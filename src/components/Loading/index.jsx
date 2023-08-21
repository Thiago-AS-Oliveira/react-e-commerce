import React from "react"
import { AiOutlineLoading, AiOutlineLoading3Quarters } from "react-icons/ai"
import styled, { keyframes } from "styled-components"

const loading = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(2);
  }
`

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 200px;

  align-items: center;
  justify-content: center;
`

const Dot = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  margin: 15px;
  border-radius: 50%;
  background-color: var(--dark-gray);

  animation: ${loading} 1s ease-in-out infinite alternate;

  :nth-child(2) {
    animation-delay: 200ms;
  }

  :nth-child(3) {
    animation-delay: 400ms;
  }

  :nth-child(4) {
    animation-delay: 600ms;
  }

  :nth-child(5) {
    animation-delay: 800ms;
  }
`
const Loading = ({ size }) => {
  return (
    <Container>
      <Dot size={size}></Dot>
      <Dot size={size}></Dot>
      <Dot size={size}></Dot>
      <Dot size={size}></Dot>
      <Dot size={size}></Dot>
    </Container>
  )
}

export default Loading
