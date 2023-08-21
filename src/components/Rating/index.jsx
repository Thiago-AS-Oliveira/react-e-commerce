import React from "react"
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs"

import Style from "./style"

const Rating = ({ rating, size }) => {
  const fullStars = Math.floor(rating)
  const halfStars = rating % 1 >= 0.5 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStars

  const renderStars = (length, component) =>
    Array.from({ length }, (_, index) =>
      React.cloneElement(component, { key: index })
    )

  return (
    <Style.Container size={size}>
      {renderStars(
        fullStars,
        <Style.Icon>
          <BsStarFill />
        </Style.Icon>
      )}
      {renderStars(
        halfStars,
        <Style.Icon>
          <BsStarHalf />
        </Style.Icon>
      )}
      {renderStars(
        emptyStars,
        <Style.Icon>
          <BsStar />
        </Style.Icon>
      )}
    </Style.Container>
  )
}

export default Rating
