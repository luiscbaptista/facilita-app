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

    p{
      text-align: justify;
      font-size: 1.5rem;
      width: 700px;
    }
  }

  a{
    text-decoration: non;
  }
`