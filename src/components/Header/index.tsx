import React from 'react'
import * as S from './style'
import logo from '../../assets/Logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { BsPersonFill } from "react-icons/bs"
import { useCartStore } from '../../store/cart'
import { Link } from 'react-router-dom'
import { useAuth } from '../../store/global'


const Header = () => {
  const { isAuth, user } = useAuth(state => state)
  const { cart } = useCartStore((state) => state)

  return (
    <>
      <S.Header>
          <Link to='/'>
            <S.Logo>
              <img src={logo} alt="" />
              <h4>Faci<span>lita</span></h4>
            </S.Logo>
          </Link>

          <S.Menu>
            <Link to='/'>
              <li>Inicio</li>
            </Link>
            
            <li>
              Produtos
              <section>
                <div>
                  <Link to="/products/fruits">
                    Frutas
                  </Link>
                  <Link to='/products/vegetables'>
                    Vegetais
                  </Link>
                  <Link to='/products/greens'>
                    Verduras
                  </Link>
                  <Link to='/products/others'>
                    Outros
                  </Link>
                </div>
              </section>
            </li>

            <Link to='/aboutus'>
              <li>Sobre nós</li>
            </Link>
            <Link to='/contact'>
              <li>Contatos</li>
            </Link>
          </S.Menu>

          <S.Extra>
            <div>
              {isAuth ? (<S.User><p>{user.data.user.name} {user.data.user.sobrenome}</p><button>Sair</button></S.User>) : 
              (
                <Link to='/login'>
                  <button>
                    <span>Entrar</span>
                    <BsPersonFill size={20} />
                  </button>
                </Link>
              )}
            </div>
            <Link to='/cart'>
              <div>
                <span>Meu Carrinho</span>
                <small>
                {cart.length} items
                </small>
              </div>
              <ShoppingCart
                size={34}
                color={"#929292"}
              />
            </Link>
          </S.Extra>
        </S.Header>
    </>
  )
}

export default Header