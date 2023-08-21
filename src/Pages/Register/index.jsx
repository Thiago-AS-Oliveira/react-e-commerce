import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { useSelector } from "react-redux"
import { selectUser } from "../../redux/user/selectors"

import Style from "./style"
import useRequests from "../../hooks/useRequests"
import Notification from "../../components/Notification"

const Register = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const previousPage = location.state !== null ? location.state : "/"

  const { currentUser } = useSelector(selectUser)
  const { request } = useRequests()

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")
  const [pwdMessage, setPwdMessage] = useState("")
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const { confirmPassword, ...data } = formData

    if (data.password === confirmPassword) {
      setIsLoading(true)
      try {
        const res = await request.post("/auth/register", data)

        setMessage(res.data)

        setFormData({
          username: "",
          name: "",
          lastname: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
      } catch (error) {
        setMessage(error.response.data)
        setError(true)
      }

      setIsLoading(false)
    }
  }

  useEffect(() => {
    currentUser && navigate(previousPage)
  }, [currentUser])

  useEffect(() => {
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword
      ? setPwdMessage("As senhas não correspondem")
      : setPwdMessage("")
  }, [formData.password, formData.confirmPassword])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("")
      setError(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [message])

  return (
    <>
      {message && <Notification message={message} error={error} top="30px" />}
      <Style.Container>
        <Style.Logo to="/">Dev Store</Style.Logo>

        <Style.Form onSubmit={handleSubmit}>
          <Style.Title>Criar Conta</Style.Title>

          <Style.Input
            required
            name="username"
            type="text"
            placeholder="Nome de usuário"
            value={formData.username}
            onChange={handleInputChange}
          />

          <Style.Input
            required
            name="email"
            type="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleInputChange}
          />

          <Style.Input
            required
            name="name"
            type="text"
            placeholder="Nome"
            value={formData.name}
            onChange={handleInputChange}
          />

          <Style.Input
            required
            name="lastname"
            type="text"
            placeholder="Sobrenome"
            value={formData.lastname}
            onChange={handleInputChange}
          />

          <Style.Input
            required
            name="password"
            type="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleInputChange}
          />

          <Style.InputContainer>
            <Style.Input
              required
              name="confirmPassword"
              type="password"
              placeholder="Repita a Senha"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <Style.PwdMessage>{pwdMessage}</Style.PwdMessage>
          </Style.InputContainer>

          <Style.ButtonContainer>
            <Style.Button disabled={isLoading}>
              {isLoading ? "Cadastrando..." : "Continuar"}
            </Style.Button>

            <Style.RegisterText>
              Já tem conta ?{" "}
              <Style.RedirectLink to="/login">Entrar</Style.RedirectLink>
            </Style.RegisterText>
          </Style.ButtonContainer>
        </Style.Form>
      </Style.Container>
    </>
  )
}

export default Register
