import styled, { keyframes } from "styled-components"
import { large, medium } from "../../responsivity"

const fadeIn = keyframes`
    0% {opacity: 0}
    100% {opacity: 1}
`

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    padding: 50px 100px;

    background-color: var(--magnolia);

    display: flex;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    animation: ${fadeIn} 200ms ease-in-out;

    ${large({
      padding: "50px",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "start",
    })}

    ${medium({ padding: "20px 10px" })}
  `,

  Close: styled.span`
    font-size: 20px;
    color: var(--bunker-opaque);

    cursor: pointer;
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 1;

    transition: 200ms;

    :hover {
      color: var(--bunker);
    }
  `,

  Elements: styled.div`
    width: 45%;
    height: 450px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 2px var(--bunker-opaque);
    overflow: auto;

    position: relative;

    ${large({ width: "80%", height: "fit-content" })}

    ${medium({ width: "100%", padding: "10px" })}
  `,

  InfoContainer: styled.div`
    width: 55%;
    padding: 20px;

    overflow: auto;

    ::-webkit-scrollbar {
      width: 10px;
    }

    ::-webkit-scrollbar-track {
      background-color: var(--magnolia);
      border-radius: 5px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--bunker-opaque);
      border: 2px solid var(--magnolia);
      border-radius: 5px;
    }

    ${large({ display: "none" })}
  `,

  Header: styled.h3`
    font-size: 1.8rem;
    font-weight: 600;
    margin: 5px;
    margin-top: 0;
  `,

  Total: styled.p`
    margin-left: auto;
    font-size: 1.8rem;
    font-weight: 500;
  `,

  Wrapper: styled.div`
    width: 100%;
    padding: 10px 5px;

    border-top: solid 1px var(--bunker-opaque);
  `,

  InfoWrapper: styled.div`
    display: flex;
    justify-content: space-between;
  `,

  Info: styled.p`
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 5px;
  `,

  Address: styled.div`
    font-size: 1.8rem;
    font-weight: 500;
    min-height: 70px;
    margin: 10px 0;
  `,

  AddressInfo: styled.p`
    font-size: 1.6rem;
    margin-top: 2px;
    font-weight: 500;
  `,

  ProdHeader: styled.div`
    width: 100%;
    padding: 5px;
    font-size: 1.6rem;
    font-weight: 600;

    display: grid;
    grid-template-columns: 50% 20% 20%;
    column-gap: 10px;

    span:nth-child(n + 2) {
      text-align: center;
    }
  `,

  ProdContainer: styled.div`
    width: 100%;
    padding: 5px 0;

    display: grid;
    grid-template-columns: 50% 20% 20%;
    align-items: center;
    column-gap: 10px;
  `,

  ProdInfo: styled.div`
    display: flex;
    align-items: center;
  `,

  ImageContainer: styled.div`
    width: 60px;
    height: 60px;
    margin-right: 5px;
    overflow: hidden;
    border-radius: 5px;

    background-color: #fff;
    box-shadow: 0 0 2px var(--bunker-opaque);

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Image: styled.img`
    height: 40px;
  `,

  Name: styled.h2`
    font-size: 1.4rem;
    font-weight: 600;
  `,

  Quantity: styled.p`
    font-size: 1.4rem;
  `,

  Price: styled.p`
    font-size: 1.4rem;
    text-align: center;
  `,
}

export default Style
