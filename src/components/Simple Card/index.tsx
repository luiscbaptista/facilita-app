import React from 'react'
import { categoryType } from '../../store/categories'
import * as S from './style'

type SimpleCardProps = {
  category: categoryType
}

const SimpleCard = ( { category } : SimpleCardProps) => {
  return (
    <S.Card>
      <a href="">
        <img src={category.img} alt="" />
        <div>
          <h3>{category.name}</h3>
        </div>
      </a>
    </S.Card>
  )
}

export default SimpleCard