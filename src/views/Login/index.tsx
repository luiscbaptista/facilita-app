import React from 'react'
import * as S from './style'
import logo from '../../assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { userDataType } from '../../hooks/user'
import api from '../../config/api'


const Login = () => {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues:{
      email: "",
      senha: "",
    },
    validationSchema: yup.object({
      email: yup.string().required("o e-mail é obrigatório"),
      senha: yup.string().required("senha é obrigatório"),
    }),
    onSubmit: async (credentials) => {
      try {
        const {email, senha: password} = credentials
        const { data } = await api.post("/auth/login", {email, password})
        if(data) {
          toast.success("Login feito com sucesso")
        }else {
          toast.warning("E-mail ou senha errada.")
        }
      } catch (error) {
        console.log(error);
        
      }
    }
  })  

  return (
    <S.Container>
      <div>
        <div className='logo'>
          <img src={logo} alt="" />
          <h2>Iniciar Sessão</h2>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div>
            <input type="email" placeholder='Email' name='email' onChange={formik.handleChange} id='email'/>
          </div>
         
          <div>
            <input type="password" placeholder='Senha' name='senha' onChange={formik.handleChange} id='senha'/>
            <Link to="/">
              <a href="">Esqueceu a senha?</a>
            </Link>
          </div>
          
          <button type='submit'>
            Entrar
          </button>
        </form>

        <Link to="/signup">
          Ainda não possui uma conta? <a href="#">Criar uma conta</a>
        </Link>
      </div>
    </S.Container>
  )
}

export default Login
