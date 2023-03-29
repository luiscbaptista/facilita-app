import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  min-height: 500px;
  padding: 5rem;

  h1{
    opacity: 0.7;
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
      margin: 0;

      td{
        font-size: 1.5rem;
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

    button{
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
  }
`