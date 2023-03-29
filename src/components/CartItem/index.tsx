import React, { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { ProductType } from '../../config/types'
import { useCartStore } from '../../store/cart'
import * as S from './style'

type CartItemProps = {
  product: ProductType
}

const CartItem = ({product}: CartItemProps) => {
  const [amount, setAmount] = useState(product.amount)
  const { removeProduct } = useCartStore((state) => state)

  const inc = () => {
    setAmount(amount + 1)
  }

  const dec = () => {
    if(amount > 0){
      setAmount(amount-1)
    }
  }

  return (
    <S.Item>
      <td>
        <img src={product.img_url} alt="" />
      </td>
      <td>
        {product.name}
      </td>
      <td>
        {product.category}
      </td>
      <td className='amount'>
        <button onClick={() => dec()}>
          -
        </button>
        <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
        <button onClick={() => inc()}>
          +
        </button>
      </td>
      <td>
        {product.price}
      </td>
      <td>
        <button onClick={() => removeProduct(product)}>
          <BsTrash />
        </button>
      </td>
    </S.Item>
  )
}

export default CartItem