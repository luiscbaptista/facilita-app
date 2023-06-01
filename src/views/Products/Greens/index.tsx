import React from 'react'
import { GreensSlide } from '../../../store/mock'
import Banner from '../../../components/Banner'
import * as G from '../../../styles/global'
import * as S from './style'
import InfoCard from '../../../components/InfoCard'
import Card from '../../../components/Card'
import { useProductStore } from '../../../store/products'
import { Link } from 'react-router-dom'


const Greens = () => {
  const presentation = {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5s9d8EHL7i12A6Vvyy-Y5aLaM5i2UmbNOu4ir2E_x_fMVaJNRPd8vzM9uZXiqOG5NV9Y&usqp=CAU",
    description: "Além de serem ricos em vitaminas, minerais e fibras, alguns legumes e verduras também contêm benefícios específicos para a nossa saúde. A inclusão destes alimentos na dieta melhora o humor, a disposição e o bem-estar."
  }

  const { products } = useProductStore((state) => state)
  const greens = products.filter((product) => product.category == 'Verdura')
  console.log(greens.length)

  return (
    <>
      <Banner slideImages={GreensSlide} input={true}/>
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
        {greens.length != 0  ? 
            (
              <>
                <h1>Produtos recentes</h1>
                <div>
                  {greens.map((product) => (
                    <Link to="#" state={product}>
                      <Card key={product.id} product={product} />
                    </Link>                 
                  ))}
                </div>
              </>
            ) : 
            (
              <S.Container>
                <h2>Sem verduras no momento</h2>
              </S.Container>
            )
          }
        </S.Section>
      </G.Container>
    </>
  )
}

export default Greens