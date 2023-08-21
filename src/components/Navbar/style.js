import styled, { keyframes } from "styled-components"
import { large, medium, small } from "../../responsivity"
import { Link } from "react-router-dom"

const fadeIn = keyframes`
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
`

const DropDownMenu = styled.div`
  width: 280px;
  border-radius: 5px;

  color: var(--bunker);
  background-color: #fff;
  box-shadow: 0 1px 2px 0.5px var(--bunker-opaque);

  animation: ${fadeIn} 500ms ease-in-out;

  display: none;
  flex-direction: column;

  position: absolute;
  ${({ position }) => position};
  z-index: 2;
`

const Style = {
  Container: styled.div`
    width: 100%;
    background-color: var(--magnolia);
    box-shadow: 0 0 3px var(--bunker-opaque);

    position: sticky;
    top: 0;
    z-index: 3;
  `,

  Top: styled.div`
    width: 100%;
    height: 55px;
    padding: 0 30px;
    background-color: var(--bunker);

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${large({
      padding: "0 20px",
    })}
  `,

  Bottom: styled.div`
    width: 100%;
    height: 45px;
    padding: 0 30px;
    background-color: var(--dark-gray);

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${large({
      height: "0",
      padding: "0 20px",
      backgroundColor: "var(--bunker)",
    })}
  `,

  MenuIcon: styled.span`
    font-size: 3rem;
    height: 3rem;
    position: relative;
    color: var(--magnolia);
    display: none;

    ${large({ display: "block" })}
  `,

  CartLink: styled(Link)`
    font-size: 2.5rem;
    height: 2.5rem;
    position: relative;
    color: var(--magnolia);
    display: none;

    ${large({ display: "block" })}
  `,

  Logo: styled(Link)`
    font-size: 2.5rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--magnolia);

    ${large({ display: "none" })}
  `,

  Links: styled.div`
    display: flex;
    align-items: center;

    ${large({ display: "none" })}
  `,

  MenuLink: styled(Link)`
    font-size: 1.2rem;
    text-decoration: none;
    margin: 0 10px;
    color: var(--magnolia);

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: 300ms ease-in-out;

    :hover {
      scale: 1.1;
      color: var(--picton-blue);
    }
  `,

  Quantity: styled.span`
    width: 16px;
    height: 16px;
    border-radius: 50%;

    font-size: 1.3rem;
    background-color: var(--picton-blue);

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -6px;
    right: -6px;
  `,

  Icon: styled.span`
    font-size: 2.2rem;
    height: 2.2rem;
    position: relative;
  `,

  UserArea: styled.div`
    padding: 0 10px;
    display: flex;
    align-items: center;
  `,

  UserIcon: styled.span`
    font-size: 3.5rem;
    height: 3.5rem;
    margin-right: 3px;
    color: var(--magnolia);
  `,

  DropDownMenu,

  Content: styled.div`
    display: flex;
    flex-direction: column;
    position: relative;

    &:hover ${DropDownMenu} {
      display: flex;
    }
  `,

  Name: styled.p`
    color: var(--magnolia);
    font-size: 1.4rem;
    cursor: pointer;

    display: flex;
    align-items: center;
  `,

  UserInfo: styled.div`
    display: flex;
    align-items: center;
    padding: 15px 10px;

    .userIcon {
      font-size: 50px;
      height: 50px;
    }

    span {
      font-size: 1.4rem;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  `,

  MenuWrapper: styled.div`
    padding: ${({ padding }) => padding || "5px 0"};
    border-top: 1px solid #2224;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
  `,

  UserLink: styled(Link)`
    font-size: 1.4rem;
    font-weight: 400;
    color: var(--magnolia);
    transition: 200ms;

    :hover {
      text-decoration: none;
      color: var(--picton-blue);
    }
  `,

  MenuItem: styled(Link)`
    width: 100%;
    height: 35px;
    padding: 0 20px;

    font-size: 1.6rem;
    text-decoration: none;
    color: var(--bunker);

    display: flex;
    align-items: center;
    transition: 300ms;

    :hover {
      background-color: #2221;
    }
  `,

  Categorie: styled.span`
    border-radius: 3px;
    padding: 5px;
    font-size: 1.6rem;
    color: var(--magnolia);
    background-color: #2223;
    cursor: pointer;
    display: flex;
    align-items: center;

    position: relative;

    &:hover ${DropDownMenu} {
      display: flex;
    }

    ${large({ display: "none" })}
  `,

  SearchForm: styled.form`
    width: 450px;
    height: 30px;
    padding: 0 10px;
    border-radius: 5px;

    background-color: #fff;
    box-shadow: 0 0 3px var(--bunker-opaque);

    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;

    z-index: 1;

    transition: all 300ms ease;

    ${large({
      width: "70%",
      position: "absolute",
      top: "12.5px",
      left: "15%",
    })}

    ${small({
      width: "60%",
      left: "20%",
    })}
  `,

  Input: styled.input`
    height: 90%;
    width: 90%;
    outline: none;
    border: none;

    background-color: #fff;
    color: var(--bunker);
  `,

  Button: styled.button`
    border: none;
    outline: none;

    font-size: 1.8rem;
    height: 1.8rem;
    background-color: transparent;
    color: var(--bunker);

    cursor: pointer;
  `,
}

export default Style

// const Style = {
//   Container: styled.div`
//     width: 100%;
//     box-shadow: 0 0 3px var(--bunker-opaque);

//     position: sticky;
//     top: 0;
//     z-index: 3;
//   `,

//   Top: styled.div`
//     width: 100%;
//     height: 55px;
//     padding: 0 30px;

//     display: grid;
//     grid-template-columns: repeat(3, 1fr);
//     align-items: center;
//     background-color: var(--bunker);

//     position: relative;

//     ${medium({
//       height: "100px",
//       padding: "0 20px",
//       gridTemplateColumns: "repeat(2, 1fr)",
//       gridTemplateRows: "repeat(2, 1fr)",
//       "div:nth-child(2)": {
//         gridColumn: "1/4",
//         gridRow: "2",
//       },
//     })}
//   `,

//   Bottom: styled.div`
//     width: 100%;
//     height: 35px;
//     padding: 0 30px;

//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     background-color: var(--dark-gray);

//     ${large({ padding: "20px" })}

//     ${medium({ display: "none" })}
//   `,

//   Wrapper: styled.div`
//     height: 100%;
//     display: flex;
//     align-items: center;

//     ${large({ justifyContent: "end" })}
//   `,

//   SearchForm: styled.form`
//     width: 30vw;
//     height: 35px;
//     padding: 0 10px;
//     border-radius: 5px;

//     background-color: #fff;

//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     overflow: hidden;

//     z-index: 1;

//     transition: all 300ms ease;

//     ${medium({
//       width: "100%",
//       height: "40px",
//     })}
//   `,

//   Input: styled.input`
//     height: 90%;
//     width: 90%;
//     outline: none;
//     border: none;

//     background-color: #fff;
//     color: var(--bunker);
//   `,

//   Button: styled.button`
//     border: none;
//     outline: none;

//     font-size: 1.8rem;
//     height: 1.8rem;
//     background-color: transparent;
//     color: var(--bunker);

//     cursor: pointer;
//   `,

//   PromoLink: styled(Link)`
//     margin-left: auto;

//     ${medium({ display: "none" })}
//   `,

//   PromoImage: styled.img`
//     height: 40px;
//   `,

//   IconLink: styled(Link)`
//     display: none;

//     font-size: 2.4rem;
//     height: 2.4rem;

//     position: relative;

//     color: var(--magnolia);
//     margin: 0 7px;

//     ${medium({ display: "flex" })}
//   `,

//   Quantity: styled.span`
//     width: 18px;
//     height: 18px;
//     border-radius: 50%;

//     font-size: 1.5rem;
//     background-color: var(--picton-blue);

//     display: flex;
//     align-items: center;
//     justify-content: center;

//     position: absolute;
//     top: -10px;
//     right: -10px;
//   `,

//   Icon: styled.span`
//     display: none;

//     font-size: 2.8rem;
//     height: 2.8rem;

//     color: var(--magnolia);
//     margin: 0 7px;

//     ${large({ display: "flex" })}
//   `,

//   BottomWrapper: styled.div`
//     display: flex;
//     align-items: center;
//   `,

//   UserMenu,

//   UserContent: styled.div`
//     font-size: 1.7rem;
//     font-weight: 500;

//     color: var(--magnolia);

//     display: flex;
//     align-items: center;

//     cursor: pointer;
//     transition: 300ms;
//     position: relative;

//     :hover {
//       color: #fffa;
//     }

//     &:hover ${UserMenu} {
//       display: flex;
//     }
//   `,

//   UserIcon: styled.span`
//     font-size: ${({ fontSize }) => fontSize || "2.8rem"};
//     height: ${({ fontSize }) => fontSize || "2.8rem"};
//     margin-right: 5px;
//   `,

//   UserWrapper: styled.div`
//     padding: ${({ padding }) => padding || "5px 0"};
//     border-top: 1px solid #2224;

//     display: flex;
//     flex-wrap: wrap;
//     align-items: center;
//   `,

//   InfoContainer: styled.div`
//     display: flex;
//     flex-direction: column;
//     width: 75%;
//   `,

//   UserInfo: styled.span`
//     font-size: 1.6rem;
//     line-break: auto;
//   `,

//   UserLink: styled(Link)`
//     width: 100%;
//     height: 35px;
//     padding: 0 20px;

//     font-size: 1.6rem;
//     text-decoration: none;
//     color: var(--bunker);

//     display: flex;
//     align-items: center;
//     transition: 300ms;

//     :hover {
//       background-color: #2221;
//     }
//   `,

//   MenuItem: styled(Link)`
//     font-size: 1.8rem;
//     text-decoration: none;
//     color: var(--magnolia);
//     margin-right: 10px;

//     display: flex;
//     justify-content: center;
//     align-items: center;

//     :hover {
//       color: #fffa;
//     }
//   `,

//   CategorieLink: styled(Link)`
//     font-size: 1.6rem;
//     margin-right: 10px;
//     text-decoration: none;
//     color: var(--magnolia);

//     transition: 300ms;

//     :hover {
//       color: var(--picton-blue);
//       text-decoration: underline;
//     }
//   `,
// }

// export default Style
