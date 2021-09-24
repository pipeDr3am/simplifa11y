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
  width: ${props => props.theme.dateInput.wrap.width};
  height: ${props => props.theme.dateInput.wrap.height};
  :hover {
    ul {
      outline: ${props => props.theme.dateInput.wrap.hover.outline};
    }
  }
`

export const InputLi = styled.li`
  padding: ${props => props.theme.dateInput.wrap.padding};
  border: ${props => props.theme.dateInput.wrap.border};
  background-color: ${props => props.theme.dateInput.wrap.backgroundColor};
  color: ${props => props.theme.dateInput.wrap.color};
  width: ${props => props.theme.dateInput.wrap.width};
  height: ${props => props.theme.dateInput.wrap.height};
`

export const IconCalendar = styled.div`
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
  outline: ${props => props.theme.dateInput.wrap.outline};
`

export const DateInput = styled.input`
  background-color: ${props => props.theme.dateInput.input.backgroundColor};
  border: none;
  font-size: ${props => props.theme.dateInput.input.fontSize};
  padding: ${props => props.theme.dateInput.input.padding};
  margin: ${props => props.theme.dateInput.input.margin};
`

export const InputHint = styled.p`
  font-size: ${props => props.theme.dateInput.inputHint.fontSize};
  color: ${props => props.theme.dateInput.inputHint.color};
  padding: ${props => props.theme.dateInput.inputHint.padding};
  margin: 0;
  span {
    opacity: 0;
  }
`
