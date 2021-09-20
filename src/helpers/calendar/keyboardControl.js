import {
  format as fnsFormat,
  startOfMonth,
  subMonths,
  addMonths,
  subYears,
  addYears,
  getDaysInMonth,
  getWeeksInMonth,
  getDay,
  endOfMonth,
  setDate,
  getDate,
  isEqual,
  subWeeks,
  addWeeks,
  subDays,
  addDays,
  toDate
} from 'date-fns'

export const setPreviousMonth = ({selectedDate, setSelectedDate}) => {
  const previousMonth = subMonths(selectedDate, 1)
  setSelectedDate(startOfMonth(previousMonth))
}

export const setNextMonth = ({selectedDate, setSelectedDate}) => {
  const nextMonth = addMonths(selectedDate, 1)
  setSelectedDate(startOfMonth(nextMonth))
}

export const setPreviousYear = ({selectedDate, setSelectedDate}) => {
  const previousYear = subYears(selectedDate, 1)
  setSelectedDate(startOfMonth(previousYear))
}