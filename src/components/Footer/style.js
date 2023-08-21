import styled from "styled-components"
import { large, small } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    background-color: #fff;
    border-top: solid 1px var(--bunker-opaque);

    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `,

  BackToTop: styled.a`
    padding: 5px 20px;
    font-size: 1.6rem;
    border-radius: 10px 10px 0 0;

    color: var(--magnolia);
    background-color: var(--bunker-opaque);

    text-decoration: none;

    cursor: pointer;
    position: absolute;
    top: calc(-1.3rem - 20px);
    z-index: 1;

    display: flex;
    align-items: center;
    justify-content: space-around;
  `,

  Main: styled.div`
    width: 100%;
    min-height: 16vw;

    padding: 20px;

    display: flex;
    justify-content: space-between;
    ${large({
      flexDirection: "column",
      minHeight: "fit-content",
    })}
  `,

  Wrapper: styled.div`
    width: calc(100% / 4);
    min-height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    overflow: hidden;

    ${large({
      alignItems: "center",
      width: "100%",
      marginBottom: "10px",
    })}
  `,

  Logo: styled.h2`
    font-size: 2.5rem;

    font-weight: 500;
  `,

  Text: styled.p`
    font-size: 1.5rem;
    word-spacing: 5px;
    width: 90%;

    ${large({ margin: "20px 0", textAlign: "center" })}
  `,

  SocialMedias: styled.div`
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${large({ width: "40%" })}

    ${small({ width: "60%" })}
  `,

  Icon: styled.span`
    font-size: 2.2rem;
    height: 2.2rem;
    color: ${({ color }) => color};
  `,

  Title: styled.h3`
    height: 3rem;
    font-size: 2rem;
    font-weight: 500;

    display: flex;
    align-items: end;

    ${large({
      height: "50px",
      alignItems: "center",
    })}
  `,

  ArrowDown: styled.span`
    display: none;
    font-size: 2.5rem;
    height: 2.5rem;
    font-weight: 500;

    ${large({ display: "block" })}
  `,

  List: styled.ul`
    height: 75%;
    width: 85%;
    list-style: none;
    transition: 300ms ease;
    overflow: hidden;

    ${({ hide }) =>
      large({
        display: "flex",
        height: hide ? "110px" : "0",
        flexDirection: "column",
        alignItems: "center",
      })};
  `,

  ListItem: styled.li`
    font-size: 1.6rem;
    font-weight: 300;
    margin-bottom: 15px;
    cursor: pointer;

    display: flex;
    align-items: center;

    ${large({ marginBottom: "10px", textAlign: "center" })}
  `,

  ListIcon: styled.span`
    font-size: 1.8rem;
    height: 1.8rem;
    margin-right: 10px;
  `,

  DevelopedBy: styled.div`
    width: 90%;
    padding: 5px;
    font-size: 1.4rem;
    border-top: solid 1px var(--bunker-opaque);

    display: flex;
    align-items: center;
    justify-content: center;
  `,

  Copyright: styled.div`
    width: 100%;
    padding: 10px;

    font-size: 1.5rem;

    color: var(--magnolia);
    background-color: var(--dark-gray);

    display: flex;
    align-items: center;
    justify-content: center;

    ${large({ textAlign: "center" })}
  `,
}

export default Style
