import React from 'react'
import Banner from '../../components/Banner'
import { ContactSlide } from '../../store/mock'
import * as G from '../../styles/global'
import * as S from './style'
import cuate from "../../assets/Others/cuate.png"

const Contact = () => {

  return (
    <>
      <S.Presentation>
        <Banner slideImages={ContactSlide} />
      </S.Presentation>
      
      <G.Container>
        <S.Section>
          <h1>Contacte-nos</h1>
          <div>
            <div>
              <form action="">
                <input type="text" placeholder='Insira aqui o seu e-mail'/>
                <textarea rows={15} placeholder="Pretende entrar em contacto connosco? Envie uma mensagem para o nosso e-mail ..."/>
                <button>Enviar</button>
              </form>
            </div>
            <div>
              <img src={cuate} alt="" />
            </div>
          </div>
        </S.Section>
      </G.Container>
    </>
  )
}

export default Contact