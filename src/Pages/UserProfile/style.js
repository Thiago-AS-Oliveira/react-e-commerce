import styled from "styled-components"
import { large, medium, small } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 50px 0 70px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${large({ padding: "20px 0 50px" })}
  `,

  InfoContainer: styled.div`
    width: 40%;
    padding: 15px;
    border-radius: 5px;
    margin-bottom: 20px;

    background-color: #fff;
    box-shadow: 0 0 2px var(--bunker-opaque);

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    ${large({ width: "60%" })}

    ${medium({ width: "80%" })}

    ${small({ width: "95%" })}
  `,

  ImageContainer: styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;

    background-color: #fff;
    box-shadow: 0 0 3px var(--bunker-opaque);

    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  `,

  UserIcon: styled.span`
    font-size: 9rem;
    height: 9rem;
    color: var(--bunker-opaque);
  `,

  Name: styled.h2`
    font-size: 2rem;
  `,

  Info: styled.p`
    font-size: 1.6rem;
    margin-top: 5px;
  `,

  OptionsContainer: styled.div`
    width: 60%;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 2px var(--bunker-opaque);

    display: flex;
    flex-direction: column;
    align-items: center;

    position: relative;

    ${large({ width: "80%" })}

    ${medium({ width: "90%" })} 
    
    ${small({ width: "95%" })}
  `,

  CloseIcon: styled.span`
    font-size: 1.7rem;
    height: 1.7rem;
    color: var(--bunker-opaque);
    transition: 300ms;

    cursor: pointer;
    position: absolute;
    top: 15px;
    right: 15px;

    :hover {
      color: var(--bunker);
    }
  `,

  Options: styled.div`
    width: 100%;
    height: 50px;
    padding: 20px;
    transition: 300ms;

    font-size: 1.7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;

    :hover {
      background-color: #0001;
    }
  `,
}

export default Style
