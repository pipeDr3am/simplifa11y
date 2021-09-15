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
  cursor: pointer;
  width: ${props => props.theme.dateInput.width};
`

export const DateInput = styled.input`
  padding: ${props => props.theme.dateInput.padding};
  border: ${props => props.theme.dateInput.border};
  background-color: ${props => props.theme.dateInput.backgroundColor};
  color: ${props => props.theme.dateInput.color};
  width: ${props => props.theme.dateInput.width};
  height: ${props => props.theme.dateInput.height};
`

export const IconCalendar = styled.li`
  text-decoration: none;
  padding: ${props => props.theme.calendar.icon.padding};
  border: ${props => props.theme.calendar.icon.border};
  border-left: ${props => props.theme.calendar.icon.borderLeft};
  background-color: ${props => props.theme.calendar.icon.backgroundColor};
  color: ${props => props.theme.calendar.icon.color};
  width: ${props => props.theme.calendar.icon.width};
  height: ${props => props.theme.calendar.icon.height};
`

export const CalendarUl = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`