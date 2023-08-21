import React, { useState } from "react"
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import {
  BsChat,
  BsEnvelope,
  BsFacebook,
  BsInstagram,
  BsTelephone,
  BsTiktok,
  BsTwitter,
  BsWhatsapp,
  BsYoutube,
} from "react-icons/bs"

import Style from "./style"

const Footer = () => {
  const [openList1, setOpenList1] = useState(false)
  const [openList2, setOpenList2] = useState(false)
  const [openList3, setOpenList3] = useState(false)

  return (
    <Style.Container>
      <Style.BackToTop href="#top">
        Voltar ao topo
        <Style.Icon>
          <MdKeyboardArrowUp />
        </Style.Icon>
      </Style.BackToTop>

      <Style.Main>
        <Style.Wrapper>
          <Style.Logo>Dev Store</Style.Logo>

          <Style.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
            distinctio itaque. Quo obcaecati deserunt inventore, quam assumenda
            id, cupiditate quibusdam dolorem illum.
          </Style.Text>

          <Style.SocialMedias>
            <Style.Icon color="#E1306C">
              <BsInstagram />
            </Style.Icon>

            <Style.Icon color="#4267B2">
              <BsFacebook />
            </Style.Icon>

            <Style.Icon color="#1DA1F2">
              <BsTwitter />
            </Style.Icon>

            <Style.Icon color="#FF0000">
              <BsYoutube />
            </Style.Icon>

            <Style.Icon color="#000">
              <BsTiktok />
            </Style.Icon>
          </Style.SocialMedias>
        </Style.Wrapper>

        <Style.Wrapper>
          <Style.Title onClick={() => setOpenList1(!openList1)}>
            Dúvidas ?
            <Style.ArrowDown>
              <MdKeyboardArrowDown />
            </Style.ArrowDown>
          </Style.Title>
          <Style.List hide={openList1}>
            <Style.ListItem>Política de Trocas</Style.ListItem>
            <Style.ListItem>Prazo e Forma de Entrega</Style.ListItem>
            <Style.ListItem>Política de privacidade e seguranca</Style.ListItem>
            <Style.ListItem>Termos e condições de uso</Style.ListItem>
          </Style.List>
        </Style.Wrapper>

        <Style.Wrapper>
          <Style.Title onClick={() => setOpenList2(!openList2)}>
            Institucional
            <Style.ArrowDown>
              <MdKeyboardArrowDown />
            </Style.ArrowDown>
          </Style.Title>
          <Style.List hide={openList2}>
            <Style.ListItem>Nossas Lojas</Style.ListItem>
            <Style.ListItem>Sobre a empresa</Style.ListItem>
            <Style.ListItem>Assistência Técnica de Produtos</Style.ListItem>
            <Style.ListItem>Trabalhe Conosco</Style.ListItem>
          </Style.List>
        </Style.Wrapper>

        <Style.Wrapper>
          <Style.Title onClick={() => setOpenList3(!openList3)}>
            Atendimento
            <Style.ArrowDown>
              <MdKeyboardArrowDown />
            </Style.ArrowDown>
          </Style.Title>
          <Style.List hide={openList3}>
            <Style.ListItem>
              <Style.ListIcon>
                <BsTelephone />
              </Style.ListIcon>
              (00) 1234-5678
            </Style.ListItem>
            <Style.ListItem>
              <Style.ListIcon>
                <BsWhatsapp />
              </Style.ListIcon>
              (00) 12345-6789
            </Style.ListItem>
            <Style.ListItem>
              <Style.ListIcon>
                <BsChat />
              </Style.ListIcon>
              Chat
            </Style.ListItem>
            <Style.ListItem>
              <Style.ListIcon>
                <BsEnvelope />
              </Style.ListIcon>
              Formulário de Contato
            </Style.ListItem>
          </Style.List>
        </Style.Wrapper>
      </Style.Main>

      <Style.DevelopedBy>Desenvolvido por Thiago Oliveira</Style.DevelopedBy>

      <Style.Copyright>
        2023 . Dev Store Brasil S/A © Todos os direitos reservados
      </Style.Copyright>
    </Style.Container>
  )
}

export default Footer
