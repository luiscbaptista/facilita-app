import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  padding: 2rem;
  border-radius: .5rem;
  width: 60rem;
  align-items: center;
  height: 300px;
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);

  >div{
    width: 45%;
    display: flex;

    img{
      width: 20rem;
    }
  }
`

export const Content = styled.div`
  width: 100%;
  text-align: justify;
  font-size: 1.5rem;
`