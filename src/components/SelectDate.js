import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

const SelectDate = ({ 
  date, 
  placeholder,
  toggleCalendar,
  hasSelected,
  formatHint,
  calendarShown
}) => {
  
  const [dateInput, setDateInput] = useState(hasSelected ? date : placeholder)

  useEffect(() => {
    if (hasSelected) {
      setDateInput(date)
    }
  }, [date])
  
  const handleKeyPress = e => {
    const charCode = e.charCode
    console.log('key press:', charCode)
    if (charCode === 13 || charCode === 32) {
      toggleCalendar()
    }
  }

  const clearInputIfEmpty = () => {
    if (dateInput === placeholder) {
      setDateInput('')
    }
  }

  const onInputChange = e => {
    setDateInput(e.target.value)
  }

  const onInputFocus = e => {
    clearInputIfEmpty()
  }

  const onInputBlur = e => {
    console.log('blurred off input with:', dateInput)
  }

  return (
    <S.DatePicker
      role='button'
      aria-label='Datepicker'
    >
      <S.CalendarUl>
        <S.InputLi onKeyPress={handleKeyPress}>
          <S.DateInput
            tabIndex='0' 
            onClick={onInputFocus}
            onBlur={onInputBlur}
            value={dateInput}
            onChange={(e) => onInputChange(e)} 
            aria-label='Date Input' 
          />
          <S.InputHint>{formatHint}</S.InputHint>
        </S.InputLi>
        <S.IconCalendar
          tabIndex='0 ' 
          onClick={toggleCalendar}
        >
          <FontAwesomeIcon icon={faCalendar} />
        </S.IconCalendar>
      </S.CalendarUl>
    </S.DatePicker>
  )
}
export default SelectDate
