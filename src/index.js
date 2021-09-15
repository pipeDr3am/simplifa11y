import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { format } from 'date-fns'

import * as S from './components/styles'
import Datepicker from './components/DatePicker'
import Calendar from './components/Calendar'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

export const DatePicker = () => {
  const [showDatepicker, setShowDatePicker] = useState(true)
  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(format(new Date(), 'yyyy-MM-dd'))

  const toggleCalendar = (e) => {
    setShowDatePicker(false)
    setShowCalendar(true)
  }
  const handleSelectDate = (date) => {
    setDate(date)
    setShowDatePicker(true)
    setShowCalendar(false)
  }
  const closeCalendar = () => {
    setShowDatePicker(true)
    setShowCalendar(false)
  }

  return (
    <S.App>
      {showDatepicker && (
        <Datepicker date={date} handleSelect={toggleCalendar} />
      )}
      {showCalendar && (
        <Calendar date={date} handleSelectDate={handleSelectDate} closeCalendar={closeCalendar} />
      )}
    </S.App>
  )
}
