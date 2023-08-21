import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import useRequests from "../../hooks/useRequests"

import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/user/selectors"
import { cleanError } from "../../redux/user/slice"

import Style from "./style"
import Notification from "../../components/Notification"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [tempMessage, setTempMessage] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()
  const previousPage = location.state !== null ? location.state : "/"

  const { isFetching, error, message, currentUser } = useSelector(selectUser)
  const dispatch = useDispatch()
  const { login } = useRequests()

  useEffect(() => {
    currentUser && navigate(previousPage)
  }, [currentUser])

  useEffect(() => {
    if (tempMessage) {
      const timer = setTimeout(() => {
        dispatch(cleanError())
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message])

  const handleSubmit = (e) => {
    e.preventDefault()

    setTempMessage(true)

    login(dispatch, { email, userPassword: password })
  }

  return (
    <Style.Container bg="backgrounds/bg1.png">
      <Style.Logo to="/">Dev Store</Style.Logo>

      <Style.Info>Email: usuario@email.com - Senha: 123</Style.Info>
      {message && <Notification message={message} error={error} top="30px" />}
      <Style.Form onSubmit={handleSubmit}>
        <Style.Title>Entrar</Style.Title>
        <Style.Input
          required
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Style.Input
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Style.ButtonContainer>
          <Style.Button disabled={isFetching}>
            {!isFetching ? "Continuar" : "Fazendo Login..."}
          </Style.Button>

          <Style.RegisterText>
            Não tem conta ?{" "}
            <Style.RedirectLink to="/cadastro">Cadastre-se</Style.RedirectLink>
          </Style.RegisterText>
        </Style.ButtonContainer>
      </Style.Form>
    </Style.Container>
  )
}

export default Login
