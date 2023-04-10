import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7rem 0 3rem 0rem;


  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    width: fit-content;

    h2 {
      font-size: 2rem;
      text-align: center;
    }

    > form{
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
      width: 100%;
      margin-top: 2rem;

      input{
        padding: 1rem;
        font-size: 1rem;
        border-radius: .3rem;
        width: 25rem;
        border: none;
        background-color: #b9c9c9;
        outline: none;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
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
    }

    a{
      text-decoration: none;
    }
  }
`

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;
  grid-column: 1/4;

  h1{
    width: 100%;
    color: green;
    font-size: 2.8rem;
    margin-bottom: 4rem;
    text-align: left;
  }

  > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  a{
    text-decoration: none;
  }
`

export const Card = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1300px;
  background-color: #fff;
  border-radius: .5em;
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);
  
  a{
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

    img{
      width: 100%;
      height: 100%;
      max-height: 300px;
      display: flex;
      align-items: center;
    }

    div{
      display: flex;
      flex-direction: column;
      gap: 0;
      margin-bottom: 1rem;

      h3{
        margin-bottom: .5rem;
      }
    }
  }
`