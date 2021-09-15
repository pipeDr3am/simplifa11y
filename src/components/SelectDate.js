import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

const SelectDate = ({ 
  date, 
  placeholder,
  toggleCalendar,
  hasSelected
}) => {
  
  const [dateInput, setDateInput] = useState(hasSelected ? date : placeholder)

  useEffect(() => {
    if (hasSelected) {
      setDateInput(date)
    }
  }, [date])
  
  const handleKeyPress = e => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      toggleCalendar()
    }
  }

  const onClick = () => {
    if (dateInput === placeholder) {
      setDateInput('')
    }
    toggleCalendar()
  }

  const onInputChange = e => {
    setDateInput(e.target.value)
  }

  return (
    <S.DatePicker
      onClick={onClick}
      onKeyPress={handleKeyPress}
      role='button'
      aria-label='Datepicker'
    >
      <S.CalendarUl>
        <li>
          <S.DateInput
            tabIndex='0' 
            value={dateInput}
            onChange={(e) => onInputChange(e)} 
            aria-label='Date Input' 
          />
        </li>
        <S.IconCalendar>
          <FontAwesomeIcon icon={faCalendar} />
        </S.IconCalendar>
      </S.CalendarUl>
    </S.DatePicker>
  )
}
export default SelectDate
