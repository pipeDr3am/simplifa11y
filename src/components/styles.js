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
  border: ${props => props.theme.border.dateSelect};
  cursor: pointer;
`

export const DateDisplay = styled.div`
  padding: 10px 20px;
  border: ${props => props.theme.border.dateDisplay};
  background-color: ${props => props.theme.bg.dateDisplay};
  color: ${props => props.theme.text.dateDisplay}
`
