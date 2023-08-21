import { Link } from "react-router-dom"
import styled from "styled-components"
import { large, medium } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 50px 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${large({ padding: "20px 10px" })}
  `,

  Title: styled.h2`
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 20px;
  `,

  Content: styled.div`
    width: 80%;
    min-height: 100%;

    display: flex;
    flex-direction: column;

    ${large({
      width: "90%",
    })}

    ${medium({
      width: "100%",
    })}
  `,

  OrderContainer: styled.div`
    width: 100%;
    padding: 5px 20px;
    margin-bottom: 20px;
    border-radius: 5px;

    background-color: #fff;
    box-shadow: 0 0 4px var(--bunker-opaque);

    ${large({ padding: "5px 15px" })}
  `,

  OrderHeader: styled.div`
    width: 100%;
    height: 30px;
    padding: 0 15px;
    border-bottom: 1px solid var(--bunker-opaque);

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${medium({
      height: "auto",
      height: "65px",
      flexDirection: "column-reverse",
      alignItems: "start",
      padding: "10px",
    })}
  `,

  Wrapper: styled.div`
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    position: relative;

    ${medium({ padding: "5px 10px" })}
  `,

  OderId: styled.h2`
    font-size: 1.4rem;
    font-weight: 500;
  `,

  InfoWrapper: styled.div`
    width: 40%;
    height: 60px;

    display: flex;
    flex-direction: column;
    ${medium({ width: "100%", marginBottom: "10px" })}
  `,

  OrderInfo: styled.p`
    font-size: 1.6rem;
    margin-bottom: 2px;
  `,

  ShippingProgressBar: styled.div`
    width: 75%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    left: calc(25% / 2);

    ${medium({
      width: "10px",
      height: "80%",
      left: "calc(15px + 5px)",
      padding: "20px 0",
      flexDirection: "column",
    })}
  `,

  ProgressBar: styled.div`
    height: 10px;
    width: ${({ progression }) => progression || "100%"};
    background-color: ${({ bgColor }) => bgColor || "var(--dark-gray)"};

    position: absolute;
    ${({ progression }) =>
      medium({
        width: "100%",
        height: progression || "100%",
      })}
  `,

  Status: styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${medium({
      width: "100%",
      padding: "20px 0",
      flexDirection: "row",
    })}
  `,

  IconCircle: styled.div`
    height: 50px;
    width: 50px;
    margin-bottom: 5px;
    border-radius: 50%;

    font-size: 2rem;
    color: var(--magnolia);
    background-color: ${({ status }) =>
      status ? "var(--picton-blue)" : "var(--dark-gray)"};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    z-index: 1;
    position: relative;

    ${medium({
      height: "30px",
      width: "30px",
      marginRight: "5px",
    })}
  `,

  StatusLabel: styled.span`
    font-size: 1.4rem;
    color: #2229;
  `,

  ProductsContainer: styled.div`
    width: 100%;
    padding: 20px 15px;
    overflow: hidden;

    border-top: 1px solid var(--bunker-opaque);
    display: flex;
    align-items: space-between;
    flex-wrap: wrap;
    position: relative;

    ${({ isOpen }) =>
      large({
        height: isOpen ? "fit-content" : "0",
        padding: "40px 15px 30px",
        paddingBottom: !isOpen && "0",
      })}
  `,

  OpenProducts: styled.span`
    width: 100px;
    height: 1.6rem;
    font-size: 1.6rem;
    font-weight: 500;
    position: absolute;
    top: 10px;
    left: calc(50% - 50px);
    display: none;
    align-items: center;
    ${large({
      display: "flex",
    })}
  `,

  Product: styled.div`
    width: calc(100% / 3);
    padding: 5px;

    display: flex;
    align-items: center;

    ${large({ width: "50%", padding: "5px 0" })}

    ${medium({ width: "100%" })}
  `,

  ImageContainer: styled.div`
    width: 100px;
    height: 100px;

    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 3px var(--bunker-opaque);

    margin-right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    ${medium({ width: "65px", height: "65px" })}
  `,

  Image: styled.img`
    height: 65%;
  `,

  ProdInfoContainer: styled.div`
    height: 85%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  ProdInfo: styled.p`
    font-size: 1.5rem;
  `,

  Pagination: styled.div`
    height: 50px;
    width: 250px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  ChangePage: styled(Link)`
    padding: 5px 15px;
    border-radius: 5px;

    font-size: 1.8rem;
    text-decoration: none;
    color: var(--bunker);

    margin-left: ${({ left }) => left};

    display: flex;
    align-items: center;
    justify-content: center;
    transition: 300ms;

    :hover {
      background-color: #2222;
    }
  `,

  IconLink: styled.span`
    font-size: 2rem;
    height: 2rem;
  `,
}

export default Style
