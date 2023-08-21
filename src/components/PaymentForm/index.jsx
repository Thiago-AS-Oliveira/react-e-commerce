import React from "react"

import { PaymentElement } from "@stripe/react-stripe-js"

import Style from "./style"

const PaymentForm = ({ submit, isProcessing, changeComponent }) => {
  return (
    <Style.Form onSubmit={submit}>
      <Style.Title>Preencha os dados de Pagamento</Style.Title>
      <Style.InfoContainer>
        Cartão Fake
        <Style.Info>4242 4242 4242 4242</Style.Info>
        <Style.Info>Validade: 12/34 CVC: 123</Style.Info>
      </Style.InfoContainer>

      <PaymentElement options={{ layout: "tabs" }} />

      <Style.ButtonWrapper>
        <Style.Button
          bgColor="var(--bunker-opaque)"
          onClick={(e) => {
            e.preventDefault()
            changeComponent(0)
          }}
        >
          Voltar
        </Style.Button>
        <Style.Button isProcessing={isProcessing}>
          {!isProcessing ? "Efetuar Pagamento" : "Processando seu pagamento..."}
        </Style.Button>
      </Style.ButtonWrapper>
    </Style.Form>
  )
}

export default PaymentForm
