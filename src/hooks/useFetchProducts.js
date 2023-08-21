import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethods"

const useFetchProducts = (query) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await publicRequest.get(`/products?${query}`)

        const sort = [...res.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )

        setProducts(sort)
      } catch (error) {}
    }

    getProducts()
  }, [query])

  return products
}

export default useFetchProducts
