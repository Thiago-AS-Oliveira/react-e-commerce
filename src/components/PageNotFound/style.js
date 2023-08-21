import styled from "styled-components"
import { Link } from "react-router-dom"
import { large, medium } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
  Image: styled.img`
    height: 220px;

    ${large({ height: "25%" })}
  `,
  Title: styled.h2`
    width: 600px;
    margin: 10px 5px 0;

    font-size: 7rem;
    font-weight: 300;
    color: #141b1eaa;

    ${large({
      width: "70%",
      fontSize: "4rem",
    })}

    ${medium({ width: "280px" })}
  `,

  Text: styled.p`
    width: 600px;
    font-size: 3rem;
    font-weight: 100;
    color: #141b1eaa;

    ${large({
      width: "70%",
      fontSize: "2rem",
    })}

    ${medium({ width: "280px" })}
  `,

  Redirect: styled(Link)`
    width: 600px;
    margin-top: 15px;
    font-size: 2.2rem;
    font-weight: 100;
    text-decoration: none;
    color: var(--picton-blue);

    ${large({ width: "70%" })}
    ${medium({ width: "280px" })}
  `,
}

export default Style
