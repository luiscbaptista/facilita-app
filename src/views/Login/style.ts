import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
  margin: 5rem 0 3rem 0rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    width: 800px;

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

      div{
        display: flex;
        flex-direction: column;
        text-align: end;
        gap: .5rem;
        
        input{
          padding: 1rem;
          font-size: 1rem;
          border-radius: .3rem;
          width: 30rem;
          border: none;
          background-color: #b9c9c9;
          outline: none;
        }
      }

      button{
        padding: .8rem;
        border-radius: .3rem;
        border: none;
        text-align: center;
        width: 30rem;
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