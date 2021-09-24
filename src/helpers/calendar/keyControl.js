import {
  startOfMonth,
  subMonths,
  addMonths,
  subYears,
  addYears,
  endOfMonth,
  subWeeks,
  addWeeks,
  subDays,
  addDays,
  getYear,
  getMonth
} from 'date-fns'

const makeKeyControl = ({
  dateRange,
  selectedDate,
  setSelectedDate
}) => {
  const maxRangeArr = dateRange ? dateRange.max.split('/') : ['01','01','9999']
  const minRangeArr = dateRange ? dateRange.min.split('/') : ['01','01','0000']
  const maxYear = parseInt(maxRangeArr[2])
  const minYear = parseInt(minRangeArr[2])
  const maxMonth = parseInt(maxRangeArr[0])
  const minMonth = parseInt(minRangeArr[0])

  const handleKeyPress = ({ e, callback }) => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      callback()
    }
  }

  const setPreviousMonth = () => {
    const previousMonth = subMonths(selectedDate, 1)
    const previousYearVal = getYear(previousMonth)
    const previousMonthVal = getMonth(previousMonth) + 1
    const startOfPrevMonthVal = startOfMonth(previousMonth)

    if (previousYearVal === minYear) {
      if (previousMonthVal >= minMonth) {
        setSelectedDate(startOfPrevMonthVal)
      }
    } else if (previousYearVal >= minYear) {
      setSelectedDate(startOfPrevMonthVal)
    }
  }

  const setNextMonth = () => {
    const nextMonth = addMonths(selectedDate, 1)
    const nextYearVal = getYear(nextMonth)
    const nextMonthVal = getMonth(nextMonth) + 1
    const startOfNextMonthVal = startOfMonth(nextMonth)

    if (nextYearVal === maxYear) {
      if (nextMonthVal <= maxMonth) {
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
    const previousMonth = subMonths(selectedDate, 1)
    const previousYearVal = getYear(previousMonth)
    const previousMonthVal = getMonth(previousMonth) + 1
    const subMonth = subMonths(selectedDate, 1)

    if (previousYearVal === minYear) {
      if (previousMonthVal >= minMonth) {
        setSelectedDate(subMonth)
      }
    } else if (previousYearVal >= minYear) {
      setSelectedDate(subMonth)
    }
  }

  const setDateNextMonth = () => {
    const nextMonth = addMonths(selectedDate, 1)
    const nextYearVal = getYear(nextMonth)
    const nextMonthVal = getMonth(nextMonth) + 1
    const addMonth = addMonths(selectedDate, 1)

    if (nextYearVal === maxYear) {
      if (nextMonthVal <= maxMonth) {
        setSelectedDate(addMonth)
      }
    } else if (nextYearVal <= maxYear) {
      setSelectedDate(addMonth)
    }
  }

  const setDatePreviousYear = () => {
    const previousYear = subYears(selectedDate, 1)
    const previousYearVal = getYear(previousYear)
    const subYear = subYears(selectedDate, 1)

    if (previousYearVal >= minYear) {
      setSelectedDate(subYear)
    }
  }

  const setDateNextYear = () => {
    const nextYear = addYears(selectedDate, 1)
    const nextYearVal = getYear(nextYear)
    const addYear = addYears(selectedDate, 1)
    if (nextYearVal <= maxYear) {
      setSelectedDate(addYear)
    }
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
