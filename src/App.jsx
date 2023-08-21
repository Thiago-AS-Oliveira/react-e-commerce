import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Home from "./Pages/Home"
import ProductList from "./Pages/ProductList"
import SingleProduct from "./Pages/SingleProduct"
import Cart from "./Pages/Cart"
import Favorites from "./Pages/Favorites"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import PageNotFound from "./components/PageNotFound"
import InitialElement from "./Pages/InitialElement"
import Orders from "./Pages/Orders"
import UserProfile from "./Pages/UserProfile"

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <InitialElement />,
      errorElement: <PageNotFound />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/produtos/:query", element: <ProductList /> },
        { path: "/produto/:id", element: <SingleProduct /> },
        { path: "/carrinho", element: <Cart /> },
        { path: "/favoritos", element: <Favorites /> },
        { path: "/compras/:page", element: <Orders /> },
        { path: "/perfil/:id", element: <UserProfile /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/cadastro", element: <Register /> },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
