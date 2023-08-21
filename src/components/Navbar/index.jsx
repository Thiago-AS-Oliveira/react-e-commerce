import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { selectCartProductsCount } from "../../redux/cart/selectors"
import { selectFavoritesProductsCount } from "../../redux/favorites/selectors"
import { selectUser } from "../../redux/user/selectors"

import { BsCart2, BsHandbag, BsHeart, BsList, BsSearch } from "react-icons/bs"
import { MdKeyboardArrowDown } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi"
import Style from "./style"

import SideMenu from "../SideMenu"
import useRequests from "../../hooks/useRequests"

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("")
  const [showMenu, setShowMenu] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartQuantity = useSelector(selectCartProductsCount)
  const favoritesQuantity = useSelector(selectFavoritesProductsCount)
  const { currentUser } = useSelector(selectUser)
  const { logout } = useRequests()

  const location = useLocation()

  useEffect(() => {
    setShowMenu(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout(dispatch)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    searchValue && navigate(`/produtos/search=${searchValue}`)
  }

  return (
    <Style.Container id="#top">
      <Style.Top>
        <Style.MenuIcon onClick={() => setShowMenu(!showMenu)}>
          <BsList />
        </Style.MenuIcon>

        <Style.CartLink to="/carrinho">
          <Style.Quantity>{cartQuantity}</Style.Quantity>
          <BsCart2 />
        </Style.CartLink>
        {<SideMenu showMenu={showMenu} openMenu={setShowMenu} />}

        <Style.Logo to="/">Dev Store</Style.Logo>

        <Style.Links>
          <Style.MenuLink to="/compras/page=1">
            <Style.Icon>
              <BsHandbag />
            </Style.Icon>
            Compras
          </Style.MenuLink>

          <Style.MenuLink to="/favoritos">
            <Style.Icon>
              {favoritesQuantity > 0 && (
                <Style.Quantity>{favoritesQuantity}</Style.Quantity>
              )}
              <BsHeart />
            </Style.Icon>
            Favoritos
          </Style.MenuLink>

          <Style.MenuLink to="/carrinho">
            <Style.Icon>
              {cartQuantity > 0 && (
                <Style.Quantity>{cartQuantity}</Style.Quantity>
              )}
              <BsCart2 />
            </Style.Icon>
            Carrinho
          </Style.MenuLink>

          <Style.UserArea>
            <Style.UserIcon>
              <BiUserCircle />
            </Style.UserIcon>

            {currentUser ? (
              <Style.Content>
                <Style.Name>{currentUser.username}</Style.Name>
                <Style.Name>
                  {currentUser.name} <MdKeyboardArrowDown />
                </Style.Name>

                <Style.DropDownMenu position="right: -35px; top: 30px;">
                  <Style.UserInfo>
                    <span className="userIcon">
                      <BiUserCircle />
                    </span>

                    <div>
                      <span>{currentUser.username}</span>
                      <span>
                        {currentUser.name} {currentUser.lastname}
                      </span>
                      <span>{currentUser.email}</span>
                    </div>
                  </Style.UserInfo>

                  <Style.MenuWrapper>
                    <Style.MenuItem to={`/perfil/${currentUser._id}`}>
                      Meu Perfil
                    </Style.MenuItem>
                  </Style.MenuWrapper>

                  <Style.MenuWrapper>
                    <Style.MenuItem to="#">Suporte</Style.MenuItem>
                    <Style.MenuItem to="#">Perguntas</Style.MenuItem>
                  </Style.MenuWrapper>

                  <Style.MenuWrapper>
                    <Style.MenuItem onClick={handleLogout}>Sair</Style.MenuItem>
                  </Style.MenuWrapper>
                </Style.DropDownMenu>
              </Style.Content>
            ) : (
              <Style.Content>
                <Style.UserLink to="/login">Entre</Style.UserLink>
                <Style.UserLink to="/cadastro">Cadastre-se</Style.UserLink>
              </Style.Content>
            )}
          </Style.UserArea>
        </Style.Links>
      </Style.Top>

      <Style.Bottom>
        <Style.Categorie>
          Categorias <MdKeyboardArrowDown />
          <Style.DropDownMenu position="top: 26px; left: -20px;">
            <Style.MenuWrapper>
              <Style.MenuItem to="/produtos/category=pc gamer">
                PC Gamer
              </Style.MenuItem>
            </Style.MenuWrapper>

            <Style.MenuWrapper>
              <Style.MenuItem to="/produtos/category=notebooks">
                Notebooks
              </Style.MenuItem>
            </Style.MenuWrapper>

            <Style.MenuWrapper>
              <Style.MenuItem to="/produtos/category=smartphones">
                Smartphones
              </Style.MenuItem>
            </Style.MenuWrapper>

            <Style.MenuWrapper>
              <Style.MenuItem to="/produtos/category=tablets">
                Tablets
              </Style.MenuItem>
            </Style.MenuWrapper>

            <Style.MenuWrapper>
              <Style.MenuItem to="/produtos/category=perifericos">
                Periféricos
              </Style.MenuItem>
            </Style.MenuWrapper>

            <Style.MenuWrapper>
              <Style.MenuItem to="/produtos/category=fones bluetooth">
                Fones Bluetooth
              </Style.MenuItem>
            </Style.MenuWrapper>
          </Style.DropDownMenu>
        </Style.Categorie>

        <Style.SearchForm onSubmit={handleSubmit}>
          <Style.Input
            type="text"
            placeholder="Buscar produtos ou categorias"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <Style.Button>
            <BsSearch />
          </Style.Button>
        </Style.SearchForm>
      </Style.Bottom>
    </Style.Container>
  )
}

export default Navbar

// const Navbar = () => {

//   return (
//     <Style.Container >
//       <Style.Top>

//         <Style.Wrapper>
//           <Style.SearchForm onSubmit={handleSubmit}>
//             <Style.Input
//               type="text"
//               placeholder="Buscar produtos ou categorias"
//               onChange={(e) => setSearchValue(e.target.value)}
//               value={searchValue}
//             />

//             <Style.Button>
//               <BsSearch />
//             </Style.Button>
//           </Style.SearchForm>
//         </Style.Wrapper>

//         <Style.Wrapper>
//           <Style.PromoLink to="/produtos/category=pc gamer">
//             <Style.PromoImage src="/icons/WeekPromotion.png" />
//           </Style.PromoLink>

//           <Style.Icon onClick={() => setShowMenu(true)}>
//             <BsList />
//           </Style.Icon>

//           <SideMenu
//             showMenu={showMenu}
//             openMenu={setShowMenu}
//             cartQuantity={cartQuantity}
//             favoritesQuantity={favoritesQuantity}
//           />

//           <Style.IconLink to="/carrinho">
//             <Style.Quantity>{cartQuantity}</Style.Quantity>
//             <BsCart2 />
//           </Style.IconLink>
//         </Style.Wrapper>
//       </Style.Top>

//       <Style.Bottom>
//         <Style.BottomWrapper width="40%">
//           <Style.CategorieLink to="/produtos/category=pc gamer">
//             PC Gamer
//           </Style.CategorieLink>

//           <Style.CategorieLink to="/produtos/category=notebooks">
//             Notebooks
//           </Style.CategorieLink>

//           <Style.CategorieLink to="/produtos/category=smartphones">
//             Smartphones
//           </Style.CategorieLink>

//           <Style.CategorieLink to="/produtos/category=tablets">
//             Tablets
//           </Style.CategorieLink>

//           <Style.CategorieLink to="/produtos/category=perifericos">
//             Periféricos
//           </Style.CategorieLink>

//           <Style.CategorieLink to="/produtos/category=fones bluetooth">
//             Fones Bluetooth
//           </Style.CategorieLink>
//         </Style.BottomWrapper>

//         <Style.BottomWrapper>
//           <Style.MenuItem to="/compras/page=1">Compras</Style.MenuItem>

//           <Style.MenuItem to="/favoritos">
//             Favoritos
//             {favoritesQuantity > 0 && ` (${favoritesQuantity})`}
//           </Style.MenuItem>

//           <Style.MenuItem to="/carrinho">
//             Carrinho
//             {cartQuantity > 0 && ` (${cartQuantity})`}
//           </Style.MenuItem>

//           {!currentUser ? (
//             <>
//               <Style.MenuItem to="/cadastro" state={location.pathname}>
//                 Crie sua conta
//               </Style.MenuItem>
//               <Style.MenuItem to="/login" state={location.pathname}>
//                 Entre
//               </Style.MenuItem>
//             </>
//           ) : (
//             <Style.UserContent>
//               <Style.UserIcon>
//                 <BiUserCircle />
//               </Style.UserIcon>
//               {currentUser.name}

//               <MdKeyboardArrowDown style={{ color: "#2223" }} />

//               <Style.UserMenu>
//                 <Style.UserWrapper padding="20px 10px">
//                   <Style.UserIcon fontSize="5rem">
//                     <BiUserCircle />
//                   </Style.UserIcon>

//                   <Style.InfoContainer>
//                     <Style.UserInfo>
//                       {currentUser.name} {currentUser.lastname}
//                     </Style.UserInfo>
//                     <Style.UserInfo>{currentUser.email}</Style.UserInfo>
//                     <Style.UserInfo>{currentUser.username}</Style.UserInfo>
//                   </Style.InfoContainer>
//                 </Style.UserWrapper>

//                 <Style.UserWrapper>
//                   <Style.UserLink to={`/perfil/${currentUser._id}`}>
//                     Meu Perfil
//                   </Style.UserLink>
//                 </Style.UserWrapper>

//                 <Style.UserWrapper>
//                   <Style.UserLink to="#">Suporte</Style.UserLink>
//                   <Style.UserLink to="#">Perguntas</Style.UserLink>
//                 </Style.UserWrapper>

//                 <Style.UserWrapper>
//                   <Style.UserLink onClick={handleLogout}>Sair</Style.UserLink>
//                 </Style.UserWrapper>
//               </Style.UserMenu>
//             </Style.UserContent>
//           )}
//         </Style.BottomWrapper>
//       </Style.Bottom>
//     </Style.Container>
//   )
// }

// export default Navbar
