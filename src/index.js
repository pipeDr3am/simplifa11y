import React, { useState } from 'react'
import { format as fnsFormat } from 'date-fns'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './components/defaultTheme'
import { formatDate } from './helpers/formatDate'
import { mergeDeep } from './helpers/mergeDeep'
import SelectDate from './components/SelectDate'
import Calendar from './components/Calendar'

export const DatePicker = ({
  theme,
  format,
  placeholder,
  formatHint,
  onSelect
}) => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [date, setDate] = useState(fnsFormat(new Date(), format))
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

  let themeMod = theme === 'none' ? {} : mergeDeep(defaultTheme, theme)

  console.log('tt1:', {
    themeMod
  })

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
