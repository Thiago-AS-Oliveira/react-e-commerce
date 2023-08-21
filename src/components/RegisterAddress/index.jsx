import React, { useEffect, useState } from "react"
import axios from "axios"

import useRequests from "../../hooks/useRequests"

import { selectUser } from "../../redux/user/selectors"
import { useSelector } from "react-redux"

import Style from "./style"
import Notification from "../Notification"

const RegisterAddress = ({ changeComponent }) => {
  const [loading, setLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(null)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const [message, setMessage] = useState("")

  const { currentUser } = useSelector(selectUser)
  const { request, fetchAddressList } = useRequests()
  const { addressList } = fetchAddressList()

  const [formData, setFormData] = useState({
    cep: "",
    street: "",
    district: "",
    city: "",
    state: "",
    houseNumber: "",
    complement: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === "cep" || name === "houseNumber") {
      const numericValue = value.replace(/\D/g, "").substring(0, 8)

      setFormData((prevState) => ({ ...prevState, [name]: numericValue }))
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = { newAddress: { id: addressList.length + 1, ...formData } }

    if (formData.street) {
      try {
        const res = await request.put(`/users/${currentUser._id}`, data, {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        })

        if (res.status === 200) {
          setSuccessMessage(res.data.message)
          setSuccess(true)
          setTimeout(() => {
            changeComponent(0)
          }, 2000)

          setFormData({
            cep: "",
            street: "",
            district: "",
            city: "",
            state: "",
            houseNumber: "",
            complement: "",
          })
        }
      } catch (error) {
        console.log(error.response)
      }
    }

    setLoading(false)
  }

  useEffect(() => {
    const fetchAddress = async () => {
      const url = `https://viacep.com.br/ws/${formData.cep}/json/`

      const handleData = (message = "", error = false, data = {}) => {
        const resData = data.error
          ? {
              ...formData,
              street: "",
              district: "",
              city: "",
              state: "",
            }
          : {
              ...formData,
              street: data.logradouro,
              district: data.bairro,
              city: data.localidade,
              state: data.uf,
            }

        setMessage(message)
        setError(error)

        setFormData({ ...resData })
      }

      if (formData.cep.length === 8) {
        const res = await axios.get(url)

        res.data.erro && handleData("Cep inválido", true, res.data)

        res.data.cep && handleData("", false, res.data)
      } else if (
        formData.cep.length < 8 &&
        formData.cep.length !== 0 &&
        isFocused === false
      ) {
        handleData("Cep incompleto", true)
      } else {
        handleData()
      }
    }

    fetchAddress()
  }, [formData.cep, isFocused])

  return (
    <Style.Form onSubmit={handleSubmit}>
      {success && <Notification top="110px" mobile message={successMessage} />}

      <Style.Title>Cadastre um novo endereço</Style.Title>

      <Style.FormContent>
        <Style.InputContainer width="100%">
          <Style.Label htmlFor="cep">CEP *</Style.Label>

          <Style.Input
            required
            type="text"
            placeholder="CEP"
            id="cep"
            name="cep"
            invalid={error}
            value={formData.cep}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          {message && <Style.Message>{message}</Style.Message>}
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="street">Rua *</Style.Label>

          <Style.Input
            required
            readOnly
            type="text"
            placeholder="Rua"
            id="street"
            name="street"
            defaultValue={formData.street}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="district">Bairro *</Style.Label>

          <Style.Input
            required
            readOnly
            type="text"
            placeholder="Bairro"
            id="district"
            name="district"
            defaultValue={formData.district}
          />
        </Style.InputContainer>

        <Style.InputContainer width="70%">
          <Style.Label htmlFor="city">Município *</Style.Label>

          <Style.Input
            required
            readOnly
            type="text"
            placeholder="Município"
            id="city"
            name="city"
            defaultValue={formData.city}
          />
        </Style.InputContainer>

        <Style.InputContainer width="28%">
          <Style.Label htmlFor="state">Estado *</Style.Label>

          <Style.Input
            required
            readOnly
            type="text"
            placeholder="Estado"
            id="state"
            name="state"
            defaultValue={formData.state}
          />
        </Style.InputContainer>

        <Style.InputContainer width="20%">
          <Style.Label htmlFor="houseNumber">Número *</Style.Label>

          <Style.Input
            required
            type="text"
            placeholder="Número"
            id="houseNumber"
            name="houseNumber"
            value={formData.houseNumber}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.InputContainer width="78%">
          <Style.Label htmlFor="complement">Complemento</Style.Label>
          <Style.Input
            type="text"
            placeholder="Complemento"
            id="complement"
            name="complement"
            value={formData.complement}
            onChange={handleInputChange}
          />
        </Style.InputContainer>
      </Style.FormContent>

      <Style.ButtonWrapper>
        <Style.Button disabled={loading}>
          {loading ? "Resgistrando endereço" : "Salvar Endereço"}
        </Style.Button>

        <Style.Button
          bgColor="var(--bunker-opaque)"
          onClick={(e) => {
            e.preventDefault()
            changeComponent(0)
          }}
        >
          Voltar
        </Style.Button>
      </Style.ButtonWrapper>
    </Style.Form>
  )
}

export default RegisterAddress
