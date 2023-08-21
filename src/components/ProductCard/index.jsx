import React from "react"
import useScreenWidth from "../../hooks/useScreenWidth"
import useFormatPrice from "../../hooks/useFormatPrice"

import { selectProductIsFavorited } from "../../redux/favorites/selectors"
import { useDispatch, useSelector } from "react-redux"
import { toggleProductToFavorites } from "../../redux/favorites/slice"
import { addProductToCart } from "../../redux/cart/slice"

import { BsCart2, BsHeart, BsHeartFill } from "react-icons/bs"
import Rating from "../Rating"
import Style from "./style"

const ProductCard = ({ product, list }) => {
  const screenWidth = useScreenWidth()

  const currentPrice = useFormatPrice(product.price)
  const discountPrice = useFormatPrice(product.price * (1 - product.discount))

  const dispatch = useDispatch()

  const isFavorited = !!useSelector((state) =>
    selectProductIsFavorited(state, product)
  )

  const handleAddToCart = () =>
    dispatch(addProductToCart({ product, quantity: 1 }))

  const handleAddToFavorites = () => dispatch(toggleProductToFavorites(product))

  return (
    <Style.Card list={list}>
      <Style.Icon onClick={handleAddToFavorites}>
        {isFavorited ? <BsHeartFill /> : <BsHeart />}{" "}
      </Style.Icon>

      <Style.Main to={`/produto/${product._id}`}>
        <Style.ImageContainer>
          <Style.Image src={product.image} />
        </Style.ImageContainer>

        <Style.InfoContainer>
          <Style.Name>{product.name}</Style.Name>

          <Style.PriceContainer>
            {product.discount != 0 ? (
              <>
                <Style.OldPrice>R$: {currentPrice}</Style.OldPrice>
                <Style.Price>R$: {discountPrice}</Style.Price>
              </>
            ) : (
              <>
                <Style.OldPrice></Style.OldPrice>
                <Style.Price>R$: {currentPrice}</Style.Price>
              </>
            )}
          </Style.PriceContainer>

          <Rating rating={product.rating} size="1.6rem" />
        </Style.InfoContainer>
      </Style.Main>

      <Style.Button onClick={handleAddToCart}>
        Adicionar ao Carrinho
      </Style.Button>
    </Style.Card>
  )
}

export default ProductCard
