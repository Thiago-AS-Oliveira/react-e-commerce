import styled from "styled-components"
import { Link } from "react-router-dom"
import { large } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 280px;
    height: 100%;
    padding-bottom: 20px;

    background-color: var(--magnolia);

    display: none;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    transition: 300ms;
    transform: ${({ showMenu }) =>
      (showMenu && "translateX(0)") || "translateX(-100%)"};
    position: fixed;
    top: 0;
    left: 0;

    overflow: auto;
    z-index: 2;

    ${large({ display: "flex" })}
  `,

  Profile: styled.div`
    width: 100%;
    padding: 10px;
    background-color: var(--bunker);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: 20px;

    color: var(--magnolia);
    position: relative;

    cursor: pointer;
  `,

  ProfileIcon: styled.span`
    font-size: 5.5rem;
    height: 5.5rem;
    position: relative;

    margin-bottom: 5px;

    color: var(--bunker);
    color: var(--magnolia);
    position: relative;
  `,

  UserInfo: styled.p`
    font-size: 2rem;
  `,

  CloseIcon: styled.span`
    font-size: 1.8rem;
    position: absolute;
    top: 15px;
    right: 20px;
  `,

  ProfileLinks: styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    color: var(--magnolia);

    transition: 500ms;
  `,

  Title: styled.span`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 10px 20px;
  `,

  MenuIcon: styled.div`
    font-size: 2.2rem;
    height: 2.2rem;
    margin-right: 5px;
  `,

  MenuItem: styled(Link)`
    font-size: 1.8rem;
    text-decoration: none;
    color: var(--bunker);

    display: flex;
    align-items: center;

    margin: 10px 20px;
  `,

  Logout: styled.button`
    width: 48px;
    margin: 10px 20px;
    font-size: 1.6rem;
    font-weight: 700;

    color: var(--bunker);
    background-color: transparent;

    display: flex;
    justify-content: space-between;

    border: none;
    outline: none;
    cursor: pointer;
  `,
}

export default Style
