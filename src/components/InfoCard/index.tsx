import React from 'react'
import * as S from './style'
import Laranja from '../../assets/laranja.webp'

type InfoType = {
  img: string,
  description: string
}

type InfoCardProps = {
  info: InfoType
}

const InfoCard = ({ info } : InfoCardProps) => {
  return (
    <S.Card>
      <div>
        <img src={Laranja} alt="" />
      </div>
      <S.Content>
        <p>
          {info.description}
        </p>
      </S.Content>
    </S.Card>
  )
}

export default InfoCard