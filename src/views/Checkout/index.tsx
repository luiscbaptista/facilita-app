import { useFormik } from 'formik'
import * as yup from 'yup'
import React, { useEffect, useState } from 'react'
import * as G from '../../styles/global'
import * as S from './style'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { useCartStore } from '../../store/cart'
import { useAuth } from '../../store/global'

const Checkout = () => {
  const navigate = useNavigate()
  const {cart, setCart} = useCartStore(state => state)
  const [mode, setModeShow] = useState(true)
  const [balance, setBalance] = useState(0)
  const [metodo_envio, setMetodo] = useState('')
  const { user } = useAuth((state) => state)

  const getBalance = () => {
    const sum = cart.reduce((total, product) => total + product.total, 0);
    setBalance(sum);
  }

  useEffect(() => {
    getBalance();
  }, [cart]);


  const formik = useFormik({
    initialValues:{
      nome: user.data?.user.name || "",
      sobrenome:  user.data?.user.sobrenome || "",
      email:  user.data?.user.email || "",
      metodo_pagamento: "",
      metodo_envio: "",
      data_entrega: "",
      intervalo_tempo_entrega: "",
      endereco1: "",
      endereco2: "",
      regiao: "",
    },
    validationSchema: yup.object({
      nome: yup.string().required("O nome é obrigatório"),
      sobrenome: yup.string().required("O sobrenome é obrigatório"),
      email: yup.string().required("O e-mail é obrigatório"),
      metodo_pagamento: yup.string().required("O contacto é obrigatório"),
      data_entrega: yup.string().required("A senha é obrigatória"),
      endereco: yup.string().required("A confirmação de senha é obrigatória"),
      metodo_envio: yup.string().required("A confirmação de senha é obrigatória"),
      pedido: yup.string().required("A confirmação de senha é obrigatória")

    }),
    onSubmit: (data)=> {
      console.log(data);
      toast.success("Pedido feito com sucesso")
    }
  })

  return (
    <S.Container>
      <S.Card>
        <h1>Checkout</h1>
        <form action="">

          <S.Section>
            <h2 id='title'>
              1. Informação do Cliente
            </h2>
            <S.Content id='sec1'>
              <S.Field>
                <div>
                  <input type="text" placeholder='Nome' id='nome' onChange={formik.handleChange}/>
                  <h4>Nome</h4>
                </div>
                <div>
                  <input type="text" placeholder='Sobrenome' id='sobrenome' onChange={formik.handleChange}/>
                  <h4>Sobrenome</h4>
                </div>
                <div>
                  <select name="" id="pais" disabled>
                    <option value="Angola" defaultChecked>Angola</option>
                  </select>
                  <h4>País</h4>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <input type="email" placeholder='E-mail' id='email' onChange={formik.handleChange}/>
                  <h4>E-mail</h4>
                </div>
                <div>
                  <input type="number" placeholder='9XXXXXXX' id='numero_telefone' onChange={formik.handleChange}/>
                  <h4>Número de Telefone</h4>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <select name="" id="regiao">
                    <option value="" defaultChecked>Selecione a região</option>
                    <option value="Vila Alice">Vila Alice</option>
                    <option value="Viana">Viana</option>
                    <option value="Morro Bento">Morro Bento</option>
                    <option value="Cazenga">Cazenga</option>
                    <option value="Talatona">Talatona</option>
                    <option value="Benfica">Benfica</option>
                  </select>
                  <h4>Região</h4>
                </div>
                <div>
                  <input type="text" placeholder='Endereco1' id='endereco1' onChange={formik.handleChange}/>
                  <h4>Endereco 1</h4>
                </div>
                <div>
                  <input type="text" placeholder='Endereco2' id='endereco2' onChange={formik.handleChange}/>
                  <h4>Endereco 2</h4>
                </div>
              </S.Field>
            </S.Content>
          </S.Section>

          <S.Section>
            <h2 id='title'>
              2. Metódo de Envio
            </h2>
            <S.Content id='sec2'>
              <S.Field>
                <div>
                  <input type="radio" name='metodo_envio' value="Levantamento no Balcao" onChange={(e) => setMetodo(e.target.value)}/>
                  <label htmlFor="">0,00 AOA</label>
                  <label htmlFor="">Levantamento no Balcão</label>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <input type="radio" name='metodo_envio' value="Entrega ao domicilio" onChange={(e) => setMetodo(e.target.value)}/>
                  <label htmlFor="">1500,00 AOA</label>
                  <label htmlFor="">Entrega ao domicílio</label>
                </div>
              </S.Field>
            </S.Content>
          </S.Section>

          <S.Section>
            <h2 id='title'>
              3. Entregas
            </h2>
            <S.Content id='sec3'>
              <S.Field>
                <div>
                  <input type="date" id='data_entrega'/>
                  <h4>Data de entrega</h4>
                </div>
                <div>
                  <select name="" id="intervalo_tempo_entrega">
                    <option value="">09:00 - 10:00</option>
                    <option value="">11:00 - 12:00</option>
                    <option value="">13:00 - 14:00</option>
                    <option value="">15:00 - 16:00</option>
                  </select>
                  <h4>Intervalo de tempo de entrega</h4>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <textarea name="" id="comentario" cols={105} rows={5}></textarea>
                  <h4>Comentário de entrega</h4>
                </div>
              </S.Field>
            </S.Content>
          </S.Section>

          <S.Section>
            <h2 id='title'>
              4. Formas de Pagamento
            </h2>
            <S.Content id='sec4'>
              <S.Field>
                <div>
                  <input type="radio" name='metodo_pagamento' value="Multicaixa Express"/>
                  <label htmlFor="">Multicaixa Express</label>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <input type="radio" name='metodo_pagamento' value="Transferencia Bancaria"/>
                  <label htmlFor="">Transferência Bancária</label>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <input type="radio" name='metodo_pagamento' value="Cash/TPA"/>
                  <label htmlFor="">Cash/TPA</label>
                </div>
              </S.Field>
            </S.Content>
          </S.Section>

          <S.Section>
            <h2 id='title'>
              5. Resumo do Pedido
            </h2>
            <S.Content id='sec5'>
              <S.Field id='func'>
                <div>
                  {cart.length} item(s) no carrinho
                </div>
                <div>
                  <p onClick={() => setModeShow(!mode)}>
                    {mode ? "esconder" : "mostrar"}
                  </p>
                </div>
              </S.Field>

              <S.Field>
                {mode ? (
                  <ul>
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
                      <li>
                        <div>
                          <img src={product.img_url} alt="" />
                        </div>
                        <div id='desc'>
                          <div>
                            <h3>
                              {product.name + " " + product.description}
                            </h3>
                          </div>
                          <div id='qtd'>
                            <h3>
                              Qtd
                            </h3>
                            <input type="number" value={product.amount} name="" id="" onChange={(e) => updateProductAmount(Number(e.target.value))}/>
                          </div>
                        </div>
                        <div>
                          <h3>
                            AOA {product.total}
                          </h3>
                        </div>
                      </li>
                    )})}
                  </ul>
                ):(<></>)}
              </S.Field>

              <S.Field id='sub'>
                <div>
                  Subtotal do carrinho
                </div>
                <div>
                  <h4>
                    AOA {balance}
                  </h4>
                </div>
              </S.Field>

              <S.Field id='sub'>
                <div>
                  Remessa
                </div>
                <div>
                  <h3>
                    {metodo_envio}
                  </h3>
                </div>
              </S.Field>

              <S.Field id='sub'>
                <div>
                  Imposto
                </div>
                <div>
                  <h4>
                    AOA {(balance * 0.14).toPrecision(3)}
                  </h4>
                </div>
              </S.Field>

              <S.Field id='sub'>
                <div>
                  Total(incluindo imposto)
                </div>
                <div>
                  <h3>
                    AOA {balance + (balance * 0.14)}
                  </h3>
                </div>
              </S.Field>
            </S.Content>
          </S.Section>

          <S.Section id='action'>
            <button type='submit'>Encomendar</button>
          </S.Section>
          
        </form>  
      </S.Card>
    </S.Container>
  )
}

export default Checkout