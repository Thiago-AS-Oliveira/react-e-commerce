import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import useRequests from "../../hooks/useRequests"

import { useDispatch, useSelector } from "react-redux"
import {
  selectProductsPrice,
  selectShippingPrice,
} from "../../redux/cart/selectors"
import { selectUser } from "../../redux/user/selectors"
import { clearCart } from "../../redux/cart/slice"

import { useElements, useStripe } from "@stripe/react-stripe-js"

import Style from "./style"
import { AiOutlineClose } from "react-icons/ai"
import SelectAddress from "../SelectAddress"
import RegisterAddress from "../RegisterAddress"
import PaymentForm from "../PaymentForm"
import useFormatPrice from "../../hooks/useFormatPrice"
import Notification from "../Notification"

const Checkout = ({ openCheckout, isOpen, total, products }) => {
  const [isProcessing, setIsProcessing] = useState(false)
  const [isSucceeded, setIsSucceeded] = useState(false)
  const [address, setAddress] = useState({})

  const { currentUser } = useSelector(selectUser)
  const subtotal = useSelector(selectProductsPrice)
  const shipping = useSelector(selectShippingPrice)

  const currentDate = new Date()
  const estimatedDelivery = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() + 7
  )

  const orderData = {
    userId: currentUser._id,
    products: products.map((item) => ({
      productId: item.product._id,
      name: item.product.name,
      image: item.product.image,
      price: item.product.price * (1 - item.product.discount),
      shipping: item.product.shipping,
      quantity: item.quantity,
    })),
    amount: Number(total.toFixed(2)),
    address,
    estimatedDelivery,
  }

  const formattedSubtotal = useFormatPrice(subtotal)
  const formattedShipping = useFormatPrice(shipping)
  const formattedTotal = useFormatPrice(orderData.amount)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { request } = useRequests()

  const stripe = useStripe()
  const elements = useElements()

  const registerOrder = async () => {
    try {
      const res = await request.post("/orders", orderData, {
        headers: { token: `Bearer ${currentUser.accessToken}` },
      })

      return res
    } catch (error) {
      return error.response
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    const res = await registerOrder()

    if (res.status === 200) {
      const { error, paymentIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: { return_url: "" },
        redirect: "if_required",
      })

      if (error) {
        console.log(error)
        try {
          const response = await request.delete(`/orders/${res.data.orderId}`, {
            headers: { token: `Bearer ${currentUser.accessToken}` },
          })
        } catch (error) {
          console.log(error.response)
        }
      } else if (paymentIntent && paymentIntent.status === "succeeded") {
        setIsSucceeded(true)

        const timeout = setTimeout(() => {
          navigate("/compras/page=1")
        }, 2000)

        dispatch(clearCart())

        return () => clearTimeout(timeout)
      }
    }
    setIsProcessing(false)
  }

  const [activeComponent, setActiveComponent] = useState(0)
  const components = [
    <SelectAddress
      selectAddress={setAddress}
      changeComponent={setActiveComponent}
    />,
    <RegisterAddress changeComponent={setActiveComponent} />,
    <PaymentForm
      submit={handleSubmit}
      isProcessing={isProcessing}
      changeComponent={setActiveComponent}
    />,
  ]

  return (
    <Style.Container isOpen={isOpen}>
      {isSucceeded && (
        <Notification top="110px" mobile message="Pagamento realizado!" />
      )}

      <Style.InfoContainer>
        <Style.Header>
          <Style.InfoWrapper>
            Detalhes
            <Style.Total>Total: {formattedTotal}</Style.Total>
          </Style.InfoWrapper>
        </Style.Header>
        <Style.Wrapper>
          <Style.InfoWrapper>
            <Style.Info>
              {currentUser.name} {currentUser.lastname}
            </Style.Info>

            <Style.Info>
              Entrega estimada: {estimatedDelivery.toLocaleDateString()}
            </Style.Info>
          </Style.InfoWrapper>

          <Style.Info>Subtotal: {formattedSubtotal}</Style.Info>

          <Style.Info>
            Frete: {shipping > 0 ? formattedShipping : "Grátis"}
          </Style.Info>

          <Style.Address>
            Endereço de entrega:
            {address.cep && (
              <>
                <Style.AddressInfo>
                  {address.street}, {address.houseNumber} - {address.district}
                </Style.AddressInfo>
                <Style.AddressInfo>
                  {address.city} - {address.state}, {address.cep}
                </Style.AddressInfo>
                <Style.AddressInfo>{address.complement}</Style.AddressInfo>
              </>
            )}
          </Style.Address>
        </Style.Wrapper>

        <Style.ProdHeader>
          <span>Produtos</span>
          <span>Preço Unitário</span>
          <span>Frete</span>
        </Style.ProdHeader>
        <Style.Wrapper>
          {products.map((item, index) => (
            <Style.ProdContainer key={index}>
              <Style.ProdInfo>
                <Style.ImageContainer>
                  <Style.Image
                    src={item.product.image}
                    alt={item.product.name}
                  />
                </Style.ImageContainer>
                <Style.Name>
                  {item.product.name}
                  <Style.Quantity>
                    {item.quantity} Unidade{item.quantity > 1 && "s"}
                  </Style.Quantity>
                </Style.Name>
              </Style.ProdInfo>

              <Style.Price> {useFormatPrice(item.product.price)}</Style.Price>

              <Style.Price>
                {item.product.shipping > 0
                  ? useFormatPrice(item.product.shipping)
                  : "Grátis"}
              </Style.Price>
            </Style.ProdContainer>
          ))}
        </Style.Wrapper>
      </Style.InfoContainer>

      <Style.Elements>
        <Style.Close onClick={() => openCheckout(false)}>
          <AiOutlineClose />
        </Style.Close>
        {components[activeComponent]}
      </Style.Elements>
    </Style.Container>
  )
}

export default Checkout
