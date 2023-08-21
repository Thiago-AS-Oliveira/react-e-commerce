import styled, { keyframes } from "styled-components"
import { large } from "../../responsivity"

const slide = keyframes`
    0% {transform: translateY(calc(-100% - 50px))}
    100% {transform: translateY(0)}
`

const Style = {
  Container: styled.div`
    width: 300px;
    height: 50px;
    border-radius: 5px;

    font-size: 1.6rem;
    font-weight: 500;
    color: ${({ error }) => (error && "var(--red)") || "var(--green)"};

    background-color: #fff;
    box-shadow: 0 0 3px var(--bunker-opaque);

    overflow: hidden;
    animation: ${slide} 1000ms ease-in-out;
    z-index: 2;

    position: fixed;
    top: ${({ top }) => top};
    right: 50px;

    div:nth-child(1) {
      background-color: ${({ error }) =>
        (error && "var(--red)") || "var(--green)"};
    }
    span:nth-child(1) {
      color: ${({ error }) => (error && "var(--red)") || "var(--green)"};
    }

    ${large({
      right: "calc(50% - 150px)",
    })}

    ${({ mobile }) =>
      mobile &&
      large({
        top: "120px",
      })}
  `,

  Header: styled.div`
    width: 100%;
    height: 10px;
  `,

  Content: styled.div`
    height: 40px;

    display: flex;
    align-items: center;
    padding: 0 15px;
  `,

  Icon: styled.span`
    font-size: 3.2rem;
    height: 3.2rem;
    margin-right: 5px;
  `,
}

export default Style
