import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import useRequests from "../../hooks/useRequests"

import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/user/selectors"

import Style from "./style"
import { BiUserCircle } from "react-icons/bi"
import { MdKeyboardArrowRight } from "react-icons/md"
import ManageAddresses from "../../components/ManageAddresses"
import ManageUserInfo from "../../components/ManageUserInfo"
import Notification from "../../components/Notification"

const UserProfile = () => {
  const [indexComponent, setIndexComponent] = useState(0)
  const [message, setMessage] = useState("")
  const [notify, setNotify] = useState(false)

  const { currentUser } = useSelector(selectUser)
  const { request, logout } = useRequests()

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const excludeAccount = async () => {
    try {
      const res = await request.delete(`/users/${currentUser._id}`, {
        headers: { token: `Bearer ${currentUser.accessToken}` },
      })

      setMessage(res.data)
      setNotify(true)
      if (res.status === 200) {
        const timer = setTimeout(() => {
          setNotify(false)
          logout(dispatch)
          navigate("/")
        }, 3000)
      }
    } catch (error) {
      console.log(error.response)
    }
  }

  const elements = [
    <>
      <Style.Options onClick={() => setIndexComponent(1)}>
        Alterar Informações
        <MdKeyboardArrowRight />
      </Style.Options>

      <Style.Options onClick={() => setIndexComponent(2)}>
        Gerenciar Endereços
        <MdKeyboardArrowRight />
      </Style.Options>

      <Style.Options onClick={excludeAccount}>Excluir Conta</Style.Options>
    </>,
    <ManageUserInfo changeComponent={setIndexComponent} />,
    <ManageAddresses changeComponent={setIndexComponent} />,
  ]

  return (
    <Style.Container>
      {notify && <Notification top="110px" message={message} mobile />}

      {currentUser && (
        <Style.InfoContainer>
          <Style.ImageContainer>
            <Style.UserIcon>
              <BiUserCircle />
            </Style.UserIcon>
          </Style.ImageContainer>

          <Style.Name>
            {currentUser.name} {currentUser.lastname}
          </Style.Name>

          <Style.Info>{currentUser.username}</Style.Info>

          <Style.Info>{currentUser.email}</Style.Info>
        </Style.InfoContainer>
      )}

      <Style.OptionsContainer>
        {elements[indexComponent]}
      </Style.OptionsContainer>
    </Style.Container>
  )
}

export default UserProfile
