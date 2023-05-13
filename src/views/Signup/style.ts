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
    
    .logo{
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      img{
        width: 100px;
      }
    }

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

export const Field = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 1.5rem;

  div{
    width: 50%;

    h4{
      opacity: 0.7;
    }
  }
`