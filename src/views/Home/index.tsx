import React from 'react'
import Banner from '../../components/Banner'
import * as G from '../../styles/global'
import * as S from './style'
import { categories } from '../../store/categories'
import { HomeSlide } from '../../store/mock'
import { useProductStore } from '../../store/products'
import Card from '../../components/Card'
import SimpleCard from '../../components/Simple Card'
import { Link } from 'react-router-dom'

const Home = () => {
  console.log("Main: Home")
  const { products } = useProductStore((state) => state)
  const fruits = products.filter((product) => product.category === "Fruta")
  const greens = products.filter((product) => product.category === "Verdura")
  const vegetables = products.filter((product) => product.category === "Vegetal")

  
  return (
    <>
      <Banner slideImages={HomeSlide} input={true} />
      <G.Container>
        <S.Section>
          <h1>
            Categorias
          </h1>
          <div>
            {categories.map((category) => (
              <Link to={category.route}>
                  <SimpleCard key={category.id} category={category}/>
              </Link>
            ))}
          </div>
        </S.Section>
        
        <S.Section>
          {products.length !== 0 ? 
          (
            <>
              <h1>Produtos recentes</h1><div>
                {products.map((product) => (
                  <Link to={product.id}>
                    <Card key={product.id} product={product} />
                  </Link>
                ))}
              </div>
            </>
          ) : 
          (
            <>
              <h2>Sem produtos no momento</h2>
            </>
          )
          }
        </S.Section>

        {fruits.length != 0 ? (
            <S.Section>
              <h1>Secção de Frutas</h1>
              <div>
                {fruits.map((product) => (
                  <Link to={product.id} state={product}>
                    <Card key={product.id} product={product} />
                  </Link>
                ))}
              </div>
            </S.Section>
          ) : (<></>)
        }

        {greens.length != 0 ? (
            <S.Section>
              <h1>Secção de Verduras</h1>
              <div>
                {greens.map((product) => (
                  <Link to={product.id} state={product}>
                    <Card key={product.id} product={product} />
                  </Link>
                ))}
              </div>
            </S.Section>
          ) : (<></>)
        }
        
        {vegetables.length != 0 ? (
            <S.Section>
              <h1>Secção de Vegetais</h1>
              <div>
                {vegetables.map((product) => (
                  <Link to={product.id} state={product}>
                    <Card key={product.id} product={product} />
                  </Link>
                ))}
              </div>
            </S.Section>
          ) : (<></>)
        }
      </G.Container>
    </>
  )
}

export default Home