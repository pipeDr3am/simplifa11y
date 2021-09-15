import styled from 'styled-components'

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

export const Cell = styled.td`
  border: 1px solid black;
  border-radius: 3px;
  height: 30px;
  font-family: arial, helvetica, sans-serif;
  font-size: 16px;

  background-color: ${props => props.$selected ? 'orange' : 'inherit'};

  :hover {
    background-color: #fc3;
    border-color: #800;
  }
`