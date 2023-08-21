import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { BiExit, BiUserCircle } from "react-icons/bi"

import { selectUser } from "../../redux/user/selectors"
import { selectFavoritesProductsCount } from "../../redux/favorites/selectors"
import { selectCartProductsCount } from "../../redux/cart/selectors"

import Style from "./style"
import {
  BsBag,
  BsCart,
  BsHeadset,
  BsHeart,
  BsHouseDoor,
  BsQuestionCircle,
} from "react-icons/bs"

import { AiOutlineClose } from "react-icons/ai"
import useRequests from "../../hooks/useRequests"

const SideMenu = ({ showMenu, openMenu }) => {
  const dispatch = useDispatch()
  const { logout } = useRequests()
  const cartQuantity = useSelector(selectCartProductsCount)
  const favoritesQuantity = useSelector(selectFavoritesProductsCount)
  const { currentUser } = useSelector(selectUser)

  const handleLogout = (e) => {
    logout(dispatch)
    openMenu(false)
  }
  return (
    <Style.Container showMenu={showMenu}>
      <Style.Profile>
        <Style.ProfileIcon>
          <BiUserCircle />
        </Style.ProfileIcon>

        <Style.CloseIcon
          onClick={() => {
            openMenu(false)
          }}
        >
          <AiOutlineClose />
        </Style.CloseIcon>

        {currentUser ? (
          <>
            <Style.UserInfo>
              {currentUser.name} {currentUser.lastname}
            </Style.UserInfo>
            <Style.UserInfo>{currentUser.email}</Style.UserInfo>
          </>
        ) : (
          <>
            <Style.ProfileLinks
              to="/login"
              fontSize="1.8rem"
              color="var(--bunker)"
            >
              Faça Login
            </Style.ProfileLinks>

            <Style.ProfileLinks
              to="/cadastro"
              fontSize="1.6rem"
              color="var(--picton-blue)"
            >
              Cadastre-se
            </Style.ProfileLinks>
          </>
        )}
      </Style.Profile>

      <Style.MenuItem to="/">
        <Style.MenuIcon>
          <BsHouseDoor />
        </Style.MenuIcon>
        Página Inicial
      </Style.MenuItem>

      <Style.MenuItem to="/compras/page=1">
        <Style.MenuIcon>
          <BsBag />
        </Style.MenuIcon>
        Compras
      </Style.MenuItem>

      <Style.MenuItem to="/favoritos">
        <Style.MenuIcon>
          <BsHeart />
        </Style.MenuIcon>
        Favoritos
        {favoritesQuantity !== 0 && `(${favoritesQuantity})`}
      </Style.MenuItem>

      <Style.MenuItem to="/carrinho">
        <Style.MenuIcon>
          <BsCart />
        </Style.MenuIcon>
        Carrinho
        {cartQuantity !== 0 && `(${cartQuantity})`}
      </Style.MenuItem>

      <Style.MenuItem>
        <Style.MenuIcon>
          <BsHeadset />
        </Style.MenuIcon>
        Suporte
      </Style.MenuItem>

      <Style.MenuItem>
        <Style.MenuIcon>
          <BsQuestionCircle />
        </Style.MenuIcon>
        Perguntas
      </Style.MenuItem>

      <Style.MenuItem to={currentUser ? `/perfil/${currentUser._id}` : "#"}>
        <Style.MenuIcon>
          <BiUserCircle />
        </Style.MenuIcon>
        Meu Perfil
      </Style.MenuItem>

      <Style.Title>Categorias</Style.Title>

      <Style.MenuItem to="/produtos/category=pc gamer">PC Gamer</Style.MenuItem>

      <Style.MenuItem to="/produtos/category=notebooks">
        Notebooks
      </Style.MenuItem>

      <Style.MenuItem to="/produtos/category=smartphones">
        Smartphones
      </Style.MenuItem>

      <Style.MenuItem to="/produtos/category=tablets">Tablets</Style.MenuItem>

      <Style.MenuItem to="/produtos/category=perifericos">
        Periféricos
      </Style.MenuItem>

      <Style.MenuItem to="/produtos/category=fonesbluetooth">
        Fones Bluetooth
      </Style.MenuItem>

      {currentUser && (
        <>
          <Style.Logout onClick={handleLogout}>
            Sair
            <BiExit />
          </Style.Logout>
        </>
      )}
    </Style.Container>
  )
}

export default SideMenu
