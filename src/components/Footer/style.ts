import styled from "styled-components";

export const Footer = styled.footer`
  padding: 2rem;
  width: 100%;
  height: 450px;
  background-color: #000;
  position: relative;
  bottom: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const Logo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  align-items: center;

  img{
    width: 50px;
  }

  h4 {
      text-align: center;
      font-size: 3rem;
      margin: 0;

      color: white;

      span {
        color: #008000;
      }
    }
`

export const Info = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  border-bottom: 3px solid green;

  a{
    margin-bottom: .5rem;
    text-decoration: none;
    color: #fff;
  }
`

export const Media = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 1.5rem;
`

export const Newsletter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;

  input{
    padding: 1rem;
    border-radius: .5rem;
    width: 400px;
    border: none;
  }

  button {
    padding: .5rem;
    border-radius: .5rem;
    width: fit-content;
    border: none;
    background-color: #0d4911;
    color: #fff;
    font-weight: 600;
  }
`