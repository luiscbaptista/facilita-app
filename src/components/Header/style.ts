import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffff;
  gap: 2.5rem;
  box-shadow: 0px 4px 16px rgb(0, 0, 0, 0.2);
  position: fixed;
  z-index: 1;
  top: 0;

  a{
    text-decoration: none;
  }
`

export const Logo = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 35px;
  }

  h4 {
    text-align: center;
    font-size: 2rem;
    margin: 0;
    color: #008000;

    span {
      color: #000;
    }
  }
`

export const Menu = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-content: center;
  padding: .5rem;
  list-style: none;

  li{
    padding: 0rem 1rem;
    font-size: 18px;
    font-weight: 400;
    color: black;

    section {
      position: absolute;
    }

    :hover{
      color: #3e0;
      transition: 0.1s;

      div {
        display: inline-block;
        display: flex;
        flex-direction: column;
      }
    }

    div{
      background: white;
      border: 1px solid #eee;

      display: flex;
      flex-direction: column;
      gap: 6px;
      width: fit-content;

      padding: 10px 15px;
      border-radius: 6px;

      font-size: 14px;

      position: relative;
      top: 6px;
      z-index: 1;
      display: none;

      a {
        text-decoration: none;

        :hover {
          color: #008000;
          font-weight: 600;
        }
      }
    }
  }
`

export const Extra = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  button {
    font-size: 16px;
    padding: .5rem 2rem;
    border-radius: .5rem;
    width: fit-content;
    border: none;
    background-color: #006000;
    color: #fff;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    :hover{
      cursor: pointer;
      background-color: #008000;
    }
  }
  
  a{
    width: fit-content;
    display: flex;
    gap: 0.5rem;
    transition: 0.1s;
    text-decoration: none;
    font-size: 14px;
    
    div{
      display: flex;
      flex-direction: column;
      span{
        font-weight: 600;
      }
      small{
        background-color: gray;
        color: #fff;
        width: fit-content;
        padding: .3rem;
        border-radius: .5rem;
      }
    }

    :hover{
      cursor: pointer;
    }
  }
`

export const User = styled.div`
display: flex;
gap: 0.5rem;
flex: row;

p {
  padding: 0.5rem;
  background: gray;
  color: white;
  font-weight: 1rem;
}

button {
  background: green;
  color: white;
  font-weight: 1.5rem;
}

`