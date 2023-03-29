import React from 'react'
import { AboutUsSlide } from '../../store/mock'
import Banner from '../../components/Banner'
import * as G from '../../styles/global'
import * as S from './style'
import amico from "../../assets/Others/amico.png"
import pana from "../../assets/Others/pana.png"
import employes from "../../assets/Others/employes.png"

const AboutUs = () => {
  console.log("Main: AboutUs")

  return (
    <>
      <S.Presentation>
        <Banner slideImages={AboutUsSlide} />
      </S.Presentation>
      <G.Container>
        <S.Section>
          <h1>Serviços de Entrega</h1>
          <div>
            <p>Lorem Ipsum...</p>
            <img src={amico} alt="" />
          </div>
        </S.Section>
        
        <S.Section>
          <h1>Quem Somos</h1>
          <div>
            <p>Lorem Ipsum...</p>
            <img src={pana} alt="" />
          </div>
        </S.Section>

        <S.Section>
          <h1>Seja Sócio</h1>
          <div>
            <p>Lorem Ipsum...</p>
            <img src={employes} alt="" />
          </div>
        </S.Section>
      </G.Container>
    </>
  )
}

export default AboutUs