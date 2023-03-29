import React from 'react'
import { useCartStore } from '../../store/cart'
import * as S from './style'

const Cart = () => {
  const { products } = useCartStore((state) => state)

  return (
    <S.Container>
      <S.Card>
        {products ? 
          (
            <>
              <S.Table>
                
              </S.Table>
              <S.Balance>
                <div>
                  <h4>Total</h4>
                  <h2>9999 Kz</h2>
                </div>

                <div>
                  <button>
                    Finalizar
                  </button>
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