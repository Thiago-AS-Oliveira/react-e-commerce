import styled from "styled-components"
import { small, medium } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    height: 35vw;
    position: relative;

    display: flex;
    align-items: center;
    overflow: hidden;

    ${medium({
      height: "40vw",
    })}
  `,

  Wrapper: styled.div`
    width: 300%;
    display: flex;
    align-items: center;

    transition: transform 800ms ease;
    transform: translateX(${({ slideIndex }) => slideIndex * -100}vw);
  `,

  ImageContainer: styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Image: styled.img`
    height: 30vw;
    box-shadow: 0 0 3px var(--bunker-opaque);
    border-radius: 10px;

    cursor: pointer;

    ${medium({
      scale: "1.15",
    })}
  `,

  Arrow: styled.span`
    width: 40px;
    height: 40px;

    font-size: 3rem;

    border-radius: 50%;
    background-color: var(--magnolia);
    box-shadow: 0 0 3px var(--bunker-opaque);

    position: absolute;
    top: calc(50% - 20px);
    ${({ side }) => side}: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    z-index: 1;

    ${({ side }) =>
      medium({
        scale: ".8",
        [side]: "1vw",
      })}

    ${({ side }) =>
      small({
        scale: ".7",
        [side]: "-3px",
      })}
  `,
}

export default Style
