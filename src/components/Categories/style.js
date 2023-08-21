import styled from "styled-components"
import { medium, small } from "../../responsivity"
import { Link } from "react-router-dom"

const Style = {
  Container: styled.div`
    padding: 50px 30px;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ${medium({
      padding: "15px 30px",
    })}

    ${small({
      padding: "15px",
    })}
  `,

  Card: styled(Link)`
    width: calc(90% / 3);
    height: 30vw;
    margin: 20px 0;
    border-radius: 20px;

    box-shadow: 0 0 0 0.5px var(--bunker-opaque);
    background-color: var(--magnolia);
    color: var(--bunker);

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    transition: 500ms ease;

    position: relative;

    :hover {
      scale: 1.1;
    }

    ${medium({
      width: " calc(98% / 2)",
      height: "120px",
      borderRadius: "5px",

      margin: "5px 0",
    })}
  `,

  Title: styled.h2`
    width: 70%;
    height: 60px;
    border-radius: 5px;

    font-size: 2vw;
    font-weight: 600;
    box-shadow: 0 0 3px var(--bunker-opaque);
    background-color: var(--magnolia);

    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;

    ${medium({
      width: "50%",
      height: "30px",
      fontSize: "2.2vw",
    })}

    ${small({
      width: "70%",
      height: "30px",
      fontSize: "3.5vw",
    })}
  `,

  Image: styled.img`
    height: 60%;

    ${medium({
      height: "90%",
    })}

    ${small({
      height: "65%",
    })}
  `,
}

export default Style
