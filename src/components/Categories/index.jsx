import React from "react"

import Style from "./style"

const Categories = () => {
  return (
    <Style.Container>
      <Style.Card to="/produtos/category=pc gamer">
        <Style.Title>PC Gamer</Style.Title>
        <Style.Image src="card-images/pcgamer.png" alt="PC Gamer" />
      </Style.Card>

      <Style.Card to="/produtos/category=notebooks">
        <Style.Title>Notebooks</Style.Title>
        <Style.Image src="card-images/notebook.png" alt="Notebooks" />
      </Style.Card>

      <Style.Card to="/produtos/category=smartphones">
        <Style.Title>Smartphones</Style.Title>
        <Style.Image src="card-images/smartphone.png" alt="Smartphones" />
      </Style.Card>

      <Style.Card to="/produtos/category=tablets">
        <Style.Title>Tablets</Style.Title>
        <Style.Image src="card-images/tablet.png" alt="Tablets" />
      </Style.Card>

      <Style.Card to="/produtos/category=perifericos">
        <Style.Title>Periféricos</Style.Title>
        <Style.Image src="card-images/perifericos.png" alt="Periféricos" />
      </Style.Card>

      <Style.Card to="/produtos/category=fones bluetooth">
        <Style.Title>Fones Bluetooth</Style.Title>
        <Style.Image
          src="card-images/fonebluetooth.png"
          alt="Fones Bluetooths"
        />
      </Style.Card>
    </Style.Container>
  )
}

export default Categories
