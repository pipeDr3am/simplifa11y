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
  getYear,
  getMonth
} from 'date-fns'

const makeKeyControl = ({
  dateRange,
  selectedDate, 
  setSelectedDate
}) => {

  const maxRangeArr = dateRange.max.split('/')
  const minRangeArr = dateRange.min.split('/')
  const maxYear = parseInt(maxRangeArr[2])
  const minYear = parseInt(minRangeArr[2])
  const maxMonth = parseInt(maxRangeArr[0])
  const minMonth = parseInt(minRangeArr[0])

  const handleKeyPress = ({e, callback}) => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      callback({selectedDate, setSelectedDate})
    }
  }
  
  const setPreviousMonth = () => {
    const previousMonth = subMonths(selectedDate, 1)
    const previousYearVal = getYear(previousMonth)
    const previousMonthVal = getMonth(previousMonth)
    if (previousYearVal >= minYear && previousMonthVal >= minMonth) {
      setSelectedDate(startOfMonth(previousMonth))
    }
  }
  
  const setNextMonth = () => {
    const nextMonth = addMonths(selectedDate, 1)
    const nextYearVal = getYear(nextMonth)
    const nextMonthVal = getMonth(nextMonth) + 1
    const startOfNextMonthVal = startOfMonth(nextMonth)

    console.log('selectedDate:', selectedDate)

    if (nextYearVal === maxYear) {
      if (nextMonthVal < maxMonth) {
        setSelectedDate(startOfNextMonthVal)
      }
    } else if (nextYearVal <= maxYear) {
      setSelectedDate(startOfNextMonthVal)
    } 

  }
  
  const setPreviousYear = () => {
    const previousYear = subYears(selectedDate, 1)
    const previousYearVal = getYear(previousYear)
    if (previousYearVal >= minYear) {
      setSelectedDate(startOfMonth(previousYear))
    }
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

export default makeKeyControl
