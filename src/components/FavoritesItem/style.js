import styled from "styled-components"
import { Link } from "react-router-dom"
import { large } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    height: 150px;
    box-shadow: 0 -1px 0 var(--bunker-opaque);

    display: grid;
    grid-template-columns: 50% repeat(2, 25%);

    ${large({
      height: "250px",
      padding: "20px 0",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    })}
  `,
  Wrapper: styled.div`
    width: 100%;
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ first }) =>
      large({
        justifyContent: first ? "start" : "space-between",
        height: "fit-content",
      })}
  `,
  ImageContainer: styled(Link)`
    width: 100px;
    height: 100px;
    border-radius: 5px;

    background-color: #fff;
    box-shadow: 0 0 3px var(--bunker-opaque);

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Image: styled.img`
    height: 60%;
  `,
  InfoContainer: styled.div`
    width: calc(100% - 105px);
    margin-left: 5px;

    display: flex;
    flex-direction: column;
  `,
  Name: styled(Link)`
    width: 100%;
    font-size: 1.8rem;
    font-weight: 500;
    text-decoration: none;
    color: var(--bunker);
  `,

  ButtonsContainer: styled.div`
    width: fit-content;

    display: flex;
    align-items: center;
    margin-top: 10px;
  `,

  FavoritesItemBtn: styled.button`
    width: fit-content;
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;

    margin-right: 10px;
    font-size: 1.2rem;
    color: ${({ color }) => (color ? color : "var(--bunker-opaque)")};
  `,
  Price: styled.span`
    font-size: 1.8rem;
    width: 100px;
    text-align: center;
  `,
  Label: styled.span`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 10px;
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
}

export default Style
