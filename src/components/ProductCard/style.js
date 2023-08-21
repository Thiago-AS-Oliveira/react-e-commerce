import styled from "styled-components"
import { small, large, medium } from "../../responsivity"
import { Link } from "react-router-dom"

const Style = {
  Card: styled.div`
    width: ${({ list }) => (list ? "calc(90% / 3)" : "calc(90% / 4)")};
    height: 370px;
    border-radius: 5px;
    margin-left: 13px;
    margin-bottom: 15px;

    background-color: var(--magnolia);
    box-shadow: 0 0 3px var(--bunker-opaque);

    cursor: pointer;
    overflow: hidden;
    position: relative;

    transition: 500ms ease;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;

    :hover {
      scale: 1.05;
    }

    ${large({
      margin: 0,
      width: "49%",
      height: "180px",
      marginBottom: "10px",
    })}

    ${medium({
      width: "100%",
      height: "150px",
    })}
  `,

  Icon: styled.span`
    position: absolute;
    top: 15px;
    right: 15px;

    font-size: 2rem;
    color: var(--picton-blue);
    z-index: 1;

    ${large({ fontSize: "1.6rem" })}
  `,

  Main: styled(Link)`
    height: calc(100% - 45px);
    width: 100%;

    text-decoration: none;
    color: var(--bunker);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${large({
      width: "100%",
      padding: "5px 8px",
      flexDirection: "row",
      alignItems: "center",
    })}
  `,

  ImageContainer: styled.div`
    width: 100%;
    height: 55%;
    background-color: #fff;

    display: flex;
    align-items: center;
    justify-content: center;

    ${large({
      width: "120px",
      height: "120px",
      borderRadius: "5px",
      boxShadow: "0px 0px 1px var(--bunker-opaque)",
    })}

    ${medium({
      width: "80px",
      height: "80px",
    })}
  `,

  Image: styled.img`
    height: 70%;
    align-self: center;

    ${large({
      height: "60%",
    })}
  `,

  InfoContainer: styled.div`
    height: 45%;
    width: 100%;
    padding: 10px 15px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    ${large({
      width: "calc(100% - 120px)",
      height: "100%",
      padding: "10px",
    })}

    ${large({
      width: "calc(100% - 80px)",
    })}
  `,

  Name: styled.h3`
    width: 90%;
    font-size: 2rem;
    font-weight: 500;

    ${large({ fontSize: "1.6rem" })}
  `,

  PriceContainer: styled.div`
    width: 100%;

    ${large({
      display: "flex",
      flexDirection: "row-reverse",
      alignItems: "center",
    })}
  `,

  OldPrice: styled.div`
    font-size: 1.4rem;
    height: 1.4rem;
    text-decoration: line-through;
    color: var(--bunker-opaque);

    ${large({ fontSize: "1.2rem", marginRight: "auto" })}
  `,

  Price: styled.div`
    font-size: 1.8rem;

    ${large({ fontSize: "1.5rem", marginRight: "10px" })}
  `,

  Button: styled.button`
    width: 100%;
    height: 45px;

    font-size: 1.6rem;
    font-weight: 500;

    color: var(--magnolia);
    background-color: var(--picton-blue);

    border: none;
    outline: none;
    cursor: pointer;
  `,
}

export default Style
