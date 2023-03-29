import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem'
import { useCartStore } from '../../store/cart'
import * as S from './style'

const Cart = () => {
  const { products } = useCartStore((state) => state)

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
                    <td>A pagar</td>
                    <td></td>
                  </tr>
                  {products.map((product, index) => (
                    <CartItem product={product}/>
                  ))}
                </tbody>
              </S.Table>
              <S.Balance>
                <div>
                  <h4>Total</h4>
                  <h2>9999 Kz</h2>
                </div>

                <div>
                  <Link to="/payment">
                    <button>
                      Finalizar
                    </button>
                  </Link>
                </div>
              </S.Balance>
            </>
          ) : 
          (
            <h2>Sem produtos no carrinho</h2>
          )
        }
      </S.Card>
    </S.Container>
  )
}

export default Cart