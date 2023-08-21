import styled from "styled-components"
import { large, medium } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    padding: 0 30px 60px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${large({
      padding: "20px 10px 60px",
    })}
  `,

  Title: styled.h2`
    font-size: 2.8rem;
    font-weight: 500;
    margin-bottom: 30px;
  `,
  CardContainer: styled.div`
    width: 100%;
    min-height: 200px;
    height: 92%;

    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  `,
}

export default Style
