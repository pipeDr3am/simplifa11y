import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { format as fnsFormat } from 'date-fns'

import * as S from './components/styles'
import { formatDate } from './helpers/formatDate'
import SelectDate from './components/SelectDate'
import Calendar from './components/Calendar'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

export const DatePicker = ({
  format,
  placeholder
}) => {
  const [showSelectDate, setShowSelectDate] = useState(true)
  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(fnsFormat(new Date(), format))
  const [hasSelected, setHasSelected] = useState(false)

  const toggleCalendar = (e) => {
    setShowSelectDate(false)
    setShowCalendar(true)
  }
  const handleSelectDate = (date) => {
    const dateFormatted = formatDate({date, format})
    setDate(dateFormatted)
    setShowSelectDate(true)
    setShowCalendar(false)
    if (!hasSelected) {
      setHasSelected(true)
    }
  }
  const closeCalendar = () => {
    setShowSelectDate(true)
    setShowCalendar(false)
  }

  return (
    <S.App>
      {showSelectDate && (
        <SelectDate 
          date={date} 
          handleSelect={toggleCalendar}
          placeholder={placeholder}
          hasSelected={hasSelected} 
        />
      )}
      {showCalendar && (
        <Calendar 
          format={format}
          date={date} 
          handleSelectDate={handleSelectDate} 
          closeCalendar={closeCalendar} 
        />
      )}
    </S.App>
  )
}
