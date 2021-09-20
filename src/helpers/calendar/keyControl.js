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

const makekeyControl = ({selectedDate, setSelectedDate}) => {

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
    setSelectedDate(startOfMonth(nextMonth))
  }
  
  const setPreviousYear = () => {
    const previousYear = subYears(selectedDate, 1)
    setSelectedDate(startOfMonth(previousYear))
  }

  const setNextYear = () => {
    const nextYear = addYears(selectedDate, 1)
    setSelectedDate(startOfMonth(nextYear))
  }

  return Object.freeze({
    handleKeyPress,
    setPreviousMonth,
    setNextMonth,
    setPreviousYear,
    setNextYear
  })
}

export default makekeyControl
