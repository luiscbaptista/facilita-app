import React from 'react'
import { FruitsSlide } from '../../../store/mock'
import Banner from '../../../components/Banner'
import * as G from '../../../styles/global'
import * as S from './style'
import InfoCard from '../../../components/InfoCard'
import Card from '../../../components/Card'
import { useProductStore } from '../../../store/products'
import { Link } from 'react-router-dom'

const Fruits = () => {

  const presentation = {
    img: "",
    description: "Elas são fontes de hidratação, além de possuírem diversos minerais e vitaminas que são muito importantes para o nosso organismo"
  }

  const { products } = useProductStore((state) => state)
  const fruits = products.filter((product) => product.category == 'Fruta')


  return (
    <>
      <Banner slideImages={FruitsSlide} input={true} />
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
          {fruits.length != 0 ? 
            (
              <>
                <h1>Produtos recentes</h1>
                <div>
                  {fruits.map((product) => (
                    <Link to="#" state={product}>
                      <Card key={product.id} product={product} />
                    </Link>
                  ))}
                </div>
              </>
            ) : 
            (
              <S.Container>
                <h2>Sem frutas no momento</h2>
              </S.Container>
            )
          }
        </S.Section>
      </G.Container>
    </>
  )
}

export default Fruits