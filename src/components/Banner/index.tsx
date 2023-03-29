import React from 'react'
import * as S from './style'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsSearch } from 'react-icons/bs'
import { ImageType } from '../../store/mock'

type SlideProps = {
  slideImages: ImageType[],
  input?: boolean
}

const Banner = ({ slideImages, input }: SlideProps) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
    pauseOnHover: true,
    arrows: false
  };

  return (
    <S.Banner>
      <Slider {...settings}>
        {slideImages.map((image, index) => (
          <div key={index}>
            <S.Image style={{'background': `url(${image.url})`, 'backgroundRepeat': 'no-repeat', 'backgroundColor': '#0000009d', 'backgroundBlendMode': 'color', 'backgroundSize': 'cover'}}>
              <S.Content>
                <h1>{image.title}</h1>
                <h2>{image.subtitle}</h2>
                {input ?
                  (<form action="">
                    <BsSearch />
                    <input type="text" placeholder='Busque no facilita ...'/>
                  </form>)
                : ("")}
              </S.Content>
            </S.Image>
          </div>
        ))}
      </Slider>
    </S.Banner>
  )
}

export default Banner