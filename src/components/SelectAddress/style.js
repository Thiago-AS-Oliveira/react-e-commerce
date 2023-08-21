import styled, { keyframes } from "styled-components"
import { medium, small } from "../../responsivity"

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const Style = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    animation: ${fadeIn} 200ms ease-in-out;
  `,

  Title: styled.h2`
    font-size: 2rem;
    font-weight: 500;
  `,

  NewAddressBtn: styled.button`
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    outline: none;

    color: var(--picton-blue);
    background-color: transparent;
    border: 2px dashed var(--picton-blue);

    font-size: 1.6rem;
    cursor: pointer;
  `,

  AddressList: styled.div`
    width: 100%;
    height: 90%;
    padding: 10px;
    margin: 15px 0;

    display: flex;
    align-items: start;
    flex-direction: column;

    overflow-y: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--magnolia);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--bunker-opaque);
      border-radius: 5px;
    }

    ${medium({
      margin: "10px 0",
      padding: "5px",
    })}
  `,

  Address: styled.div`
    width: 100%;
    min-height: 80px;
    padding: 10px 20px;
    margin-bottom: 10px;
    border-radius: 5px;

    box-shadow: 0 0 2px #0008;

    display: flex;
    align-items: center;
    cursor: pointer;

    outline: ${({ selected }) => selected && "4px solid #00f5"};

    ${medium({
      padding: "5px",
    })}
  `,

  AddressIcon: styled.span`
    font-size: 4rem;
    height: 4rem;
    margin-right: 20px;

    ${medium({
      display: "none",
    })}
  `,

  AddressInfo: styled.div`
    display: flex;
    flex-direction: column;
  `,

  AddressElement: styled.p`
    font-size: 1.5rem;
    font-weight: 600;

    ${medium({
      margin: "5px 0",
      height: "auto",
    })}
  `,

  ButtonWrapper: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: space-between;
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

    ${small({ width: "100%" })}
  `,
}

export default Style
