import React from "react"
import useFormatPrice from "../../hooks/useFormatPrice"
import useScreenWidth from "../../hooks/useScreenWidth"
import { useDispatch } from "react-redux"
import { addProductToFavorites } from "../../redux/favorites/slice"
import {
  decreaseProduct,
  increaseProduct,
  removeProductToCart,
} from "../../redux/cart/slice"

import { BsDash, BsPlus } from "react-icons/bs"
import Style from "./style"

const CartItem = ({ product, quantity }) => {
  const screenWidth = useScreenWidth(innerWidth)

  const shipping = useFormatPrice(product.shipping)
  const discountPrice = useFormatPrice(product.price * (1 - product.discount))

  const dispatch = useDispatch()

  const handleRemoveProduct = () => dispatch(removeProductToCart(product._id))

  const handleDecreaseProduct = () => dispatch(decreaseProduct(product._id))

  const handleIncreaseProduct = () => dispatch(increaseProduct(product._id))

  const handleAddToFavorites = () => dispatch(addProductToFavorites(product))

  return (
    <Style.Container>
      <Style.Wrapper first>
        <Style.Product>
          <Style.ImageContainer to={`/produto/${product._id}`}>
            <Style.Image src={product.image} alt="Imagem do produto" />
          </Style.ImageContainer>

          <Style.InfoContainer>
            <Style.Name to={`/produto/${product._id}`}>
              {product.name}
            </Style.Name>

            <Style.ButtonsContainer>
              <Style.CartItemBtn onClick={handleRemoveProduct} color="#FF6C6C">
                Remover
              </Style.CartItemBtn>

              <Style.CartItemBtn
                color="var(--picton-blue)"
                onClick={handleAddToFavorites}
              >
                Favoritar
              </Style.CartItemBtn>
            </Style.ButtonsContainer>
          </Style.InfoContainer>
        </Style.Product>
      </Style.Wrapper>

      <Style.Wrapper>
        {screenWidth <= 1024 && <Style.Label>Entrega:</Style.Label>}
        <Style.Price>{product.shipping != 0 ? shipping : "Grátis"}</Style.Price>
      </Style.Wrapper>

      <Style.Wrapper>
        {screenWidth <= 1024 && <Style.Label>Unidades:</Style.Label>}
        <Style.QuantityContainer>
          <Style.IncreaseDecrease onClick={handleDecreaseProduct}>
            <BsDash />
          </Style.IncreaseDecrease>

          <Style.Quantity>{quantity}</Style.Quantity>

          <Style.IncreaseDecrease onClick={handleIncreaseProduct}>
            <BsPlus />
          </Style.IncreaseDecrease>
        </Style.QuantityContainer>
      </Style.Wrapper>

      <Style.Wrapper>
        {screenWidth <= 1024 && <Style.Label>Preço:</Style.Label>}
        <Style.Price>{discountPrice}</Style.Price>
      </Style.Wrapper>
    </Style.Container>
  )
}

export default CartItem
