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
                  <Card key={product.id} product={product} />
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
      </G.Container>
    </>
  )
}

export default Home