import { ShoppingCart } from 'phosphor-react'
import React, { useState } from 'react'
import { ProductType } from '../../config/types'
import { useCartStore } from '../../store/cart'
import * as S from './style'

type CardProps = {
  product: ProductType,
}

const Card = ({ product }: CardProps) => {
  const { addProduct } = useCartStore((state) => state)
  const [amount, setAmount] = useState(1)

  const handleAddProduct = (product: ProductType) => {
    addProduct({...product, amount: amount, total: product.price * amount})
  }

  return (
    <S.Card>
      <img src={product.img_url} alt={product.name} />      
      <div>
        <h3>
          {product.name} (<small>{product.description}</small>)
        </h3>
        <div>
          <small>
            {product.category}
          </small>
          
          <p>
            <span>Akz</span> {product.price}
          </p>
        </div>
        <S.Actions>
          <div className='add'>
            <button onClick={() => handleAddProduct(product)}>
              <span>Adicionar ao carrinho</span>
              <ShoppingCart
                size={22}
                color={"#ffffff"}
              />
            </button>
          </div>          
        </S.Actions>
      </div>
    </S.Card>
  )
}

export default Card