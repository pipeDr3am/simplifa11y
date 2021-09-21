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
  toDate,
  getYear
} from 'date-fns'

const makekeyControl = ({
  dateRange,
  selectedDate, 
  setSelectedDate
}) => {

  const maxYear = dateRange.max.split('/')[2]

  const handleKeyPress = ({e, callback}) => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      callback({selectedDate, setSelectedDate})
    }
  }
  
  const setPreviousMonth = () => {
    const previousMonth = subMonths(selectedDate, 1)
    setSelectedDate(startOfMonth(previousMonth))
  }
  
  const setNextMonth = () => {
    const nextMonth = addMonths(selectedDate, 1)
    const nextYearVal = getYear(nextMonth)
    if (nextYearVal <= maxYear) {
      setSelectedDate(startOfMonth(nextMonth))
    }
  }
  
  const setPreviousYear = () => {
    const previousYear = subYears(selectedDate, 1)
    setSelectedDate(startOfMonth(previousYear))
  }

  const setNextYear = () => {
    const nextYear = addYears(selectedDate, 1)
    const nextYearVal = getYear(nextYear)
    if (nextYearVal <= maxYear) {
      setSelectedDate(startOfMonth(nextYear))
    }
  }

  const setPreviousDay = () => {
    const previousDay = subDays(selectedDate, 1)
    setSelectedDate(previousDay)
  }

  const setNextDay = () => {
    const nextDay = addDays(selectedDate, 1)
    setSelectedDate(nextDay)
  }

  const setPreviousWeek = () => {
    const previousWeek = subWeeks(selectedDate, 1)
    setSelectedDate(previousWeek)
  }

  const setNextWeek = () => {
    const nextWeek = addWeeks(selectedDate, 1)
    setSelectedDate(nextWeek)
  }

  const setDatePreviousMonth = () => {
    setSelectedDate(subMonths(selectedDate, 1))
  }

  const setDateNextMonth = () => {
    setSelectedDate(addMonths(selectedDate, 1))
  }

  const setDatePreviousYear = () => {
    setSelectedDate(subYears(selectedDate, 1))
  }

  const setDateNextYear = () => {
    setSelectedDate(addYears(selectedDate, 1))
  }

  const setMonthStart = () => {
    setSelectedDate(startOfMonth(selectedDate))
  }

  const setMonthEnd = () => {
    setSelectedDate(endOfMonth(selectedDate))
  }

  return Object.freeze({
    handleKeyPress,
    setPreviousMonth,
    setNextMonth,
    setPreviousYear,
    setNextYear,
    setPreviousDay,
    setNextDay,
    setPreviousWeek,
    setNextWeek,
    setDatePreviousMonth,
    setDateNextMonth,
    setDatePreviousYear,
    setDateNextYear,
    setMonthStart,
    setMonthEnd
  })
}

export default makekeyControl
