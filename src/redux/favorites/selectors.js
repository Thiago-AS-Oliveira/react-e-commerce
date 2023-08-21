export const selectFavoritesProductsCount = ({ favorites }) =>
  favorites.products.length

export const selectProductIsFavorited = ({ favorites }, product) =>
  favorites.products.find((prod) => prod._id === product._id)
