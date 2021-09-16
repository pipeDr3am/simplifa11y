import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { format as fnsFormat } from 'date-fns'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './components/defaultTheme'
import { formatDate } from './helpers/formatDate'
import SelectDate from './components/SelectDate'
import Calendar from './components/Calendar'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

export const DatePicker = ({
  theme,
  format,
  placeholder,
  formatHint
}) => {
  
  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(fnsFormat(new Date(), format))
  const [hasSelected, setHasSelected] = useState(false)

  const toggleCalendar = (e) => {
    setShowCalendar(!showCalendar)
  }
  const handleSelectDate = (date) => {
    const dateFormatted = formatDate({date, format})
    setDate(dateFormatted)
    setShowCalendar(false)
    if (!hasSelected) {
      setHasSelected(true)
    }
  }
  const closeCalendar = () => {
    setShowCalendar(false)
  }

  return (
    <ThemeProvider theme={theme || defaultTheme || {}}>
      <SelectDate 
        date={date} 
        toggleCalendar={toggleCalendar}
        placeholder={placeholder}
        hasSelected={hasSelected} 
        formatHint={formatHint}
        calendarShown={showCalendar}
      />
      {showCalendar && (
        <Calendar 
          format={format}
          date={date} 
          handleSelectDate={handleSelectDate} 
          closeCalendar={closeCalendar} 
        />
      )}
    </ThemeProvider>
  )
}
