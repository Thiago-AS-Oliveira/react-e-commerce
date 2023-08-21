import React, { useState, useEffect } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

import Style from "./style"

const Slide = () => {
  const [slideIndex, setSlideIndex] = useState(0)

  const handleClick = (direction) => {
    direction == "left"
      ? setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
      : setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
  }

  useEffect(() => {
    const timer = setTimeout(() => handleClick("right"), 5000)

    return () => clearInterval(timer)
  }, [slideIndex])

  return (
    <Style.Container>
      <Style.Arrow side="left" onClick={() => handleClick("left")}>
        <MdKeyboardArrowLeft />
      </Style.Arrow>

      <Style.Arrow side="right" onClick={() => handleClick("right")}>
        <MdKeyboardArrowRight />
      </Style.Arrow>

      <Style.Wrapper slideIndex={slideIndex}>
        <Style.ImageContainer>
          <Style.Image
            src="banners/banner1.png"
            alt="Os melhores Notebooks em até 40% off"
          />
        </Style.ImageContainer>

        <Style.ImageContainer>
          <Style.Image
            src="banners/banner2.png"
            alt="Os melhores periféricos para o seu setup"
          />
        </Style.ImageContainer>

        <Style.ImageContainer>
          <Style.Image src="banners/banner3.png" alt="Smartphones 25% off" />
        </Style.ImageContainer>
      </Style.Wrapper>
    </Style.Container>
  )
}

export default Slide
