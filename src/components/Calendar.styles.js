import styled from 'styled-components'

export const Calendar = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: ${props => props.theme.border.calendar};
  padding: 2px;
  border-radius: 5px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  color: ${props => props.theme.text.heading};
  background-color: ${props => props.theme.bg.heading};
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

export const DaysOfWeek = styled.th`
  height: 30px;
  color: ${props => props.theme.text.daysOfWeek};
`

export const Cell = styled.td`
  cursor: ${props => props.$empty ? 'default' : 'pointer'};
  pointer-events: ${props => props.$empty ? 'none' : 'autho'};
  border: 1px solid black;
  border-radius: 3px;
  height: 30px;
  font-family: arial, helvetica, sans-serif;
  font-size: 16px;

  background-color: ${props => props.$selected ? props.theme.bg.selectedDay : 'inherit'};

  :hover {
    background-color: ${props => props.theme.hover.day};
  }
`