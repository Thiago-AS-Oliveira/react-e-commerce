import React, { useEffect, useState } from "react"
import useRequests from "../../hooks/useRequests"

import axios from "axios"

import { useSelector } from "react-redux"
import { selectUser } from "../../redux/user/selectors"

import { BsPencil, BsTrash } from "react-icons/bs"
import { AiOutlineClose } from "react-icons/ai"
import Loading from "../Loading"
import Notification from "../Notification"
import Style from "./style"

const ManageAddresses = ({ changeComponent }) => {
  const { currentUser } = useSelector(selectUser)

  const [update, setUpdate] = useState(false)
  const [notify, setNotify] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(false)
  const [message, setMessage] = useState("")
  const [openForm, setOpenForm] = useState(null)
  const [addressIndex, setAddressIndex] = useState(null)

  const [formData, setFormData] = useState({
    cep: "",
    street: "",
    district: "",
    city: "",
    state: "",
    houseNumber: "",
    complement: "",
  })

  const { fetchAddressList, request } = useRequests()
  const { addressList, loading } = fetchAddressList(update)
  const [singleAddress, setSingleAddress] = useState(null)

  const handleOpenForm = async (index) => {
    setOpenForm(true)
    setSingleAddress(addressList[index])
    setAddressIndex(index)

    const selectedAddress = addressList[index]

    index >= 0
      ? setFormData({
          cep: selectedAddress.cep,
          street: selectedAddress.street,
          district: selectedAddress.district,
          city: selectedAddress.city,
          state: selectedAddress.state,
          houseNumber: selectedAddress.houseNumber,
          complement: selectedAddress.complement,
        })
      : setFormData({
          cep: "",
          street: "",
          district: "",
          city: "",
          state: "",
          houseNumber: "",
          complement: "",
        })
  }

  const submit = async (method) => {
    let data
    method === "newAddress"
      ? (data = { [method]: { id: addressList.length + 1, ...formData } })
      : (data = { [method]: { id: singleAddress.id, ...formData } })

    setIsProcessing(true)

    if (error) {
      setNotify(true)
    } else {
      try {
        const res = await request.put(`/users/${currentUser._id}`, data, {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        })
        setNotify(true)
        setMessage(res.data.message)
        setOpenForm(null)
        setUpdate(!update)
      } catch (error) {
        console.log(error)
      }
    }
    setIsProcessing(false)
  }

  const deleteAddress = async (addressId) => {
    try {
      const res = await request.put(
        `/users/${currentUser._id}`,
        { deleteAddress: addressId },
        {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        }
      )
      setNotify(true)
      setMessage(res.data.message)
      setUpdate(!update)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotify(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [notify])

  return (
    <Style.Container>
      {notify && (
        <Notification error={error} message={message} mobile top="110px" />
      )}
      <Style.CloseIcon onClick={() => changeComponent(0)}>
        <AiOutlineClose />
      </Style.CloseIcon>
      {openForm && (
        <Form
          submit={submit}
          method={addressIndex === -1 ? "newAddress" : "updateAddress"}
          setOpenForm={setOpenForm}
          states={{
            message,
            setMessage,
            formData,
            setFormData,
            error,
            setError,
            isProcessing,
            setAddressIndex,
          }}
        />
      )}

      {loading && <Loading size="15px" />}

      {!loading &&
        !openForm &&
        addressList.map((address, index) => (
          <Style.Address key={index}>
            <Style.AddressInfo>
              {address.street}, {address.houseNumber} - {address.district}
            </Style.AddressInfo>
            <Style.AddressInfo color="#222a" fontSize="1.6rem">
              {address.complement}
            </Style.AddressInfo>
            <Style.AddressInfo color="#222a" fontSize="1.6rem">
              {address.city} - {address.state} - CEP {address.cep}
            </Style.AddressInfo>
            <Style.Icons>
              <Style.ManageBtn
                bgColor="var(--picton-blue)"
                onClick={() => handleOpenForm(index)}
              >
                Alterar
              </Style.ManageBtn>
              <Style.ManageBtn
                bgColor="var(--red)"
                onClick={() => deleteAddress(address.id)}
              >
                Excluir
              </Style.ManageBtn>
              <Style.Icon
                color="var(--picton-blue)"
                onClick={() => handleOpenForm(index)}
              >
                <BsPencil />
              </Style.Icon>

              <Style.Icon
                color="var(--red)"
                onClick={() => deleteAddress(address.id)}
              >
                <BsTrash />
              </Style.Icon>
            </Style.Icons>
          </Style.Address>
        ))}

      {!loading && !openForm && (
        <Style.NewAddress
          onClick={() => {
            handleOpenForm(-1)
          }}
        >
          Novo endereço
        </Style.NewAddress>
      )}
    </Style.Container>
  )
}

const Form = ({ submit, setOpenForm, states, method }) => {
  const {
    message,
    setMessage,
    formData,
    setFormData,
    error,
    setError,
    isProcessing,
    setAddressIndex,
  } = states
  const [isFocused, setIsFocused] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    if (name === "cep" || name === "houseNumber") {
      const numericValue = value.replace(/\D/g, "").substring(0, 8)

      setFormData((prevState) => ({ ...prevState, [name]: numericValue }))
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }))
    }
  }

  useEffect(() => {
    const fetchAddress = async () => {
      const url = `https://viacep.com.br/ws/${formData.cep}/json/`

      const handleData = (message = "", error = false, data = {}) => {
        const resData = data.cep
          ? {
              ...formData,
              street: data.logradouro,
              district: data.bairro,
              city: data.localidade,
              state: data.uf,
            }
          : {
              ...formData,
              street: "",
              district: "",
              city: "",
              state: "",
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
    <Style.Form
      onSubmit={(e) => {
        e.preventDefault()
        submit(method)
      }}
    >
      <Style.CloseForm
        onClick={() => {
          setOpenForm(null)
          setAddressIndex(null)
          setFormData({
            cep: "",
            street: "",
            district: "",
            city: "",
            state: "",
            houseNumber: "",
            complement: "",
          })
        }}
      >
        Cancelar Alterações
      </Style.CloseForm>

      <Style.Wrapper>
        <Style.InputContainer>
          <Style.Label htmlFor="cep">Cep:</Style.Label>
          <Style.Input
            required
            id="cep"
            name="cep"
            type="text"
            placeholder="CEP"
            value={formData.cep}
            onChange={handleInputChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />

          {error && <Style.Erro>{message}</Style.Erro>}
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="street">Rua:</Style.Label>

          <Style.Input
            required
            readOnly
            id="street"
            name="street"
            type="text"
            placeholder="Rua, avenida, travessa ou viela"
            value={formData.street}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="district">Bairro:</Style.Label>

          <Style.Input
            required
            readOnly
            id="district"
            name="district"
            type="text"
            placeholder="Bairro"
            value={formData.district}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="city">Município:</Style.Label>

          <Style.Input
            required
            readOnly
            id="city"
            name="city"
            type="text"
            placeholder="Município"
            value={formData.city}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="state">Estado:</Style.Label>

          <Style.Input
            required
            readOnly
            id="state"
            name="state"
            type="text"
            placeholder="Estado"
            value={formData.state}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="number">Número:</Style.Label>

          <Style.Input
            required
            id="number"
            name="houseNumber"
            type="text"
            placeholder="101"
            value={formData.houseNumber}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.InputContainer>
          <Style.Label htmlFor="complement">Complemento:</Style.Label>

          <Style.Input
            id="complement"
            name="complement"
            type="text"
            placeholder="Informações para facilitar a entrega"
            value={formData.complement}
            onChange={handleInputChange}
          />
        </Style.InputContainer>

        <Style.Button isProcessing={isProcessing}>
          {isProcessing ? "Processando..." : "Confirmar"}
        </Style.Button>
      </Style.Wrapper>
    </Style.Form>
  )
}

export default ManageAddresses
