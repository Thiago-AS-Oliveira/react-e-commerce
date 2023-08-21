import styled from "styled-components"
import { large, medium, small } from "../../responsivity"

const Style = {
  Container: styled.div`
    width: 100%;
    min-height: 90vh;
    padding: 50px 100px;

    display: flex;
    flex-direction: column;
    align-items: center;

    ${large({
      padding: "30px 20px 50px",
      flexDirection: "column",
    })}
  `,

  SectionHeader: styled.div`
    font-size: 2.2rem;
    font-weight: 500;
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${large({ fontSize: "1.8rem" })}
  `,

  Favorites: styled.div`
    width: 80%;
    padding: 0;

    ${large({ width: "60%" })}

    ${medium({ width: "80%" })}

    ${small({ width: "100%" })}
  `,

  FavoritesHeader: styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 50% repeat(2, 25%);
    justify-items: center;

    ${large({ display: "none" })}
  `,
  HeaderWrapper: styled.span`
    font-size: 1.6rem;
    font-weight: 500;
    padding: 10px;
    justify-self: ${({ first }) => (first ? "start" : "")};
  `,

  FavoritesBody: styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,
}
export default Style
