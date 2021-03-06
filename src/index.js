import React, { useState } from 'react'
import { format as fnsFormat, compareAsc } from 'date-fns'
import { ThemeProvider } from 'styled-components'
import PropTypes from 'prop-types'

import { defaultTheme } from './components/defaultTheme'
import { formatDate } from './helpers/formatDate'
import { mergeDeep } from './helpers/mergeDeep'
import { getDefaultDate } from './helpers/calendar/defaultDate'
import SelectDate from './components/SelectDate'
import Calendar from './components/Calendar'

export const DatePicker = ({
  theme,
  format,
  placeholder,
  formatHint,
  onSelect = Function.prototype,
  dateRange,
  onInvalidDate,
  inputId,
  initialDate,
  ariaLabelFormatHint
}) => {
  const defaultDate = getDefaultDate({ dateRange })

  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(fnsFormat(new Date(defaultDate), format))
  const [hasSelected, setHasSelected] = useState(false)

  const toggleCalendar = (e) => {
    setShowCalendar(!showCalendar)
  }
  const handleSelectDate = (date) => {
    const dateFormatted = formatDate({ date, format })
    setDate(dateFormatted)
    setShowCalendar(false)
    onSelect(dateFormatted)
    if (!hasSelected) {
      setHasSelected(true)
    }
  }
  const closeCalendar = () => {
    setShowCalendar(false)
  }

  const themeMod = theme === 'none' ? {} : mergeDeep(defaultTheme, theme)

  return (
    <ThemeProvider theme={themeMod}>
      <SelectDate
        date={date}
        format={format}
        toggleCalendar={toggleCalendar}
        placeholder={placeholder}
        hasSelected={hasSelected}
        formatHint={formatHint}
        calendarShown={showCalendar}
        handleSelectDate={handleSelectDate}
        dateRange={dateRange}
        onInvalidDate={onInvalidDate}
        inputId={inputId}
        initialDate={initialDate}
        ariaLabelFormatHint={ariaLabelFormatHint}
      />
      {showCalendar && (
        <Calendar
          format={format}
          date={date}
          handleSelectDate={handleSelectDate}
          closeCalendar={closeCalendar}
          dateRange={dateRange}
          calendarShown={showCalendar}
        />
      )}
    </ThemeProvider>
  )
}
