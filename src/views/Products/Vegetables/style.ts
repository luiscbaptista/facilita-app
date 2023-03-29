import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 4rem;
  grid-column: 1/4;

  h1{
    width: 100%;
    color: green;
    font-size: 2.8rem;
    margin-bottom: 4rem;
    text-align: left;
  }

  > div{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  a{
    text-decoration: none;
  }
`

export const Container = styled.div`
  margin: 5rem;
`