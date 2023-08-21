import styled, { keyframes } from "styled-components"
import { large, medium } from "../../responsivity"

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

  Container: styled.div`
    width: 100%;
    padding: 15px 20px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${large({ padding: "10px 20px" })}

    ${medium({ padding: "15px" })}
  `,

  Address: styled.div`
    width: 100%;
    padding: 15px 20px;

    font-size: 1.6rem;

    display: flex;
    flex-direction: column;
    position: relative;
    border-bottom: 1px solid var(--bunker-opaque);

    animation: ${fadeIn} 200ms ease-in-out;

    ${large({ padding: "15px" })}

    ${medium({ padding: "10px" })}
  `,

  AddressInfo: styled.p`
    width: 90%;
    padding: 2px 0;
    font-size: ${({ fontSize }) => fontSize || "1.8rem"};
    color: ${({ color }) => color || "var(--bunker)"};

    display: flex;
    align-items: center;

    ${medium({ width: "100%" })}
  `,

  Icons: styled.div`
    z-index: 1;

    position: absolute;
    right: 20px;
    top: calc(50% - 9px);

    display: flex;
    align-items: center;
    justify-content: center;

    ${medium({
      position: "static",
      paddingTop: "10px",
      width: "100%",
      justifyContent: "space-between",
    })}
  `,

  Icon: styled.span`
    font-size: 1.8rem;
    height: 1.8rem;
    margin: 0 5px;

    cursor: pointer;

    color: ${({ color }) => color};

    ${medium({ display: "none" })}
  `,

  ManageBtn: styled.button`
    font-size: 1.6rem;
    width: 150px;
    height: 35px;
    border-radius: 5px;
    color: var(--magnolia);
    background-color: ${({ bgColor }) => bgColor};
    border: none;
    outline: none;
    display: none;
    ${medium({ display: "block" })}
  `,

  Form: styled.form`
    width: 100%;
    padding: 20px 10px;
    position: relative;

    animation: ${fadeIn} 200ms ease-in-out;
  `,

  CloseForm: styled.span`
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 1;

    position: absolute;
    right: 0;
    top: 25px;
  `,

  Wrapper: styled.div`
    width: 100%;
    height: 220px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;

    ${large({
      height: "auto",
    })}
  `,

  InputContainer: styled.div`
    width: 50%;
    height: 50px;

    display: flex;
    align-items: center;
    position: relative;

    ${large({
      width: "100%",
      height: "auto",
      flexDirection: "column",
      alignItems: "start",
      marginBottom: "15px",
      borderBottom: "1px solid #2222",
    })}
  `,

  Erro: styled.p`
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--red);

    position: absolute;
    bottom: -10px;

    animation: ${fadeIn} 200ms ease-in-out;
  `,

  Label: styled.label`
    font-size: 1.6rem;
    margin-right: 10px;
  `,

  Input: styled.input`
    height: 35px;
    padding: 0 5px;
    width: 80%;
    font-size: 1.6rem;

    border: none;
    outline: none;

    ${large({
      width: "100%",
      padding: "0",
      marginTop: "5px",
    })}
  `,

  Button: styled.button`
    height: 35px;
    width: 200px;
    padding: 0 20px;
    border-radius: 5px;

    cursor: pointer;

    font-size: 1.6rem;
    color: var(--magnolia);
    background-color: var(--picton-blue);
    opacity: ${({ isProcessing }) => (!isProcessing ? 1 : 0.4)};

    border: none;
    outline: none;
  `,

  NewAddress: styled.button`
    margin: 20px;
    font-weight: 600;
    font-size: 1.8rem;
    color: var(--bunker-opaque);
    background-color: transparent;

    outline: none;
    border: none;

    cursor: pointer;
    transition: 200ms;

    display: flex;
    justify-content: center;

    :hover {
      color: var(--bunker);
    }
  `,
}

export default Style
