import { useEffect, useState } from "react"

const useFilterProducts = (products, filters) => {
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
    const UpdatedProducts = products.filter((product) => {
      if (filters.shipping && product.shipping) {
        return false
      }

      if (filters.minPrice && product.price < filters.minPrice) {
        return false
      }

      if (filters.maxPrice && product.price > filters.maxPrice) {
        return false
      }

      if (
        filters.installments &&
        product.installments !== filters.installments
      ) {
        return false
      }

      if (filters.discount && product.discount !== filters.discount) {
        return false
      }
      return true
    })

    setFilteredProducts(UpdatedProducts)
  }, [products, filters])

  return filteredProducts
}

export default useFilterProducts
