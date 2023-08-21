import { useEffect, useState } from "react"

const useSortProducts = (filteredProducts, orderBy) => {
  const [sortedProducts, setSortedProducts] = useState([])

  useEffect(() => {
    let sorteredProducts = [...filteredProducts]
    switch (orderBy) {
      case "newest":
        sorteredProducts = [...filteredProducts].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
        break
      case "highestPrice":
        sorteredProducts = [...filteredProducts].sort(
          (a, b) => b.price - a.price
        )
        break
      case "lowerPrice":
        sorteredProducts = [...filteredProducts].sort(
          (a, b) => a.price - b.price
        )
        break
    }

    setSortedProducts(sorteredProducts)
  }, [filteredProducts, orderBy])

  return sortedProducts
}

export default useSortProducts
