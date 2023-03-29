import React from 'react'
import * as S from './style'
import logo from '../../assets/Logo.svg'
import { FacebookLogo, WhatsappLogo, TwitterLogo } from 'phosphor-react'

const Footer = () => {

  return (
    <S.Footer>
      <S.Logo>
        <img src={logo} alt="" />
        <h4>Faci<span>lita</span></h4>
      </S.Logo>

      <S.Info>
        <a href="">Termos e Condições</a>
        <a href="">Segurança</a>
        <a href="">Informação</a>
      </S.Info>

      <S.Media>
        <a href="">
          <FacebookLogo color={"#fff"} size={40} />
        </a>

        <a href="">
          <WhatsappLogo color={"#fff"} size={40} />
        </a>

        <a href="">
          <TwitterLogo color={"#fff"} size={40} />
        </a>
      </S.Media>

      <S.Newsletter>
        <input type="email" placeholder='Inscreva-se na nossa newsletter' />
        <button>
          Inscreve-se
        </button>
      </S.Newsletter>
    </S.Footer>
  )
}

export default Footer