import React from 'react'
import { OthersSlide } from '../../../store/mock'
import Banner from '../../../components/Banner'
import * as G from '../../../styles/global'
import * as S from './style'
import InfoCard from '../../../components/InfoCard'
import Card from '../../../components/Card'
import { useProductStore } from '../../../store/products'
import { Link } from 'react-router-dom'

const Others = () => {

  const presentation = null

  const { products } = useProductStore((state) => state)
  const Others = products.filter((product) => product.category == 'Fruta')


  return (
    <>
      <Banner slideImages={OthersSlide} input={true} />
      <G.Container>
        {presentation ? 
          (
            <S.Section>
              <InfoCard info={presentation}/>
          </S.Section>
          ) : 
          (<></>)
        }
        
        <S.Section>
          {Others.length != 0 ? 
            (
              <>
                <h1>Produtos recentes</h1>
                <div>
                  {Others.map((product) => (
                    <Link to="#" state={product}>
                      <Card key={product.id} product={product} />
                    </Link>
                  ))}
                </div>
              </>
            ) : 
            (
              <S.Container>
                <h2>Sem produtos no momento</h2>
              </S.Container>
            )
          }
        </S.Section>
      </G.Container>
    </>
  )
}

export default Others