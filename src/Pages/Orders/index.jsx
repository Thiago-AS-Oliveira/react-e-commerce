import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import useFormatPrice from "../../hooks/useFormatPrice"
import useFormatDate from "../../hooks/useFormatDate"
import useRequests from "../../hooks/useRequests"

import { useSelector } from "react-redux"
import { selectUser } from "../../redux/user/selectors"

import {
  BsCartCheck,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
  BsGear,
  BsHouseDoor,
  BsTruck,
} from "react-icons/bs"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"
import Style from "./style"
import EmptyElement from "../../components/EmptyElement"
import Loading from "../../components/Loading"

const Orders = () => {
  const [prodsIsOpen, setProdIsOpen] = useState(null)

  const navigate = useNavigate()
  const location = useLocation()

  const { currentUser } = useSelector(selectUser)
  const { fetchOrders } = useRequests()
  const { orders, loading } = fetchOrders()

  const currentPage = Number(location.pathname.slice(-1))
  const currentItems = orders.slice(currentPage * 5 - 5, currentPage * 5)

  const progression = (value) => {
    switch (value) {
      case "em preparação":
        return "32%"
      case "a caminho":
        return "64%"
      case "entregue":
        return "100%"
      default:
        return "0"
    }
  }

  useEffect(() => {
    !currentUser && navigate("/login", { state: "/compras/page=1" })
  }, [currentUser])

  return (
    <Style.Container>
      {loading ? (
        <Loading size="20px" />
      ) : orders.length === 0 ? (
        <EmptyElement
          image="/icons/EmptyBag.png"
          title="Compras"
          text="Você não fez nenhuma compra"
        />
      ) : (
        <>
          <Style.Content>
            <Style.Title>Compras</Style.Title>
            {currentItems.map((order, index) => (
              <Style.OrderContainer key={index}>
                <Style.OrderHeader>
                  <Style.OderId>ID: {order._id}</Style.OderId>

                  <Style.OrderInfo>
                    Data da compra: {useFormatDate(order.createdAt)}
                  </Style.OrderInfo>
                </Style.OrderHeader>

                <Style.Wrapper>
                  <Style.InfoWrapper>
                    <Style.OrderInfo>
                      Total: {useFormatPrice(order.amount)}
                    </Style.OrderInfo>
                    <Style.OrderInfo>Status: {order.status}</Style.OrderInfo>
                    <Style.OrderInfo>
                      {order.status !== "entregue"
                        ? `Entrega estimada: ${useFormatDate(
                            order.estimatedDelivery
                          )}`
                        : `Entregue dia: ${useFormatDate(
                            order.estimatedDelivery
                          )}`}
                    </Style.OrderInfo>
                  </Style.InfoWrapper>

                  <Style.InfoWrapper>
                    <Style.OrderInfo>
                      {order.address.street}, {order.address.houseNumber} -{" "}
                      {order.address.district}
                    </Style.OrderInfo>
                    <Style.OrderInfo>
                      {order.address.city} - {order.address.state},{" "}
                      {order.address.cep}
                    </Style.OrderInfo>
                    <Style.OrderInfo>
                      {order.address.complement}
                    </Style.OrderInfo>
                  </Style.InfoWrapper>
                </Style.Wrapper>

                <Style.Wrapper>
                  <Style.ShippingProgressBar>
                    <Style.ProgressBar></Style.ProgressBar>
                    <Style.ProgressBar
                      bgColor="var(--picton-blue)"
                      progression={progression(order.status)}
                    ></Style.ProgressBar>
                  </Style.ShippingProgressBar>
                  <Style.Status>
                    <Style.IconCircle status={true}>
                      <BsCartCheck />
                    </Style.IconCircle>
                    <Style.StatusLabel>Compra confirmada</Style.StatusLabel>
                  </Style.Status>

                  <Style.Status>
                    <Style.IconCircle
                      status={
                        order.status === "em preparação" ||
                        order.status === "a caminho" ||
                        order.status === "entregue"
                      }
                    >
                      <BsGear />
                    </Style.IconCircle>
                    <Style.StatusLabel>Em preparação</Style.StatusLabel>
                  </Style.Status>

                  <Style.Status>
                    <Style.IconCircle
                      status={
                        order.status === "a caminho" ||
                        order.status === "entregue"
                      }
                    >
                      <BsTruck />
                    </Style.IconCircle>
                    <Style.StatusLabel>A Caminho</Style.StatusLabel>
                  </Style.Status>

                  <Style.Status>
                    <Style.IconCircle status={order.status === "entregue"}>
                      <BsHouseDoor />
                    </Style.IconCircle>
                    <Style.StatusLabel>Entregue</Style.StatusLabel>
                  </Style.Status>
                </Style.Wrapper>

                <Style.ProductsContainer isOpen={prodsIsOpen === index}>
                  <Style.OpenProducts
                    onClick={() =>
                      setProdIsOpen(prodsIsOpen !== index ? index : null)
                    }
                  >
                    Produtos{" "}
                    {prodsIsOpen !== index ? (
                      <BsChevronDoubleDown />
                    ) : (
                      <BsChevronDoubleUp />
                    )}
                  </Style.OpenProducts>
                  {order.products.map((product, index) => (
                    <Style.Product key={index}>
                      <Style.ImageContainer>
                        <Style.Image
                          src={product.image}
                          alt="Imagen do produto"
                        />
                      </Style.ImageContainer>

                      <Style.ProdInfoContainer>
                        <Style.ProdInfo>{product.name}</Style.ProdInfo>

                        <Style.ProdInfo>
                          Preço Unitário: {useFormatPrice(product.price)}
                        </Style.ProdInfo>

                        <Style.ProdInfo>
                          Frete:{" "}
                          {product.shipping
                            ? useFormatPrice(product.shipping)
                            : "Grátis"}
                        </Style.ProdInfo>

                        <Style.ProdInfo>
                          {product.quantity}
                          {product.quantity > 1 ? ` unidades` : ` unidade`}
                        </Style.ProdInfo>
                      </Style.ProdInfoContainer>
                    </Style.Product>
                  ))}
                </Style.ProductsContainer>
              </Style.OrderContainer>
            ))}
          </Style.Content>

          <Style.Pagination>
            {currentPage > 1 && (
              <Style.ChangePage to={`/compras/page=${currentPage - 1}`}>
                <Style.IconLink>
                  <MdKeyboardArrowLeft />
                </Style.IconLink>
                Anterior
              </Style.ChangePage>
            )}

            {currentItems.length === 5 && (
              <Style.ChangePage
                to={`/compras/page=${currentPage + 1}`}
                left="auto"
              >
                Próximo
                <Style.IconLink>
                  <MdKeyboardArrowRight />
                </Style.IconLink>
              </Style.ChangePage>
            )}
          </Style.Pagination>
        </>
      )}
    </Style.Container>
  )
}

export default Orders
