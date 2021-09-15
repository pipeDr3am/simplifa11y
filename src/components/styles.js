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
  border-right: 1px solid black;
  background-color: #00b5ad;
  color: #000000;
`

export const Calendar = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 2px;
  border-radius: 5px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  background-color: #00b5ad;
  padding: 10px 0;
  border: 1px solid black;
`

export const Icons = styled.div`
  display: flex;
  flex-direction: row;
`

export const IconWrap = styled.div`
  padding: 0 10px;
  cursor: pointer;
`

export const Month = styled.div`
  padding: 0 15px;
`

export const Header = styled.th`
  height: 30px;
`
