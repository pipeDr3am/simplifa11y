import React, {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'

import * as S from './styles'

const KEYCODE = {
  ENTER: 13,
  SPACE: 32
}

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
    console.log('date update:', date)
    if (hasSelected) {
      setDateInput(date)
    }
  }, [date])

  const checkValue = (str, max) => {
    console.log('checking:', {
      str, max
    })
    if (str.charAt(0) !== '0' || str == '00') {
      var num = parseInt(str)
      if (isNaN(num) || num <= 0 || num > max) num = 1
      console.log('tt1:', {
        numGreaterThan: {
          num,
          maxVal: max.toString().charAt(0)
        },
        numLengthCheck: {
          len: num.toString().length
        }
      })
      str = num > parseInt(max.toString().charAt(0)) && num.toString().length == 1 ? '0' + num : num.toString()
    }
    return str
  }
  
  const handleKeyPress = e => {
    const charCode = e.charCode
    console.log('key press:', charCode)
    if (charCode === KEYCODE.ENTER || charCode === KEYCODE.SPACE) {
      toggleCalendar()
    }
  }

  const handleInputKeyPress = e => {
    const charCode = e.charCode
    console.log('key press:', charCode)
    if (charCode === KEYCODE.ENTER) {
      // validate date
    }
    
  }

  const onIconKeyPress = e => {
    const charCode = e.charCode
    console.log('key press:', charCode)
    if (charCode === KEYCODE.ENTER || charCode === KEYCODE.SPACE) {
      toggleCalendar()
    }
  }

  const clearInputIfEmpty = () => {
    if (dateInput === placeholder) {
      setDateInput('')
    }
  }

  const onInputChange = e => {
    let rOnlyNumbers = /^[0-9]+$/
    let inputString = e.target.value
    const charEntered = inputString.slice(-1)
    const keyWasNumber = rOnlyNumbers.test(charEntered)
    const charCode = e.charCode
    console.log('charEntered:', charEntered)
    
    const test = /\D\/$/.test(inputString)
    console.log('test:', test)

    if (test) inputString = inputString.substr(0, inputString.length - 3)
    let values = inputString.split('/').map(v => {
      return v.replace(/\D/g, '')
    })
    console.log('values:', values)
    if (values[0]) values[0] = checkValue(values[0], 2022)
    if (values[1]) values[1] = checkValue(values[1], 12)
    let output = values.map((v, i) => {
      return v.length == 2 && i < 2 ? v + ' / ' : v
    })
    const update = output.join('').substr(0, 14)

    console.log('update::', update)
    setDateInput(update)
  }

  const onInputFocus = e => {
    clearInputIfEmpty()
  }

  const onInputBlur = e => {
    console.log('blurred off input with:', dateInput)
    if (!dateInput) {
      setDateInput(placeholder)
    }
  }

  return (
    <S.DatePicker
      role='button'
      aria-label='Datepicker'
    >
      <S.CalendarUl>
        <S.InputLi onKeyPress={handleInputKeyPress}>
          <S.DateInput
            tabIndex='0' 
            onClick={onInputFocus}
            onFocus={onInputFocus}
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
          onKeyPress={onIconKeyPress}
        >
          <FontAwesomeIcon icon={faCalendar} />
        </S.IconCalendar>
      </S.CalendarUl>
    </S.DatePicker>
  )
}
export default SelectDate
