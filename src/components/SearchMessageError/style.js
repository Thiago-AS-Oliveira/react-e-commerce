import styled from "styled-components"

const Style = {
  Container: styled.div`
    width: 100%;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  `,

  Title: styled.h2`
    margin-bottom: 5px;
    font-size: 3rem;
    font-weight: 300;
    color: #141b1eaa;
  `,
  Text: styled.p`
    font-size: 2rem;
    font-weight: 100;
    color: #141b1eaa;
  `,
}

export default Style
