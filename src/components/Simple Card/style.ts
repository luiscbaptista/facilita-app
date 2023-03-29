import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid blue;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
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