import styled from "styled-components"
import { large, medium } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 70vh;
    padding: 40px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${large({ padding: "20px 0" })}
  `,

  Categorie: styled.span`
    width: 80%;
    font-size: 1.8rem;
    margin-bottom: 15px;

    ${large({ width: "60%" })}
  `,

  ProductContainer: styled.div`
    width: 80%;
    height: 65vh;
    margin-bottom: 20vh;

    display: flex;
    justify-content: space-between;

    position: relative;

    ${large({
      height: "fit-content",
      width: "60%",
      flexDirection: "column",
      marginBottom: "50px",
    })}

    ${medium({
      width: "80%",
    })}
  `,

  ImageContainer: styled.div`
    width: 50%;
    height: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 3px var(--bunker-opaque);
    overflow: hidden;

    display: flex;
    align-items: center;
    justify-content: center;

    ${large({
      height: "40vh",
      width: "100%",
    })}
  `,

  Image: styled.img`
    height: 50%;

    ${large({ height: "65%" })}
  `,

  InfoContainer: styled.div`
    width: 50%;
    height: 100%;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;

    ${large({
      width: "100%",
      alignItems: "center",
    })}
  `,

  WishListIcon: styled.span`
    font-size: 2rem;
    height: 2rem;
    color: var(--picton-blue);

    cursor: pointer;
    position: absolute;
    top: 1vw;
    right: 2vw;

    ${large({
      top: "-35px",
    })}
  `,

  TopContainer: styled.div`
    padding: 10px;
    box-shadow: 0 0.5px 0 var(--bunker-opaque);

    display: flex;
    flex-direction: column;

    ${large({ alignItems: "center" })}
  `,

  Name: styled.h2`
    width: 80%;
    margin-bottom: 10px;
    font-size: 1.8vw;
    font-weight: 500;

    ${large({
      fontSize: "1.8rem",
      textAlign: "center",
      width: "90%",
    })}
  `,

  Description: styled.p`
    font-size: 1.2vw;
    width: 90%;
    margin-top: 20px;

    ${large({
      fontSize: "1.4rem",
      textAlign: "center",
    })}
  `,

  BottomContainer: styled.div`
    padding: 10px;
  `,

  Wrapper: styled.div`
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;

    ${large({
      alignItems: "center",
    })}
  `,

  OldPrice: styled.span`
    height: 1.6rem;
    font-size: 1.6rem;
    font-weight: 300;

    color: var(--bunker-opaque);
    text-decoration: line-through;
  `,

  Price: styled.span`
    font-size: 2.5rem;
    font-weight: 300;
  `,

  InfoLabel: styled.span`
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--bunker-opaque);
  `,

  Shipping: styled.span`
    font-size: 2.2rem;
    font-weight: 300;
  `,

  QuantityContainer: styled.div`
    width: 100px;
    margin-top: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  IncreaseDecrease: styled.button`
    font-size: 2.2rem;

    background-color: transparent;
    outline: none;
    border: none;

    display: flex;
    align-content: center;
    align-items: center;

    cursor: pointer;
  `,

  Quantity: styled.span`
    font-size: 2rem;
  `,

  Button: styled.button`
    padding: 10px 30px;
    outline: none;
    border: none;

    font-size: 1.6rem;
    color: var(--magnolia);
    background-color: var(--picton-blue);
    cursor: pointer;
  `,
}

export default Style
