import React from "react"

import Style from "./style"

const EmptyElement = ({ image, text, title }) => {
  return (
    <Style.Container>
      <Style.Header>{title}</Style.Header>

      <Style.Main>
        <Style.Image src={image} alt={text} />

        <Style.TextContainer>
          <Style.Text>{text}</Style.Text>
          <Style.Redirect to="/">Voltar ao Inicio</Style.Redirect>
        </Style.TextContainer>
      </Style.Main>
    </Style.Container>
  )
}

export default EmptyElement
