import React from 'react'
import { AboutUsSlide, ImageType } from '../../store/mock'
import Banner from '../../components/Banner'
import * as G from '../../styles/global'
import * as S from './style'
import amico from "../../assets/Others/amico.png"
import pana from "../../assets/Others/pana.png"
import employes from "../../assets/Others/employes.png"
import Slider from 'react-slick'

const AboutUs = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5500,
    pauseOnHover: true,
    arrows: false
  };

  const slideImage: ImageType = {
    url: "https://lh3.googleusercontent.com/pw/AJFCJaXUBH_ntcTpdvTtlo5JQfpP8kAcw8GhST-I9ztZvVJKSe9YbmM4NUOaewGlcPBqd1vLKGgOrTMrAodbPc1HA_chBI9mj8XbX3d3FYuIJInVzAZ5bD6EOya-2d0kQzmpKNWdWnrCKgMaDoBylCEFlMjSzKeCCYjzpuoprarTymuIeELN-Vsc29lyhBDX1epyzyldkR6LgyOuX48Oee9t6-ji_1M6avJt0POuBiuOkXajKBdJzOYq5ItREhwD4AF2mkeLT3K3_OsOpeH5lh-uw_8g0sp4Bs2sdhHPDy8aGQgm2pMUlB2UuT1rtjyCe_KfIRQxtRi9S7fE3ds99jK7lT3QkhHRSal9MvqD0Qa6YcnkPEI49D-hhTiOANMj7VnzyW3SkvZKaRnOwVuGtPuXD-uBi19-ymy4XlBbR9oAphAg46dewoHQOm5qMQnFIApYokiL-Fc3N_Zmgd5dbO7114NcZZqibGfwNPjMpI9ICXfuhCXmR4Kixyq4h6K5iBmjf39tgzY5VErK9s8Z9JjWRLBCgp54XWF0B46KhbU7bKdE-dd68XJthAHWc8x5flg0C9FN7d12aSueQxUnB9QTWx9YMhQmPO3rrWEgtGinn0sE1GILtWnbcQeyc_jdyjybIRzH9kggVaDy3EBSRx-IW7IP9ElGcUzJjP2sHWU6drzMhj4CqkQHiFamRXXWDQY-o13Ae1RzVS_7MqF7Cwd-lYWReJh4v05KsSEpi5KN3FfYKQmz7jMbSFBRGNRMeGrCKiKNAwKiJPhBV9mZLPy5FTRRqW4bPl0tk03GB66PZvztXY56S1QhvQ3d_Gc8m_4mKYbtoOD6a6PXvVO-bJpAFG9mtMUhQ2fkm2bcBFK8GnFa9-FjINGj5Sczdrk32UhQkc2Ov27oBMkV2jnJpQ7MeiyUJNGuP6HSosX-YKObncsn0xbyzBn2So_bY2F_NePHTG8=w673-h673-s-no?authuser=0&authuser=0",
    caption: "",
    title: "Sobre nós",
    subtitle: ""    
  }

  return (
    <>
      <S.Presentation>
        <S.Banner>
          <Slider {...settings}>
              <div>
                <S.Image style={{'background': `url(${slideImage.url})`, 'backgroundColor': '#0000009d', 'backgroundBlendMode': 'color'}}>
                  <S.Content>
                    <h1>{slideImage.title}</h1>
                    <h2>{slideImage.subtitle}</h2>
                  </S.Content>
                </S.Image>
              </div>
          </Slider>
        </S.Banner>
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