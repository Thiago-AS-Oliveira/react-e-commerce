import styled from "styled-components"
import { small } from "../../responsivity"

const Style = {
  Container: styled.div`
    display: flex;
    align-content: center;
    font-size: ${({ size }) => size};

    ${small({ fontSize: "1.2rem" })}
  `,
  Icon: styled.span`
    margin-right: 5px;
    color: var(--picton-blue);
  `,
}

export default Style
