import styled from "styled-components"
import { large, medium, small } from "../../responsivity"
import { Link } from "react-router-dom"

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 50px 100px;

    display: flex;
    justify-content: space-between;

    position: relative;

    ${large({
      padding: "30px 20px 50px",
      flexDirection: "column",
      alignItems: "center",
    })}
  `,

  SectionHeader: styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${large({
      fontSize: "1.8rem",
    })}
  `,

  Cart: styled.div`
    width: 65%;
    padding: 0;

    ${large({ width: "60%" })}

    ${medium({ width: "80%" })}

    ${small({ width: "100%" })}
  `,

  CartHeader: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% repeat(3, calc(50% / 3));
    justify-items: center;

    ${large({
      display: "none",
    })}
  `,

  HeaderWrapper: styled.span`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 10px;

    justify-self: ${({ first }) => (first ? "start" : "")};
  `,

  CartBody: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Summary: styled.div`
    width: 30%;
    height: 300px;
    padding: 20px;
    border-radius: 5px;

    background-color: #fff;
    box-shadow: 0 0 3px var(--bunker-opaque);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${large({ width: "60%" })}

    ${medium({ width: "80%" })}

    ${small({ width: "100%" })}
  `,
  SummaryWrapper: styled.div`
    width: 100%;
    height: ${({ height }) => height};
    box-shadow: ${({ line }) => line && "0 1px 0 var(--bunker-opaque)"};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `,

  Value: styled.div`
    width: 95%;
    font-size: ${({ total }) => (total ? "2rem" : "1.8rem")};
    font-weight: 400;

    display: flex;
    justify-content: space-between;
  `,

  ValueWrapper: styled.div`
    width: 30%;
    background-color: #fff;
  `,
  Button: styled.button`
    padding: 10px 30px;
    font-size: 1.4rem;

    border: none;
    outline: none;
    cursor: pointer;

    color: var(--magnolia);
    background-color: var(--picton-blue);
  `,

  ContinueShopping: styled(Link)`
    font-size: 1.4rem;
    text-decoration: none;
    color: var(--picton-blue);
  `,
}

export default Style
