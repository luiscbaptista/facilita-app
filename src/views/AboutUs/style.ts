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

export const Banner = styled.div`
  width: 100%;
  height: fit-content;
`

export const Image = styled.div`
  background-position: right;
  height: 650px;
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
    color: #fff;
    span{
      color: #008000;
    }
    margin-bottom: .5rem;
  }
  h2{
    font-size: 2.5rem;
  }
`