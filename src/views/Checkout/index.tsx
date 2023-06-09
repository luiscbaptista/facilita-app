import { useFormik, validateYupSchema } from 'formik'
import * as yup from 'yup'
import React, { useEffect, useState } from 'react'
import * as G from '../../styles/global'
import * as S from './style'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { useCartStore } from '../../store/cart'
import { useAuth } from '../../store/global'
import {v4 as uuid} from 'uuid'

const Checkout = () => {
  const navigate = useNavigate()
  const {cart, setCart} = useCartStore(state => state)
  const [mode, setModeShow] = useState(true)
  const [balance, setBalance] = useState(0)
  const { user } = useAuth((state) => state)
  const cartIsEmpty = cart.length != 0 ? true : false
  const [nome, setNome] = useState(['', 'O nome é obrigatório'])
  const [sobrenome, setSobrenome] = useState(['', 'O sobrenome é obrigatório'])
  const [email, setEmail] = useState(['', 'O email é obrigatório'])
  const [telefone, setTelefone] = useState(['', 'O telefone é obrigatório'])
  const [regiao, setRegiao] = useState(['', 'A região é obrigatória'])
  const [endereco1, setEndereco1] = useState(['', 'Uma referência é obrigatória'])
  const [metodo_envio, setMetodo_Envio] = useState(['', 'A seleção de um método é obrigatória'])
  const [data_entrega, setData_entrega] = useState(['', 'A definição de uma data é obrigatória'])
  const [metodo_pagamento, setMetodo_pagamento] = useState(['', 'A seleção de um método é obrigatória'])
  const [int_temp_entrega, setInt_Temp_Entrega] = useState(['', 'O preenchimento deste campo é obrigatório'])
  
  const getBalance = () => {
    const sum = cart.reduce((total, product) => total + product.total, 0);
    setBalance(sum);
  }
  
  useEffect(() => {
    getBalance();
    if(formik.touched.telefone && formik.errors.telefone){
      number_validation()
    }

    if(formik.touched.data_entrega && formik.errors.data_entrega){
      data_validation()
    }
  }, []);


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
      telefone: user.data?.user.contacto || "",
    },
    validationSchema: yup.object({
      nome: yup.string().required(nome[1]),
      sobrenome: yup.string().required(sobrenome[1]),
      email: yup.string().required(email[1]),
      telefone: yup.string().required(telefone[1]),
      metodo_pagamento: yup.string().required(metodo_pagamento[1]),
      data_entrega: yup.string().required(data_entrega[1]),
      endereco1: yup.string().required(endereco1[1]),
      metodo_envio: yup.string().required(metodo_envio[1]),
      regiao: yup.string().required(regiao[1]),
      intervalo_tempo_entrega: yup.string().required(int_temp_entrega[1]),
    }),
    onSubmit: (data)=> {
      try{
        /*if(validating() == 11){
          if(data_validation() && number_validation()){
            console.log(data);
            toast.success("Pedido feito com sucesso.")
            navigate("/checkout/confirmation")
          }else {
            toast.error("Verifique novamente os campos preenchidos.")
          }
        }

        if(formik.touched && formik.errors){
          toast.warning("Preencha todos os campos, por favor.")
        }*/
        
        toast.success("Pedido feito com sucesso!")
        toast.info("Verifique seu e-mail.")

        const imessage = {
          to: data.email,
          from: "facilitaapp@gmail.com",
          subject: "Confirmação de encomenda",
          body: "<h2>Detalhes do Pedido</h2>" + 
          "<p>Número do pedido: " + uuid() + "</p>" +
          "<p>Data da Compra: " + Date.now() + "</p>" +
          "<p>Total: " + balance + " Akz</p>" +
          "<p>Endereço de entrega: " + data.regiao + " " + data.endereco1 + " Akz</p>" +
          "<p>Metódo de Entrega: " + data.metodo_envio + "</p>" +
          "<p>Metódo de Pagamento: " + data.metodo_pagamento + "</p>" +
          "<p>" + checking() + "</p>"
        }

        const response = null // requisição do envio de fatura
      }catch(e){
        console.log(e)
      }
    }
  })

  const checking = () => {
    let list = "Produtos: \n"
    
    for(let i = 0; i <= cart.length; i++){
      list += '* Produto: ' + cart[i].name + ' Quantidade: ' + cart[i].amount + ' Preço: ' + cart[i].price + ' Total: ' + cart[i].total + '\n'
    }

    return list
  }

  const number_validation = () => {
    const num: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const start: string[] = ['91', '92', '93', '94', '95', '96', '22', '20', '21']
    const tel = formik.values.telefone.toString().trim()

    if(isNaN(parseInt(tel))){
      setTelefone(['', "Apenas números são permitidos"])
    }else {
      if(!start.includes(tel[0]+tel[1])){
        setTelefone(['', "Utilize um formato válido"])
        return false
      }
    }

    return true
  }

  const data_validation = () => {
    const data1: Date = new Date()
    const data2: Date = new Date(data_entrega[0])

    if(data1 > data2) {
      setData_entrega(['', 'Data inválida'])
      return false
    }

    return true
  }

  const validating = () => {
    let count = 0;
    Object.keys(formik.values).map((value, index) => {
      if (formik.values[value as keyof typeof formik.values] === "") {
        count = count + 1;
      }
      if (index === Object.keys(formik.values).length - 1) {
        count = cartIsEmpty ? count : count + 1;
      }
      return value;
    });
    return count;
  };

  return (
    <S.Container>
      <S.Card>
        <h1>Checkout</h1>
        <form onSubmit={formik.handleSubmit} >
          <S.Section>
            <h2 id='title'>
              1. Informação do Cliente
            </h2>
            <S.Content id='sec1'>
              <S.Field>
                <div>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.nome}
                  />
                  {formik.touched.nome && formik.errors.nome ? (
                  <span>{formik.errors.nome}</span>
                  ) : null}
                  <h4>Nome</h4>
                </div>
                <div >
                  <input
                    type="text"
                    id="sobrenome"
                    name="sobrenome"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.sobrenome}
                  />
                  {formik.touched.sobrenome && formik.errors.sobrenome ? (
                  <span>{formik.errors.sobrenome}</span>
                  ) : null}
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
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? (
                  <span>{formik.errors.email}</span>
                  ) : null}
                  <h4>E-mail</h4>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <input 
                    type="text"
                    id="telefone"
                    name="telefone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.telefone}
                    pattern="[0-9]+"
                    minLength={9}
                  />
                  {formik.touched.telefone && formik.errors.telefone ? (
                  <span>{formik.errors.telefone || telefone[1]}</span>
                  ) : null}
                  <h4>Número de Telefone</h4>
                </div>
              </S.Field>
              <S.Field>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <select 
                    id="regiao"
                    name='regiao'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.regiao}>
                    <option value="" defaultChecked>Selecione a região</option>
                    <option value="Vila Alice">Vila Alice</option>
                    <option value="Viana">Viana</option>
                    <option value="Morro Bento">Morro Bento</option>
                    <option value="Cazenga">Cazenga</option>
                    <option value="Talatona">Talatona</option>
                    <option value="Benfica">Benfica</option>
                  </select>
                  {formik.touched.regiao && formik.errors.regiao ? (
                  <span>{formik.errors.regiao}</span>
                  ) : null}
                  <h4>Região</h4>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <input
                    type="text"
                    id="endereco1"
                    name="endereco1"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.endereco1}
                  />
                  {formik.touched.endereco1 && formik.errors.endereco1 ? (
                  <span>{formik.errors.endereco1}</span>
                  ) : null}
                  <h4>Endereco 1</h4>
                </div>
                <div>
                  <input type="text" placeholder='Endereco2' id='endereco2' name='endereco2'/>
                  <h4>Endereco 2</h4>
                </div>
              </S.Field>
            </S.Content>
          </S.Section>

          <S.Section>
            <h2 id='title'>
              2. Metódo de Envio
            </h2>
            <div >

            </div>
            <S.Content id='sec2'>
              <S.Field>
                <div>
                  <input 
                    type="radio"
                    id="e1"
                    name="metodo_envio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={"Levantamento no Balcao"}
                  />
                  <label htmlFor="e1">0,00 AOA</label>
                  <label htmlFor="e1">Levantamento no Balcão</label>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <input
                    type="radio"
                    id="e2"
                    name="metodo_envio"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={"Entrega ao domicilio"}/>
                  <label htmlFor="e2">1500,00 AOA</label>
                  <label htmlFor="e2">Entrega ao domicílio</label>
                </div>
              </S.Field>
            </S.Content>
            {formik.touched.metodo_envio && formik.errors.metodo_envio ? (
              <span>{formik.errors.metodo_envio}</span>
            ) : null}
          </S.Section>

          <S.Section>
            <h2 id='title'>
              3. Entregas
            </h2>
            <S.Content id='sec3'>
              <S.Field>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <input
                  type="date" 
                  id="data_entrega"
                  name="data_entrega"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.data_entrega}/>
                  {formik.touched.data_entrega && formik.errors.data_entrega ? (
                    <span>{formik.errors.data_entrega || data_entrega[1]}</span>
                  ) : null}
                  <h4>Data de entrega</h4>
                </div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <select 
                    name="intervalo_tempo_entrega"
                    id="intervalo_tempo_entrega"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.intervalo_tempo_entrega}
                  >
                    <option value="">09:00 - 10:00</option>
                    <option value="">11:00 - 12:00</option>
                    <option value="">13:00 - 14:00</option>
                    <option value="">15:00 - 16:00</option>
                  </select>
                  {formik.touched.intervalo_tempo_entrega && formik.errors.intervalo_tempo_entrega ? (
                    <span>{formik.errors.intervalo_tempo_entrega}</span>
                  ) : null}
                  <h4>Intervalo de tempo de entrega</h4>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <textarea name="comentario" id="comentario" cols={105} rows={5}></textarea>
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
                  <input
                    type="radio"
                    name='metodo_pagamento'
                    id='p1'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={"Multicaixa Express"}
                  />
                  <label htmlFor="p1">Multicaixa Express</label>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <input 
                    type="radio" 
                    name='metodo_pagamento' 
                    id='p2' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={"Transferencia Bancaria"}/>
                  <label htmlFor="p2">Transferência Bancária</label>
                </div>
              </S.Field>
              <S.Field>
                <div>
                  <input
                    type="radio" 
                    name='metodo_pagamento' 
                    id='p3' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={"Cash/TPA"}/>
                  <label htmlFor="p3">Cash/TPA</label>
                </div>
              </S.Field>
            </S.Content>
            {formik.touched.metodo_pagamento && formik.errors.metodo_pagamento ? (
                <span>{formik.errors.metodo_pagamento}</span>
            ) : null}
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
                    {formik.values.metodo_envio}
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
              <button type='submit' className='active'>
                Encomendar
              </button>
          </S.Section>
        </form>  
      </S.Card>
    </S.Container>
  )
}

export default Checkout