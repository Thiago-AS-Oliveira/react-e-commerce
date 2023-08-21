import styled, { keyframes } from "styled-components"
import { large, small } from "../../responsivity"

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const Style = {
  Form: styled.form`
    width: 100%;
    height: 100%;
    padding: 0 10px;

    overflow: hidden;
    position: relative;

    display: flex;
    flex-direction: column;

    animation: ${fadeIn} 200ms ease-in-out;

    ${large({
      width: "100%",
    })}
  `,

  Title: styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 15px;
  `,

  ButtonWrapper: styled.div`
    width: 100%;
    margin-top: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${small({
      flexDirection: "column-reverse",
    })}
  `,

  Button: styled.button`
    height: 40px;
    min-width: 150px;
    padding: 0 20px;

    border: none;
    outline: none;
    border-radius: 5px;

    font-size: 1.5rem;
    color: var(--magnolia);
    background-color: ${({ bgColor }) => bgColor || "var(--picton-blue)"};

    transition: 500ms;
    opacity: ${({ isProcessing }) => (!isProcessing ? 1 : 0.4)};

    cursor: pointer;

    ${small({
      width: "100%",
      margin: "5px 0",
    })}
  `,

  InfoContainer: styled.div`
    color: #222a;
    font-size: 1.5rem;
    margin-bottom: 10px;

    display: flex;
    flex-direction: column;
  `,

  Info: styled.p`
    margin: 5px 0;
    font-size: 1.8rem;
  `,
}

export default Style
