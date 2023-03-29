import styled from "styled-components";

export const Presentation = styled.div`
  display: flex;
  width: 100%;

  h1{
    display: flex;
    width: 100%;
  }
`

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;
  grid-column: 1/5;

  h1{
    width: 100%;
    color: #3b6161;
    font-size: 2.8rem;
    margin-bottom: 4rem;
    text-align: center;
  }

  > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    form{
    display: flex;
    flex-direction: column;
    gap: 1rem;

      input, textarea{
        padding: 1rem;
        font-size: 1rem;
        border-radius: .3rem;
        border: none;
        background-color: #b9c9c9;
        width: 30rem;
        outline: none;
        font-size: 18px;
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

        :hover{
          cursor: pointer;
          background-color: #006000;
          transition: 1s;
        }
      }
    }
  }
`