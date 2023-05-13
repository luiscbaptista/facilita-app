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
            <p>
              No Facilita, reconhecemos a importância da eficiência e conveniência no processo de entrega de produtos agrícolas. Nossos serviços de entrega foram desenvolvidos com o objetivo de proporcionar uma experiência tranquila e confiável aos nossos clientes.

              No Facilita, acreditamos que a entrega eficiente e confiável é essencial para o sucesso de nossos clientes. Com nossos serviços de entrega, você pode contar com a pontualidade, qualidade e suporte necessário para manter suas operações agrícolas funcionando sem problemas.

              Facilita - Facilitando o setor agrícola com serviços de entrega excepcionais.
            </p>
            <img src={amico} alt="" />
          </div>
        </S.Section>
        
        <S.Section>
          <h1>Quem Somos</h1>
          <div>
            <p>
              Nossa missão é simplificar o processo de aquisição de produtos agrícolas, oferecendo uma experiência de compra conveniente e eficiente para nossos clientes. Estamos constantemente buscando aprimorar nossos serviços e expandir nossa linha de produtos, para atender às necessidades em constante evolução do mercado agrícola.
            </p>
            <img src={pana} alt="" />
          </div>
        </S.Section>

        <S.Section>
          <h1>Seja Sócio</h1>
          <div>
            <p>
              Ao escolher o Facilita como seu parceiro, você terá acesso a uma ampla gama de produtos agrícolas de alta qualidade, que vão desde sementes e fertilizantes até equipamentos avançados de cultivo. Trabalhamos em estreita colaboração com fornecedores cuidadosamente selecionados para garantir que nossos clientes recebam os melhores produtos disponíveis no mercado.
              Entre em contato conosco hoje mesmo para discutirmos os detalhes de uma parceria estratégica. Estamos ansiosos para embarcar nessa jornada emocionante com você e alcançar novos patamares no mercado agrícola.
            </p>
            <img src={employes} alt="" />
          </div>
        </S.Section>
      </G.Container>
    </>
  )
}

export default AboutUs