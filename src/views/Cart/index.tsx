import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'
import { useCartStore } from '../../store/cart'
import * as S from './style'

const Cart = () => {
  const { products } = useCartStore((state) => state)
  const [balance, setBalance] = useState(0)

  const getBalance = () => {
    let total = products.map((product) => product.total)
    let balance = 0

    for(var i = 0; i < total.length; i++){
      balance += total[i]
    }

    setBalance(balance)
  }

  useEffect(() => getBalance(), [])

  return (
    <S.Container>
      <S.Card>
        {products.length != 0 ? 
          (
            <>
              <S.Table>
                <thead>
                  
                </thead>
                <tbody>
                  <tr className='header'>
                    <td></td>
                    <td>Produto</td>
                    <td>Categoria</td>
                    <td>Quantidade</td>
                    <td>Preço</td>
                    <td></td>
                  </tr>
                  {products.map((product, index) => (
                    <CartItem product={product}/>
                  ))}
                </tbody>
              </S.Table>
            </>
          ) : 
          (
            <h1>Sem produtos no carrinho</h1>
          )
        }
        <S.Balance>
          <div>
            <h4>Total</h4>
            <h2>{balance},00 Kz</h2>
          </div>

          <div>
            {balance != 0 ? 
              (
                <Link to="/checkout">
                  <button className='active'>
                    Finalizar
                  </button>
                </Link>
              ): 
              (
                <button className='disabled'>
                  Finalizar
                </button>
              )
            }
          </div>
        </S.Balance>
      </S.Card>
    </S.Container>
  )
}

export default Cart