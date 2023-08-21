import styled from "styled-components"
import { large } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 30%;
    height: fit-content;
    padding: 0 20px;

    background-color: #fff;
    box-shadow: 0px 0 3px 0px var(--bunker-opaque);

    border-radius: 10px;

    transition: 300ms ease;

    ${({ filterOpen }) =>
      large({
        zIndex: "2",
        width: filterOpen ? "280px" : "0",
        padding: filterOpen ? "10px 20px" : "0",
        opacity: filterOpen ? "1" : "0",
        position: "absolute",
        left: "0",
        top: "0",
        boxShadow: "0px 0 3px 0px var(--bunker-opaque)",
      })}
  `,

  Wrapper: styled.div`
    padding: 15px 0;

    ${large({ padding: "10px 0" })}
  `,

  FilterName: styled.h3`
    font-size: 1.8rem;
    font-weight: 500;
    margin-bottom: 10px;
  `,

  FilterContainer: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  `,

  ToogleSwitchContainer: styled.div`
    width: 200px;
    max-width: 20vw;
    height: 50px;
    border-radius: 5px;

    background-color: var(--magnolia);
    box-shadow: 0 0 2px var(--bunker-opaque);

    font-size: 1.8rem;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: space-around;

    ${large({ maxWidth: "150px" })}
  `,

  ToogleSwitch: styled.input`
    appearance: none;
    width: 35px;
    height: 1.8rem;
    border-radius: 20px;
    background-color: var(--bunker-opaque);

    cursor: pointer;
    position: relative;
    transition: 300ms ease;

    ::before {
      content: "";
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 50%;
      background-color: #fff;
      transition: 300ms ease;

      position: absolute;
      top: 1px;
      left: 1px;
    }

    :checked {
      background-color: var(--picton-blue);
    }

    :checked::before {
      left: 18px;
    }
  `,

  Label: styled.label`
    font-size: 1.6rem;
    font-weight: 300;
  `,

  PriceInput: styled.input`
    width: 8vw;
    height: 25px;
    border-radius: 2px;
    padding: 0 5px;
    margin-right: 10px;

    font-size: 1.4rem;
    color: var(--bunker);
    background-color: var(--magnolia);
    box-shadow: 0 0 0 0.5px var(--bunker-opaque);

    border: none;
    outline: none;

    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }

    ${large({ width: "90px" })}
  `,

  RadioInput: styled.input`
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: 0 0 0 0.5px var(--bunker-opaque);
    margin-right: 10px;

    transition: 5ms;
    cursor: pointer;
    background-color: var(--magnolia);

    ::before {
      transition: 300ms ease;
    }

    :checked {
      background-color: var(--picton-blue);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    :checked::before {
    }

    :checked::after {
      content: "✓";
      font-size: 18px;
      color: #fff;
    }
  `,
}

export default Style
