import styled from "styled-components"
import { large } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 70vh;
    padding: 0 20px 10px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: space-between;
  `,

  Top: styled.div`
    width: 100%;
    padding-top: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: var(--magnolia);

    ${large({
      zIndex: "2",
      paddingTop: "10px",
      position: "sticky",
      left: "20px",
      top: "50px",
    })}
  `,

  Title: styled.h2`
    width: 100%;

    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 20px;

    ${large({ display: "none" })}
  `,

  Icon: styled.span`
    font-size: 2rem;
    height: 2rem;
    margin-right: 5px;

    ${large({
      fontSize: "1.8rem",
      height: "1.8rem",
    })}
  `,

  FilterIcon: styled.span`
    width: 30%;
    padding: 10px 20px;

    font-size: 1.8rem;

    display: flex;
    align-items: center;

    ${large({
      width: "fit-content",
      padding: "10px",
      fontSize: "1.4rem",
    })}
  `,

  OrderByContainer: styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;

    ${large({ padding: "10px" })}
  `,

  OrderBy: styled.select`
    font-size: 1.6rem;
    height: 1.6rem;

    background-color: transparent;
    cursor: pointer;
    outline: none;
    border: none;

    ${large({
      fontSize: "1.4rem",
      height: "1.4rem",
    })}
  `,

  OrderByOption: styled.option``,

  Main: styled.div`
    width: 100%;
    position: relative;

    display: flex;
    justify-content: space-between;
  `,

  List: styled.div`
    width: 68%;

    display: flex;
    flex-wrap: wrap;

    ${large({
      justifyContent: "space-between",
      padding: "10px 5px ",
      width: "100%",
    })}
  `,
}

export default Style
