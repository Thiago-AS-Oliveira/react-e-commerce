import React, { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import useScreenWidth from "../../hooks/useScreenWidth"

import { useDispatch, useSelector } from "react-redux"
import { selectUser } from "../../redux/user/selectors"
import {
  selectCartProducts,
  selectProductsPrice,
  selectShippingPrice,
} from "../../redux/cart/selectors"

import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

import Style from "./style"
import Checkout from "../../components/Checkout"
import useFormatPrice from "../../hooks/useFormatPrice"
import CartItem from "../../components/CartItem"
import EmptyElement from "../../components/EmptyElement"
import useRequests from "../../hooks/useRequests"

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY)

const Cart = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const screenWidth = useScreenWidth()

  const [checkoutIsOpen, setCheckoutIsOpen] = useState(false)
  const [clientSecret, setClientSecret] = useState("")

  const products = useSelector(selectCartProducts)
  const subtotal = useSelector(selectProductsPrice)
  const shipping = useSelector(selectShippingPrice)
  const total = subtotal + shipping
  const amount = Math.round(total * 100)

  const totalPrice = useFormatPrice(subtotal + shipping)
  const formattedSubtotal = useFormatPrice(subtotal)
  const formattedShipping = useFormatPrice(shipping)

  const dispatch = useDispatch()
  const { logout, request } = useRequests()
  const { currentUser } = useSelector(selectUser)

  const checkout = () => {
    setCheckoutIsOpen(true)
    !currentUser && navigate("/login", { state: location.pathname })
  }

  useEffect(() => {
    if (currentUser) {
      const paymentIntent = async () => {
        try {
          const res = await request.post(
            `/checkout/payment/${currentUser._id}`,
            {
              id: currentUser._id,
              email: currentUser.email,
              amount,
            },
            { headers: { token: `Bearer ${currentUser.accessToken}` } }
          )

          setClientSecret(res.data.clientSecret)
        } catch (error) {
          console.log(error.response.data)
        }
      }

      amount > 0 && paymentIntent()
    }
  }, [amount])

  return (
    <Style.Container>
      {products.length === 0 ? (
        <>
          <EmptyElement
            title="Meu Carrinho"
            image="/icons/EmptyCart.png"
            text="Seu carrinho está vazio"
          />
        </>
      ) : (
        <>
          <Style.Cart>
            <Style.SectionHeader>
              Meu carrinho
              {screenWidth <= 1024 && (
                <Style.Button onClick={checkout}>Finalizar pedido</Style.Button>
              )}
            </Style.SectionHeader>

            <Style.CartHeader>
              <Style.HeaderWrapper first>Produto</Style.HeaderWrapper>

              <Style.HeaderWrapper>Entrega</Style.HeaderWrapper>

              <Style.HeaderWrapper>Unidades</Style.HeaderWrapper>

              <Style.HeaderWrapper>Preço</Style.HeaderWrapper>
            </Style.CartHeader>

            <Style.CartBody>
              {products.map(({ product, quantity }, index) => (
                <CartItem key={index} product={product} quantity={quantity} />
              ))}
            </Style.CartBody>
          </Style.Cart>

          <Style.Summary>
            <Style.SectionHeader>Resumo do pedido</Style.SectionHeader>

            <Style.SummaryWrapper height="25%" line={true}>
              <Style.Value>
                <Style.ValueWrapper>Subtotal</Style.ValueWrapper>{" "}
                <Style.ValueWrapper>{formattedSubtotal}</Style.ValueWrapper>
              </Style.Value>
              <Style.Value>
                <Style.ValueWrapper>Entrega</Style.ValueWrapper>{" "}
                <Style.ValueWrapper>
                  {shipping > 0 ? formattedShipping : "Grátis"}
                </Style.ValueWrapper>
              </Style.Value>
            </Style.SummaryWrapper>

            <Style.SummaryWrapper height="20%" line={true}>
              <Style.Value total>
                <Style.ValueWrapper>Total</Style.ValueWrapper>{" "}
                <Style.ValueWrapper>{totalPrice}</Style.ValueWrapper>
              </Style.Value>
            </Style.SummaryWrapper>

            <Style.SummaryWrapper height="25%">
              <Style.Button onClick={checkout}>Finalizar Pedido</Style.Button>
              <Style.ContinueShopping to="/">
                Continue Comprando
              </Style.ContinueShopping>
            </Style.SummaryWrapper>
          </Style.Summary>
        </>
      )}

      {checkoutIsOpen && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <Checkout
            openCheckout={setCheckoutIsOpen}
            total={total}
            products={products}
          />
        </Elements>
      )}
    </Style.Container>
  )
}

export default Cart
