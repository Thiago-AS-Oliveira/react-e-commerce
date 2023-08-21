import React from "react"

import { useSelector } from "react-redux"

import Style from "./style"
import EmptyElements from "../../components/EmptyElement"
import FavoritesItem from "../../components/FavoritesItem"

const Favorites = () => {
  const favoritesItem = useSelector(({ favorites }) => favorites.products)

  return (
    <Style.Container>
      {favoritesItem.length === 0 ? (
        <EmptyElements
          title="Favoritos"
          image="/icons/EmptyFavorites.png"
          text="Sua lista de favoritos está vazia"
        />
      ) : (
        <Style.Favorites>
          <Style.SectionHeader>Favoritos</Style.SectionHeader>

          <Style.FavoritesHeader>
            <Style.HeaderWrapper first>Produto</Style.HeaderWrapper>

            <Style.HeaderWrapper>Entrega</Style.HeaderWrapper>

            <Style.HeaderWrapper>Preço</Style.HeaderWrapper>
          </Style.FavoritesHeader>

          <Style.FavoritesBody>
            {favoritesItem.map((product, index) => (
              <FavoritesItem product={product} key={index} favorites />
            ))}
          </Style.FavoritesBody>
        </Style.Favorites>
      )}
    </Style.Container>
  )
}

export default Favorites
