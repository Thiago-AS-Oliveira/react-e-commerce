import React from "react"
import Style from "./style"

const SearchMessageError = () => {
  return (
    <Style.Container>
      <Style.Title>Desculpe</Style.Title>
      <Style.Text>Não há produtos que correspondam à sua busca</Style.Text>
    </Style.Container>
  )
}

export default SearchMessageError
