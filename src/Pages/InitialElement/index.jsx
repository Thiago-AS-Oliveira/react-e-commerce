import React, { useLayoutEffect } from "react"
import Navbar from "../../components/Navbar"
import { Outlet, useLocation } from "react-router-dom"
import Footer from "../../components/Footer"

const InitialElement = () => {
  const location = useLocation()

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default InitialElement
