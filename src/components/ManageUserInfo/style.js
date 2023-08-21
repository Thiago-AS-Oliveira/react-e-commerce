import styled, { keyframes } from "styled-components"
import { large, medium, small } from "../../responsivity"

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const Style = {
  CloseIcon: styled.span`
    font-size: 1.7rem;
    height: 1.7rem;
    color: var(--bunker-opaque);
    transition: 300ms;

    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 1;

    :hover {
      color: var(--bunker);
    }
  `,

  Form: styled.form`
    width: 90%;
    padding: 20px;

    animation: ${fadeIn} 200ms ease-in-out;

    ${large({ width: "100%" })}

    ${small({ padding: "10px" })}
  `,

  InputContainer: styled.div`
    width: 100%;
    height: 60px;
    padding: 0 10px;

    border-bottom: 1px solid #0001;

    display: flex;
    align-items: center;
    justify-content: space-between;
    ${large({
      height: "auto",
      flexDirection: "column",
      alignItems: "start",
      border: "none",
    })}
  `,

  Label: styled.label`
    font-size: 1.6rem;

    ${large({ padding: "10px 0" })}
  `,

  Input: styled.input`
    width: 75%;
    height: 35px;

    font-size: 1.6rem;

    border: none;
    outline: none;

    ${large({ borderBottom: "1px solid #0001", width: "100%" })}
  `,

  Button: styled.button`
    font-size: 1.5rem;
    padding: 0 20px;
    height: 40px;
    margin-left: 10px;
    margin-top: 15px;
    border-radius: 5px;

    color: var(--magnolia);
    background-color: var(--picton-blue);

    border: none;
    outline: none;
    cursor: pointer;

    opacity: ${({ isProcessing }) => (!isProcessing ? 1 : 0.4)};

    ${medium({ width: "100%", margin: "15px 0" })}
  `,
}

export default Style
