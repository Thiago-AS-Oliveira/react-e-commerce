import { Link } from "react-router-dom"
import styled from "styled-components"
import { large } from "../../responsivity"

const Style = {
  Container: styled.div`
    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: column;
  `,
  Main: styled.div`
    width: 100%;
    padding: 30px 30px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${large({ padding: "30px 0" })}
  `,

  Header: styled.h2`
    width: 100%;

    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 20px;
    padding: 0 10px;

    ${large({
      fontSize: "1.8rem",
    })}
  `,
  Image: styled.img`
    height: 200px;

    ${large({ height: "22vw" })}
  `,

  TextContainer: styled.div`
    width: 70%;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
  `,

  Text: styled.p`
    font-size: 3.2rem;
    font-weight: 300;
    color: #141b1eaa;

    margin-bottom: 20px;

    ${large({ fontSize: "2.2rem" })}
  `,

  Redirect: styled(Link)`
    font-size: 2.2rem;
    font-weight: 100;
    text-decoration: none;
    color: var(--picton-blue);

    ${large({ fontSize: "1.8rem" })}
  `,
}

export default Style
