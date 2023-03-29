import styled from "styled-components";

export const Item = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  margin-bottom: .5rem;
  text-align: center;
  border-radius: .3rem;
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);

  button{
      width: 3rem;
      border: none;
      padding: .5rem;
      background-color: #007000;
      border-radius: .2rem;
      color: #fff;
      font-weight: 800;
      font-size: 1rem;
      box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);


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

  td{
    width: 10rem;
  }
`