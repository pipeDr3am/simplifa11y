import styled from 'styled-components'

export const Calendar = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border: ${props => props.theme.calendar.border};
  padding: 2px;
  border-radius: 5px;
  position: absolute;
  margin: ${props => props.theme.calendar.margin};
  background: ${props => props.theme.calendar.backgroundColor};
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 16px;
  color: ${props => props.theme.calendar.heading.color};
  background-color: ${props => props.theme.calendar.heading.backgroundColor};
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
  color: ${props => props.theme.calendar.days.titles.color};
`

export const Cell = styled.td`
  cursor: ${props => props.$empty ? 'default' : 'pointer'};
  pointer-events: ${props => props.$empty ? 'none' : 'autho'};
  border: 1px solid black;
  border-radius: 3px;
  height: 30px;
  font-family: arial, helvetica, sans-serif;
  font-size: 16px;

  background-color: ${props => props.$selected ? props.theme.calendar.days.selected.backgroundColor : 'inherit'};

  :hover {
    background-color: ${props => props.theme.calendar.days.hover.backgroundColor};
  }
`
