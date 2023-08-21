import React, { useState } from "react"
import { useLocation } from "react-router-dom"

import useRequests from "../../hooks/useRequests"
import useFilterProducts from "../../hooks/useFilterProducts"
import useSortProducts from "../../hooks/useSortProducts"

import { BsFilterLeft, BsSortDown } from "react-icons/bs"

import ProductCard from "../../components/ProductCard"
import Filters from "../../components/Filters"
import SearchMessageError from "../../components/SearchMessageError"
import Loading from "../../components/Loading"

import Style from "./style"

const ProductList = () => {
  const query = useLocation().pathname.split("/")[2]

  const [filterOpen, setFilterOpen] = useState(false)
  const [orderBy, setOrderBy] = useState()
  const [filters, setFilters] = useState({
    shipping: false,
    minPrice: undefined,
    maxPrice: undefined,
    installments: undefined,
    discount: undefined,
  })

  let pageTitle = query.split("=")[1].replace(/%20/g, " ")
  pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)

  const { fetchProducts } = useRequests()
  const { products, loading } = fetchProducts(query)
  const filteredProducts = useFilterProducts(products, filters)
  const sortedProducts = useSortProducts(filteredProducts, orderBy)

  return (
    <Style.Container>
      <Style.Top>
        <Style.Title>{pageTitle}</Style.Title>

        <Style.FilterIcon onClick={() => setFilterOpen(!filterOpen)}>
          <Style.Icon>
            <BsFilterLeft />
          </Style.Icon>
          Filtrar
        </Style.FilterIcon>

        <Style.OrderByContainer>
          <Style.Icon>
            <BsSortDown />
          </Style.Icon>
          <Style.OrderBy
            name="Style.orderby"
            id="orderby"
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <Style.OrderByOption value="newest">Recentes</Style.OrderByOption>
            <Style.OrderByOption value="highestPrice">
              Maior Preço
            </Style.OrderByOption>
            <Style.OrderByOption value="lowerPrice">
              Menor Preço
            </Style.OrderByOption>
          </Style.OrderBy>
        </Style.OrderByContainer>
      </Style.Top>

      <Style.Main>
        <Filters
          filterOpen={filterOpen}
          setFilters={setFilters}
          filters={filters}
        />

        <Style.List>
          {loading === false ? (
            sortedProducts.length ? (
              sortedProducts.map((product, index) => (
                <ProductCard product={product} key={index} list="true" />
              ))
            ) : (
              <SearchMessageError />
            )
          ) : (
            <Loading size="20px" />
          )}
        </Style.List>
      </Style.Main>
    </Style.Container>
  )
}

export default ProductList
