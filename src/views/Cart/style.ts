import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  min-height: 500px;
  padding: 5rem;
  margin: 3rem 0 1.5rem 0rem;

  h1{
    opacity: 0.7;
    margin: 5rem;
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

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  img{
    width: 150px;
  }

  tbody{
    width: 100%;

    .header{
      width: 100%;
      gap: 2rem;
      display: flex;
      justify-content: space-between;
      border: none;
      margin: 1rem 0;

      td{
        font-size: 1.5rem;
        width: 100%;
        display: flex;
        justify-content: center;

      }
    }

    
  }
`

export const Balance = styled.div`
  border-top: 2px solid gray;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1rem;

  div{
    display: flex;
    align-items: center;
    gap: .5rem;

    h4{
      opacity: 0.7;
    }

    h2{
      opacity: 0.9;
    }

    .active{
      padding: .8rem;
      width: 12rem;
      border-radius: .4rem;
      border: none;
      box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);
      background-color: #006000;
      color: #fff;
      font-size: 1rem;

      :hover{
        cursor: pointer;
        background-color: #008000;
      }
    }

    .disabled{
      padding: .8rem;
      width: 12rem;
      border-radius: .4rem;
      border: none;
      box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);
      background-color: #006000;
      color: #fff;
      font-size: 1rem;
      opacity: 0.9;

      :hover{
        cursor: no-drop;
      }
    }
  }
`

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