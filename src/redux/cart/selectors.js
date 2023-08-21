export const selectCartProductsCount = ({ cart }) =>
  cart.products.reduce((acc, curr) => acc + curr.quantity, 0)

export const selectProductsPrice = ({ cart }) =>
  cart.products.reduce(
    (acc, curr) =>
      acc + curr.product.price * (1 - curr.product.discount) * curr.quantity,
    0
  )

export const selectShippingPrice = ({ cart }) =>
  cart.products.reduce((acc, curr) => acc + curr.product.shipping, 0)

export const selectCartProducts = ({ cart }) => cart.products
