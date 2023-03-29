import styled from "styled-components";

export const Banner = styled.div`
  width: 100%;
  height: fit-content;
`

export const Image = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
  height: 650px;
  object-fit: cover;
  display: flex; 
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: aqua;
  width: 100%;
  justify-content: center;
  align-items: center;

  h1{
    font-size: 5rem;
    span{
      color: #008000;
    }
    margin-bottom: .5rem;
  }
  h2{
    font-size: 2.5rem;
  }
  form{
    margin-top: 4rem;
    width: fit-content;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    border-radius: .5rem;
    gap: 1rem;

    input{
      width: 40rem;
      border: none;
      outline: none;
      background-color: transparent;
      height: 2rem;
      color: black;
      font-size: 18px;
      color: #808080;

      ::placeholder{
        color: gray;
        font-size: 18px;
      }
    }
  }
`


