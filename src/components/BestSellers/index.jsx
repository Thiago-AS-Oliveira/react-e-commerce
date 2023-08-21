import React from "react"
import useRequests from "../../hooks/useRequests"

import Style from "./style"
import ProductCard from "../ProductCard"
import Loading from "../Loading"

const BestSellers = () => {
  const { fetchProducts } = useRequests()

  const { products, loading } = fetchProducts()
  const bestSellers = products.slice(0, 12)

  return (
    <Style.Container>
      <>
        <Style.Title>Mais Vendidos</Style.Title>

        <Style.CardContainer>
          {loading === true ? (
            <Loading size="20px" />
          ) : (
            bestSellers.map((product, index) => (
              <ProductCard product={product} key={index} />
            ))
          )}
        </Style.CardContainer>
      </>
    </Style.Container>
  )
}

export default BestSellers
