import React, { useState } from 'react'
import * as S from './style'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { toast } from 'react-toastify'
import { createUserDataType } from '../../hooks/user'

const Signup = () => {
  const navigate = useNavigate()

  async function handleCreateUser(e: React.FormEvent){
    e.preventDefault()
    
  }
  
  const formik = useFormik({
    initialValues:{
      nome: "",
      sobrenome: "",
      email: "",
      contacto: "",
      senha: "",
      senha2: "",
      data_nasc: ""
    },
    validationSchema: yup.object({
      nome: yup.string().required("O nome é obrigatório"),
      sobrenome: yup.string().required("O sobrenome é obrigatório"),
      email: yup.string().required("O e-mail é obrigatório"),
      contacto: yup.number().required("O contacto é obrigatório"),
      senha: yup.string().required("A senha é obrigatória"),
      senha2: yup.string().required("A confirmação de senha é obrigatória")
    }),
    onSubmit: (data)=> {
      console.log(data);
      toast.success("Cadastro feito com sucesso")
    }
  })

  async function handlePost(data: createUserDataType){
    try{
      const newUser = data

      if(newUser){
        toast.success("Usuário cadastrado com sucesso!")
        navigate("/")
      }
    }catch(error){
      toast.error(`${error}`)
    }

  }

  return (
    <S.Container>
      <div>
        <div>
          <h2>Cadastre-se</h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <S.Field>
            <div>
              <input type="text" placeholder='Nome' id='nome' onChange={formik.handleChange}/>
              <h4>Nome</h4>
            </div>
            <div>
              <input type="text" placeholder='Sobrenome' id='sobrenome' onChange={formik.handleChange}/>
              <h4>Sobrenome</h4>
            </div>
          </S.Field>
         
          <S.Field>
            <div>
              <input type="email" placeholder='Email' id='email' onChange={formik.handleChange}/>
              <h4>Email</h4>
            </div>

            <div>
              <input type="number" placeholder='Nº de Telefone' id='contacto' onChange={formik.handleChange}/>
              <h4>Número de Telefone</h4>
            </div>
          </S.Field>

          <S.Field>
            <div>
              <input type="password" placeholder='Senha' id='senha' onChange={formik.handleChange}/>
              <h4>Senha</h4>
            </div>
            <div>
              <input type="password" placeholder='Confirme sua senha' id='senha2' onChange={formik.handleChange}/>
              <h4>Confirme sua senha</h4>
            </div>
          </S.Field> 

          <button type='submit'>
            Criar conta
          </button>
        </form>
      </div>
    </S.Container>
  )
}

export default Signup