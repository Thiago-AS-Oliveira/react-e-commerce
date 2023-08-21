import React, { useState } from "react"
import useRequests from "../../hooks/useRequests"

import { TfiMapAlt } from "react-icons/tfi"
import Style from "./style"
import Loading from "../Loading"

const SelectAddress = ({ selectAddress, changeComponent }) => {
  const [selectedAddress, setSelectedAddress] = useState(null)

  const { fetchAddressList } = useRequests()
  const { loading, addressList } = fetchAddressList()

  const handleSelectAddress = (index) => {
    setSelectedAddress(index)
    selectAddress(addressList[index])
  }

  return (
    <Style.Container>
      <Style.Title>Escolha um edereço de entrega</Style.Title>

      {loading ? (
        <Loading size={"15px"} />
      ) : (
        <Style.AddressList>
          <Style.NewAddressBtn onClick={() => changeComponent(1)}>
            Novo endereço
          </Style.NewAddressBtn>

          {addressList.map((item, index) => (
            <Style.Address
              key={index}
              selected={selectedAddress === index}
              onClick={() => handleSelectAddress(index)}
            >
              <Style.AddressIcon>
                <TfiMapAlt />
              </Style.AddressIcon>

              <Style.AddressInfo>
                <Style.AddressElement>
                  {item.street}, {item.houseNumber} - {item.district}
                </Style.AddressElement>

                <Style.AddressElement>
                  {item.city} - {item.state}, {item.cep}
                </Style.AddressElement>

                <Style.AddressElement>{item.complement}</Style.AddressElement>
              </Style.AddressInfo>
            </Style.Address>
          ))}
        </Style.AddressList>
      )}

      <Style.ButtonWrapper>
        <Style.Button
          onClick={() => {
            selectedAddress !== null
              ? changeComponent(2)
              : console.log("escolha um endereço")
          }}
        >
          Continuar
        </Style.Button>
      </Style.ButtonWrapper>
    </Style.Container>
  )
}

export default SelectAddress
