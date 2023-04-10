import styled from "styled-components";

export const Card = styled.div`
  //box-shadow: ;
  padding: .5rem;
  display: flex;
  flex-direction: column;
  width: 18rem;
  background-color: #fff;
  border-radius: .5em;
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);
  
  > img{
    width: 100%;
    height: 10rem;
    display: flex;
    align-items: center;
  }

  > div{
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 1rem;

    h3{

    }
    
    small{
      font-size: 16px;
      opacity: 0.7;
    }

    p{
      font-size: 1.8rem;
      font-weight: 600;
      text-align: end;
      span{
        font-size: 1rem;
      }
    }

  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: .5rem;

  .amount{
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: end;

    button{
      width: 30px;
      border: none;
      padding: .2rem;
      background-color: #007000;
      border-radius: .2rem;
      color: #fff;
      font-weight: 800;
      font-size: 1rem;

      :hover{
        cursor: pointer;
        background-color: #008000;
        transition: 1s;
      }
    }
    input{
      width: 30px;
      text-align: center;
      border: none;
      outline: none;
      font-size: 1rem;
      font-weight: 600;

      :hover{
        cursor: none;
      }
    }

    input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

    input[type=number] {
      -moz-appearance: textfield;
    }
  }

  .add{
    width: 100%;
    margin-top: .5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    button{
      width: 100%;
      border: none;
      background-color: #007000;
      padding: .5rem;
      border-radius: .2rem;
      color: #fff;
      font-weight: 600;
      box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);
      display: flex;
      font-size: 1rem;
      justify-content: center;
      align-items: center;
      flex-direction: row;

      :hover{
        cursor: pointer;
        background-color: #008000;
        transition: 1s;
      }
    }
  }
`