import styled, { keyframes } from "styled-components"
import { large, small } from "../../responsivity"

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const slide = keyframes`
    0% {transform: translateY(-100%)}
    100% {transform: translateY(0)}
`

const Style = {
  Form: styled.form`
    height: 100%;
    width: 100%;
    padding: 0 10px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    animation: ${fadeIn} 200ms ease-in-out;
  `,

  Title: styled.h2`
    font-size: 2rem;
    font-weight: 500;
    margin-right: auto;
    margin-bottom: 10px;
  `,

  FormContent: styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `,

  InputContainer: styled.div`
    width: ${({ width }) => width || "49%"};
    padding: 5px 0;
    display: flex;
    flex-direction: column;

    ${large({ width: "100%" })}
  `,

  Label: styled.label`
    margin-bottom: 5px;
    font-size: 1.6rem;
  `,

  Input: styled.input`
    height: 40px;
    padding: 0 10px;
    border-radius: 5px;

    font-size: 1.6rem;

    border: none;

    box-shadow: 0 0 2px #0008;
    transition: 200ms;

    &:focus {
      outline: ${({ invalid }) => (invalid ? "none" : "4px solid #00f5")};
    }

    ${({ invalid }) => invalid && "border: 2px solid var(--red)"}
  `,

  Message: styled.span`
    margin-top: 2px;
    font-size: 1.4rem;
    font-weight: 600;
    color: var(--red);

    animation: ${fadeIn} 500ms ease-in-out;
  `,

  ButtonWrapper: styled.div`
    width: 100%;
    margin-top: auto;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;

    ${large({ marginTop: "20px" })}

    ${small({ flexDirection: "column-reverse" })}
  `,

  Button: styled.button`
    height: 40px;
    width: 200px;

    border: none;
    outline: none;
    border-radius: 5px;

    font-size: 1.5rem;
    color: var(--magnolia);
    background-color: ${({ bgColor }) => bgColor || "var(--picton-blue)"};

    transition: 500ms;
    opacity: ${({ isProcessing }) => (!isProcessing ? 1 : 0.4)};

    cursor: pointer;

    ${large({ width: "150px" })}

    ${small({
      width: "100%",
      margin: "5px 0",
    })}
  `,
}

export default Style
