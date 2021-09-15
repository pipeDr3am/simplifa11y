import styled from 'styled-components'

export const App = styled.div`
  text-align: center;
  display: flex;
  

  *:focus {
    outline: 2px solid #d71ef7;
  }
`

export const DatePicker = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  cursor: pointer;
`

export const Select = styled.div`
  padding: 10px 20px;
`

export const Date = styled.div`
  padding: 10px 20px;
  border-right: 1px solid black;
  background-color: #00b5ad;
  color: #000000;
`
