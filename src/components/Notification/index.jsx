import React from "react"

import { BsCheck, BsX } from "react-icons/bs"
import Style from "./style"

const Notification = ({ message, error, top, mobile }) => {
  return (
    <Style.Container error={error} top={top} mobile={mobile}>
      <Style.Header></Style.Header>
      <Style.Content>
        <Style.Icon>{error ? <BsX /> : <BsCheck />}</Style.Icon>
        {message}
      </Style.Content>
    </Style.Container>
  )
}

export default Notification
