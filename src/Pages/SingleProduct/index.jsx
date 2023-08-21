import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import useRequests from "../../hooks/useRequests"
import useFormatPrice from "../../hooks/useFormatPrice"

import { useDispatch, useSelector } from "react-redux"
import { selectProductIsFavorited } from "../../redux/favorites/selectors"
import { toggleProductToFavorites } from "../../redux/favorites/slice"
import { addProductToCart } from "../../redux/cart/slice"

import { BsDash, BsHeart, BsHeartFill, BsPlus } from "react-icons/bs"
import Style from "./style"
import Rating from "../../components/Rating"
import Loading from "../../components/Loading"

const SingleProduct = () => {
  const productId = useLocation().pathname.split("/")[2]
  const { fetchSingleProduct } = useRequests()
  const { product, loading } = fetchSingleProduct(productId)

  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()

  const categorie =
    product.categorie &&
    product.categorie.charAt(0).toUpperCase() + product.categorie.slice(1)

  const price = product.price && useFormatPrice(product.price)
  const discountPrice =
    product.discount && useFormatPrice(product.price * (1 - product.discount))
  const shipping = product.shipping && useFormatPrice(product.shipping)

  const handleQuantity = (type) => {
    type === "dec"
      ? quantity > 1 && setQuantity(quantity - 1)
      : setQuantity(quantity + 1)
  }

  const handleAddToCart = () =>
    dispatch(addProductToCart({ product, quantity }))

  const handleAddToFavorites = () => dispatch(toggleProductToFavorites(product))

  const isFavorited = !!useSelector((state) =>
    selectProductIsFavorited(state, product)
  )

  return (
    <Style.Container>
      {loading ? (
        <Loading size="15px" />
      ) : (
        <>
          <Style.Categorie>{categorie}</Style.Categorie>

          <Style.ProductContainer>
            <Style.ImageContainer>
              <Style.Image src={product.image} alt={product.name} />
            </Style.ImageContainer>
            <Style.InfoContainer>
              <Style.WishListIcon onClick={handleAddToFavorites}>
                {isFavorited ? <BsHeartFill /> : <BsHeart />}
              </Style.WishListIcon>

              <Style.TopContainer>
                <Style.Name>{product.name}</Style.Name>

                <Rating rating={product.rating} size="1.6rem" />

                <Style.Description>{product.description}</Style.Description>
              </Style.TopContainer>

              <Style.BottomContainer>
                <>
                  <Style.Wrapper>
                    {product.discount !== 0 ? (
                      <>
                        <Style.OldPrice>R$ {price}</Style.OldPrice>
                        <Style.Price>R$ {discountPrice}</Style.Price>
                      </>
                    ) : (
                      <>
                        <Style.OldPrice></Style.OldPrice>
                        <Style.Price>R$ {price}</Style.Price>
                      </>
                    )}
                  </Style.Wrapper>

                  <Style.Wrapper>
                    <Style.InfoLabel>Entrega:</Style.InfoLabel>

                    <Style.Shipping>
                      {product.shipping === 0 ? "Grátis" : `R$ ${shipping}`}
                    </Style.Shipping>
                  </Style.Wrapper>

                  <Style.Wrapper>
                    <Style.InfoLabel>Unidades:</Style.InfoLabel>

                    <Style.QuantityContainer>
                      <Style.IncreaseDecrease
                        onClick={() => handleQuantity("dec")}
                      >
                        <BsDash />
                      </Style.IncreaseDecrease>

                      <Style.Quantity>{quantity}</Style.Quantity>

                      <Style.IncreaseDecrease
                        onClick={() => handleQuantity("inc")}
                      >
                        <BsPlus />
                      </Style.IncreaseDecrease>
                    </Style.QuantityContainer>
                  </Style.Wrapper>

                  <Style.Button onClick={handleAddToCart}>
                    Adicionar ao carrinho
                  </Style.Button>
                </>
              </Style.BottomContainer>
            </Style.InfoContainer>
          </Style.ProductContainer>
        </>
      )}
    </Style.Container>
  )
}

export default SingleProduct
