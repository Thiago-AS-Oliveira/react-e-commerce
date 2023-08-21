import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/user/selectors"
import { useNavigate } from "react-router-dom"
import useRequests from "../../hooks/useRequests"

import Style from "./style"
import { AiOutlineClose } from "react-icons/ai"
import { loginSuccess } from "../../redux/user/slice"
import Notification from "../Notification"

const ManageUserInfo = ({ changeComponent }) => {
  const { currentUser } = useSelector(selectUser)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { request } = useRequests()

  const [isProcessing, setIsProcessing] = useState(false)
  const [notify, setNotify] = useState(false)
  const [message, setMessage] = useState("")
  const [erro, setErro] = useState(false)

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

  const formIsEmpty = Object.values(formData).every((value) => value === "")

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsProcessing(true)

    const { confirmPassword, ...others } = formData
    const data = {}

    if (formIsEmpty) {
      setErro(true)
      setNotify(true)
      setMessage("Dados Inválidos !")
    } else if (
      (!formIsEmpty && confirmPassword === others.password) ||
      (!confirmPassword && !others.password)
    ) {
      for (let key in others) {
        if (others[key] !== "") {
          data[key] = others[key]
        }
      }

      if (Object.keys(data).length > 0) {
        try {
          const res = await request.put(`/users/${currentUser._id}`, data, {
            headers: { token: `Bearer ${currentUser.accessToken}` },
          })

          dispatch(
            loginSuccess({
              user: {
                accessToken: currentUser.accessToken,
                ...res.data.userData,
              },
            })
          )

          setFormData({
            username: "",
            name: "",
            lastname: "",
            email: "",
            password: "",
            confirmPassword: "",
          })

          setNotify(true)
          setErro(false)
          setMessage(res.data.message)
        } catch (error) {
          console.log(error)
          if (error.response.status === 403) {
            logout(dispatch)
            navigate("/login", { state: `/perfil/${currentUser._id}` })
          }
        }
      }
    } else {
      setErro(true)
      setNotify(true)
      setMessage("As senhas devem ser iguais !")
    }

    setIsProcessing(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotify(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [notify])

  return (
    <>
      {notify && (
        <Notification error={erro} message={message} mobile top="110px" />
      )}
      <Style.CloseIcon onClick={() => changeComponent(0)}>
        <AiOutlineClose />
      </Style.CloseIcon>

      <Style.Form onSubmit={handleSubmit}>
        <Style.InputContainer>
          <Style.Label htmlFor="username">Nome de usuário:</Style.Label>
          <Style.Input
            id="username"
            name="username"
            type="text"
            placeholder={currentUser.username}
            value={formData.username}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="email">E-mail:</Style.Label>

          <Style.Input
            id="email"
            name="email"
            type="text"
            placeholder={currentUser.email}
            value={formData.email}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="name">Nome:</Style.Label>

          <Style.Input
            id="name"
            name="name"
            type="text"
            placeholder={currentUser.name}
            value={formData.name}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="lastname">Sobrenome:</Style.Label>

          <Style.Input
            id="lastname"
            name="lastname"
            type="text"
            placeholder={currentUser.lastname}
            value={formData.lastname}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="password">Senha:</Style.Label>

          <Style.Input
            id="password"
            name="password"
            type="password"
            placeholder="Digite a nova senha"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="confirmPassword">Confirme a senha:</Style.Label>

          <Style.Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Repita a nova senha"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.Button isProcessing={isProcessing}>
          {isProcessing ? "Modificando..." : "Confirmar alterações"}
        </Style.Button>
      </Style.Form>
    </>
  )
}

export default ManageUserInfo
