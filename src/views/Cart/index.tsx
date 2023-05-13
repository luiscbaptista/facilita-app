import React, { useEffect, useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { ProductType } from '../../config/types'
import { useCartStore } from '../../store/cart'
import * as S from './style'

const Cart = () => {
  const { cart, setCart } = useCartStore((state) => state)
  const [balance, setBalance] = useState(0)

  const getBalance = () => {
    const sum = cart.reduce((total, product) => total + product.total, 0);
    setBalance(sum);
  }

  const removeProduct = (product: ProductType) => {
    const products = cart.filter(item => item !== product)
    setCart(products)
    console.log(product)
  }

  useEffect(() => {
    getBalance();
  }, [cart]);
  
  return (
    <S.Container>
      <S.Card>
        {cart.length != 0 ? 
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
                  {cart.map((product, index) => {
                    const updateProductAmount = (amount: number) => {
                      const updatedProduct = { ...product };
                      updatedProduct.amount = amount;
                      updatedProduct.total = amount * product.price;
                      const updatedCart = [...cart];
                      updatedCart[index] = updatedProduct;
                      setCart(updatedCart); 
                      getBalance();
                    }

                    return (
                      <S.Item key={index}>
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
                          <button onClick={() => {
                              let amount = product.amount;
                              let price = product.amount * product.price;
                              if (amount > 0) {
                                amount -= 1;
                                price -= product.price;
                              }
                              updateProductAmount(amount);
                            }
                          }>
                            -
                          </button>
                          <input type="number" value={product.amount} onChange={(e) => updateProductAmount(Number(e.target.value))}/>
                          <button onClick={() => {
                            let amount = product.amount;
                            let price = product.amount * product.price;
                            amount += 1;
                            price += product.price;
                            updateProductAmount(amount)
                          }}>
                            +
                          </button>
                        </td>
                        <td>
                          {
                            product.amount * product.price
                          }
                        </td>
                        <td>
                          <button onClick={() => removeProduct(product)}>
                            <BsTrash />
                          </button>
                        </td>
                      </S.Item>              
                    )
                  })}
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