const useFormatPrice = (value) => {
  const price = value.toFixed(2).replace(".", ",")

  return price
}

export default useFormatPrice
