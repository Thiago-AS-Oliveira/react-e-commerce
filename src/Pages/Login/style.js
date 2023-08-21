import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"
import { large, medium, small } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;

    background-image: url("/backgrounds/bg1.png");
    background-size: cover;
    background-position: center;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Logo: styled(Link)`
    font-size: 3rem;
    font-weight: 500;
    margin: 50px;

    text-decoration: none;
    color: var(--bunker);
  `,

  Info: styled.p`
    font-size: 1.6rem;
    margin-bottom: 10px;
  `,

  Form: styled.form`
    width: 40%;
    height: 350px;
    padding: 20px;
    border-radius: 5px;

    background-color: #fff;
    box-shadow: 0 0 3px var(--bunker-opaque);

    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    ${large({ width: "60%" })}

    ${medium({ width: "80%" })}

    ${small({ width: "90%" })}
  `,

  Title: styled.h2`
    font-size: 2.6rem;
    font-weight: 500;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Input: styled.input`
    width: 80%;
    height: 40px;
    padding: 0 10px;

    font-size: 1.4rem;

    border: none;
    outline: none;
    border-bottom: 1px solid var(--bunker-opaque);

    ${large({
      width: "90%",
    })}
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Button: styled.button`
    width: fit-content;
    padding: 10px 70px;
    margin-bottom: 10px;

    font-size: 1.6rem;
    color: var(--magnolia);
    background-color: var(--picton-blue);

    border: none;
    outline: none;
    cursor: pointer;

    &:disabled {
      opacity: 0.5;
    }
  `,

  RegisterText: styled.span`
    font-size: 1.4rem;
  `,

  RedirectLink: styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    color: var(--picton-blue);
  `,
}

export default Style
