import React from "react"

import Style from "./style"

const PageNotFound = () => {
  return (
    <Style.Container>
      <Style.Image src="icons/NotFoundIcon.png" />
      <Style.Title>Desculpe</Style.Title>
      <Style.Text>Não encontramos a página que você está procurando</Style.Text>
      <Style.Redirect href="/">Voltar ao início</Style.Redirect>
    </Style.Container>
  )
}

export default PageNotFound
