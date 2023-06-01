import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 7rem 0 3rem 0rem;
`

export const Section = styled.div`
  h2 {
    text-align: start;
    background: green;
    padding: 1rem;
    box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.3);
  }

  span{
    color: red;
    font-size: .8rem;
    font-weight: 2rem;
    width: 100%;
  }
`

export const Content = styled.div`
  padding: 2rem;
`

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.5rem;
  justify-content: space-between;
  
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 900px;
  background-color: #fff;
  border-radius: .5em;
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);

  h1 {
    padding: 1rem;
    width: 100%;
    text-align: start;
    margin-bottom: .5rem;
  }

  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    h4{
      opacity: 0.7;
    }

    input, select{
        padding: .8rem;
        font-size: 1rem;
        border-radius: .3rem;
        border: none;
        background-color: #b9c9c9;
        outline: none;
    }

    ul {
      list-style: none;
      margin-top: 1.5rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      li {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        border-radius: .5em;
        box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.1);    
        padding: 0.5rem;

        img {
          width: 6rem;
        }
        input {
          width: 7rem;
          padding: 0.5rem;
        }

        #desc {
          width: 60%;
        }

        #qtd{
          display: flex;
          gap: 0.5rem;
          margin-top: .5rem;
        }
      }
    }

    button{
        padding: .8rem;
        border-radius: .3rem;
        border: none;
        text-align: center;
        width: 25rem;
        font-size: 1rem;
        font-weight: 600;
        color: #fff;
        background-color: #008000;
        margin-top: 1rem;

        :hover{
          cursor: pointer;
          background-color: #006000;
          transition: 1s;
        }
      }
    
    #sec1 {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      
      #nome, #sobrenome, #numero_telefone{
        width: 20rem;
      }

      #pais {
        width: 10rem;
      }

      #email {
        width: 25rem;
      }

      #regiao, #endereco1, #endereco2{
        width: 16rem;
      }
    }

    #sec2, #sec4 {
      display: flex;
      gap: 1rem;
      align-content: center;
      justify-content: center;

      div{
        display: flex;
        gap: 1rem;
      }
    }

    #sec3 {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1.5rem;

      #data_entrega {
        width: 20rem;
      }

      #intervalo_tempo_entrega {
        width: 20rem;
      }
    }

    #sec5 {
      #func {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      #sub {
        margin-top: 1rem;

      }


    }

    #action {
      display: flex;
      justify-content: right;
    }
  }
`