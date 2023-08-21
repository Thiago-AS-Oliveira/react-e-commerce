import { useEffect, useState } from "react"
import axios from "axios"

import {
  loginError,
  loginStart,
  loginSuccess,
  logoutUser,
} from "../redux/user/slice"
import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../redux/user/selectors"

const url = import.meta.env.VITE_API_URL
const request = axios.create({ baseURL: url })

const fetchProducts = (query) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      try {
        const res = await request.get(`/products?${query}`)

        const sort = [...res.data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )

        setProducts(sort)
      } catch (error) {}

      setLoading(false)
    }

    getProducts()
  }, [query])

  return { loading, products }
}

const fetchSingleProduct = (productId) => {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      try {
        const res = await request.get(`products/find/${productId}`)

        setProduct(res.data)
      } catch (error) {}

      setLoading(false)
    }

    getProduct()
  }, [productId])

  return { product, loading }
}

const fetchOrders = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const { currentUser } = useSelector(selectUser)

  useEffect(() => {
    const getOrders = async () => {
      setLoading(true)

      try {
        const res = await request.get(`/orders/find/${currentUser._id}`, {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        })

        setOrders(res.data.reverse())
      } catch (error) {
        console.log(error.response)
      }

      setLoading(false)
    }

    getOrders()
  }, [])

  return { loading, orders }
}

const fetchAddressList = (update) => {
  const [addressList, setAddressList] = useState([])
  const [loading, setLoading] = useState(false)

  const { currentUser } = useSelector(selectUser)

  useEffect(() => {
    const getUserAddress = async () => {
      setLoading(true)
      try {
        const res = await request.get(`/users/find/${currentUser._id}`, {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        })
        setAddressList(res.data.address)
      } catch (error) {
        console.log(error)
      }

      setLoading(false)
    }
    getUserAddress()
  }, [update])

  return { addressList, loading }
}

const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await request.post("/auth/login", user)
    dispatch(loginSuccess({ user: res.data }))
  } catch (err) {
    dispatch(loginError({ message: err.response.data }))
  }
}

const logout = (dispatch) => {
  dispatch(logoutUser())
}

export default () => ({
  request,
  fetchProducts,
  fetchSingleProduct,
  fetchOrders,
  fetchAddressList,
  login,
  logout,
})
