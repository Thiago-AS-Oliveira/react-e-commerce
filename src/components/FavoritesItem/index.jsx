import React from "react"
import useFormatPrice from "../../hooks/useFormatPrice"
import useScreenWidth from "../../hooks/useScreenWidth"

import { useDispatch } from "react-redux"
import { removeProductToFavorites } from "../../redux/favorites/slice"
import { addProductToCart } from "../../redux/cart/slice"

import Style from "./style"

const FavoritesItem = ({ product }) => {
  const screenWidth = useScreenWidth()

  const shipping = useFormatPrice(product.shipping)
  const discountPrice = useFormatPrice(product.price * (1 - product.discount))

  const dispatch = useDispatch()

  const handleRemoveProduct = () => dispatch(removeProductToFavorites(product))

  const handleAddToCart = () =>
    dispatch(addProductToCart({ product, quantity: 1 }))

  return (
    <Style.Container>
      <Style.Wrapper first>
        <Style.ImageContainer to={`/produto/${product._id}`}>
          <Style.Image src={product.image} alt="Imagem do produto" />
        </Style.ImageContainer>

        <Style.InfoContainer>
          <Style.Name to={`/produto/${product._id}`}>{product.name}</Style.Name>

          <Style.ButtonsContainer>
            <Style.FavoritesItemBtn
              onClick={handleRemoveProduct}
              color="#FF6C6C"
            >
              Remover
            </Style.FavoritesItemBtn>

            <Style.FavoritesItemBtn
              onClick={handleAddToCart}
              color="var(--picton-blue)"
            >
              Comprar
            </Style.FavoritesItemBtn>
          </Style.ButtonsContainer>
        </Style.InfoContainer>
      </Style.Wrapper>

      <Style.Wrapper>
        {screenWidth <= 1024 && <Style.Label>Entrega:</Style.Label>}
        <Style.Price>{product.shipping != 0 ? shipping : "Grátis"}</Style.Price>
      </Style.Wrapper>

      <Style.Wrapper>
        {screenWidth <= 1024 && <Style.Label>Preço:</Style.Label>}
        <Style.Price>{discountPrice}</Style.Price>
      </Style.Wrapper>
    </Style.Container>
  )
}

export default FavoritesItem
