import styled from 'styled-components'

export const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.div`
  min-height: 500px;
`

export const TextInput = styled.input`
  padding: 1rem;
  border-radius: .5rem;
  width: 400px;
  border: none;
`

export const Button = styled.button`
  padding: ${props => props.padding || ""};
  border-radius: .5rem;
  width: fit-content;
  border: none;
  background-color: ${props => props.background || ""};
  color: ${props => props.color || ""};
  font-weight: 600;
`

export const Emphasis = styled.p`
  font-size: ${props => props.size || "3rem"};
  color: ${props => props.color1 || "#000"}
  span{
    color: ${props => props.color2 || "#fff"}
  }
`