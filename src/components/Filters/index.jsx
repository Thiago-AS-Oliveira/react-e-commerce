import React, { useState } from "react"

import Style from "./style"

const Filters = ({ filterOpen, filters, setFilters }) => {
  const [freeShipping, setFreeShipping] = useState(false)
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [installments, setInstallments] = useState("")
  const [discount, setDiscount] = useState("")

  const handleImputs = (e, setState) => {
    const inputValue = e.target.value
    setState(inputValue)
    setFilters({
      ...filters,
      [e.target.name]: inputValue !== "" ? Number(inputValue) : undefined,
    })
  }

  const handleFreeShipping = (e) => {
    const updatedFreeShipping = !freeShipping
    setFreeShipping(updatedFreeShipping)

    setFilters({
      ...filters,
      [e.target.name]: updatedFreeShipping,
    })
  }

  return (
    <Style.Container filterOpen={filterOpen}>
      <Style.Wrapper>
        <Style.ToogleSwitchContainer>
          Frete grátis
          <Style.ToogleSwitch
            checked={freeShipping}
            type="checkbox"
            id="shipping"
            name="shipping"
            onChange={handleFreeShipping}
          />
        </Style.ToogleSwitchContainer>
      </Style.Wrapper>

      <Style.Wrapper>
        <Style.FilterName>Preço</Style.FilterName>

        <Style.FilterContainer>
          <Style.PriceInput
            type="number"
            name="minPrice"
            placeholder="Minímo"
            value={minPrice}
            onChange={(e) => handleImputs(e, setMinPrice)}
          />
          <Style.PriceInput
            type="number"
            name="maxPrice"
            placeholder="Máximo"
            value={maxPrice}
            onChange={(e) => handleImputs(e, setMaxPrice)}
          />
        </Style.FilterContainer>
      </Style.Wrapper>

      <Style.Wrapper>
        <Style.FilterName>Parcelas</Style.FilterName>

        <Style.FilterContainer>
          <Style.RadioInput
            name="installments"
            type="radio"
            id="all"
            value=""
            checked={installments === ""}
            onChange={(e) => handleImputs(e, setInstallments)}
          />
          <Style.Label hmtlFor="all">Todos</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="installments"
            type="radio"
            id="3x"
            value="3"
            checked={installments === "3"}
            onChange={(e) => handleImputs(e, setInstallments)}
          />
          <Style.Label hmtlFor="3x">Até 3</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="installments"
            type="radio"
            id="6x"
            value="6"
            checked={installments === "6"}
            onChange={(e) => handleImputs(e, setInstallments)}
          />
          <Style.Label hmtlFor="6x">Até 6</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="installments"
            type="radio"
            id="10x"
            value="10"
            checked={installments === "10"}
            onChange={(e) => handleImputs(e, setInstallments)}
          />
          <Style.Label hmtlFor="10x">Até 10</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="installments"
            type="radio"
            id="12x"
            value="12"
            checked={installments === "12"}
            onChange={(e) => handleImputs(e, setInstallments)}
          />
          <Style.Label hmtlFor="12x">Até 12</Style.Label>
        </Style.FilterContainer>
      </Style.Wrapper>

      <Style.Wrapper>
        <Style.FilterName>Desconto</Style.FilterName>

        <Style.FilterContainer>
          <Style.RadioInput
            name="discount"
            type="radio"
            id="all"
            value=""
            checked={discount === ""}
            onChange={(e) => handleImputs(e, setDiscount)}
          />
          <Style.Label hmtlFor="all">Todos</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="discount"
            type="radio"
            id="05%"
            value="0.05"
            checked={discount === "0.05"}
            onChange={(e) => handleImputs(e, setDiscount)}
          />
          <Style.Label hmtlFor="05%">Até 05%</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="discount"
            type="radio"
            id="10%"
            value="0.1"
            checked={discount === "0.1"}
            onChange={(e) => handleImputs(e, setDiscount)}
          />
          <Style.Label hmtlFor="10%">Até 10%</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="discount"
            type="radio"
            id="15%"
            value="0.15"
            checked={discount === "0.15"}
            onChange={(e) => handleImputs(e, setDiscount)}
          />
          <Style.Label hmtlFor="15%">Até 15%</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="discount"
            type="radio"
            id="20%"
            value="0.2"
            checked={discount === "0.2"}
            onChange={(e) => handleImputs(e, setDiscount)}
          />
          <Style.Label hmtlFor="20%">Até 20%</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="discount"
            type="radio"
            id="30%"
            value="0.3"
            checked={discount === "0.3"}
            onChange={(e) => handleImputs(e, setDiscount)}
          />
          <Style.Label hmtlFor="30%">Até 30%</Style.Label>
        </Style.FilterContainer>

        <Style.FilterContainer>
          <Style.RadioInput
            name="discount"
            type="radio"
            id="50%"
            value="0.5"
            checked={discount === "0.5"}
            onChange={(e) => handleImputs(e, setDiscount)}
          />
          <Style.Label hmtlFor="50%">Até 50%</Style.Label>
        </Style.FilterContainer>
      </Style.Wrapper>
    </Style.Container>
  )
}

export default Filters
