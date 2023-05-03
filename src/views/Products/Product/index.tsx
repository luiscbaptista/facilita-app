import React from 'react'
import { useLocation } from 'react-router-dom'
import * as S from './style'

const Product = () => {
  const { state } = useLocation()

  return (
    <S.Container>
      <S.Card>
        <div>Producto</div>
      </S.Card>
    </S.Container>
  )
}

export default Product