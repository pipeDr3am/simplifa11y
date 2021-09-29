import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { format as fnsFormat } from 'date-fns'

import * as S from './styles'
import { isValidDate } from '../helpers/isValidDate'
import { dateFromString } from '../helpers/formatDate'

const KEYCODE = {
  ENTER: 13,
  SPACE: 32
}

const SelectDate = ({
  date,
  format,
  placeholder,
  toggleCalendar,
  hasSelected,
  formatHint,
  handleSelectDate,
  calendarShown,
  dateRange,
  onInvalidDate
}) => {
  const [dateInput, setDateInput] = useState(hasSelected ? date : placeholder)

  useEffect(() => {
    if (hasSelected) {
      setDateInput(date)
    }
  }, [date])

  const checkValue = (str, max) => {
    if (str.charAt(0) !== '0' || str === '00') {
      let num = parseInt(str)
      if (isNaN(num) || num <= 0 || num > max) num = 1
      str = num > parseInt(max.toString().charAt(0)) && num.toString().length === 1 ? '0' + num : num.toString()
    }
    return str
  }

  const onInputKeyPress = e => {
    const charCode = e.charCode

    if (charCode === KEYCODE.ENTER) {
      const isValid = isValidDate({ dateRange, str: dateInput })

      if (!isValid) {
        onInvalidDate({
          message: 'date outside of range',
          details: {
            dateRange,
            dateInput
          }
        })
        return false
      }

      // set selected date
      const date = dateFromString({ date: dateInput })
      handleSelectDate(fnsFormat(date, format))
    }
  }

  const onIconKeyPress = e => {
    e.preventDefault()
    const charCode = e.charCode
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
    let inputString = e.target.value

    const test = /\D\/$/.test(inputString)

    if (test) inputString = inputString.substr(0, inputString.length - 3)
    const values = inputString.split('/').map(v => {
      return v.replace(/\D/g, '')
    })
    if (values[0]) values[0] = checkValue(values[0], 12)
    if (values[1]) values[1] = checkValue(values[1], 31)
    const output = values.map((v, i) => {
      return v.length === 2 && i < 2 ? v + ' / ' : v
    })
    const update = output.join('').substr(0, 14)

    const isValid = isValidDate({ dateRange, str: update })
    const date = dateFromString({ date: update })
    if (isValid) {
      handleSelectDate(fnsFormat(date, format))
    } else {
      onInvalidDate({
        message: 'date outside of range',
        details: {
          dateRange,
          dateInput: update
        }
      })
    }

    setDateInput(update)
  }

  const onInputFocus = e => {
    clearInputIfEmpty()
  }

  const onInputBlur = e => {
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
        <S.InputLi onKeyPress={onInputKeyPress}>
          <S.DateInput
            tabIndex='0'
            aria-label='Date Input'
            aria-describedby='formatHint'
            onClick={onInputFocus}
            onFocus={onInputFocus}
            onBlur={onInputBlur}
            value={dateInput}
            onChange={(e) => onInputChange(e)}
          />
          <S.InputHint
            aria-label={`format as ${formatHint}`}
            id='formatHint'
          >
            {formatHint}
          </S.InputHint>
        </S.InputLi>
        <S.IconCalendar
          tabIndex='0'
          aria-label='toggle calendar'
          aria-controls='calendarDisplay'
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
