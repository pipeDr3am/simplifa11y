import React, { useState } from 'react'
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import * as S from './Calendar.styles'
import { dateFromString } from '../helpers/formatDate'

const Calendar = ({
  date,
  format,
  handleSelectDate,
  closeCalendar,
  dateRange
}) => {
  const [selectedDate, setSelectedDate] = useState(dateFromString({ date }))

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
  const handleKeyPress = (e, callback) => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      callback()
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
  const handleTableKeyPress = (e) => {
    const keyCode = e.keyCode
    // Check if control key was pressed
    // const control = e.ctrlKey;
    // Use shift key to prevent browser shortcut conflicts
    const control = e.shiftKey
    switch (keyCode) {
      case 13: // Enter
        handleSelectDate(fnsFormat(selectedDate, format))
        return
      case 27: // Esc
        closeCalendar()
        return
      case 32: // Space
        handleSelectDate(fnsFormat(selectedDate, format))
        return
      case 33: // Page Up
        control ? setDatePreviousYear() : setDatePreviousMonth()
        return
      case 34: // Page Down
        control ? setDateNextYear() : setDateNextMonth()
        return
      case 35: // End
        setMonthEnd()
        return
      case 36: // Home
        setMonthStart()
        return
      case 37: // Left
        setPreviousDay()
        return
      case 38: // Up
        setPreviousWeek()
        return
      case 39: // Right
        setNextDay()
        return
      case 40: // Down
        setNextWeek()
        break
      default:
        break
    }
  }
  const handleDateSelection = (date) => {
    const dateString = fnsFormat(date, format)
    handleSelectDate(dateString)
  }

  const makeWeek = ({ selectedDate, weekNum, daysInMonth, startWeekday }) => {
    const curMonth = toDate(new Date(selectedDate)).getMonth() + 1
    let minDay = 0
    let maxDay = 0
    let minMonth = 0
    let maxMonth = 0

    if (dateRange.min) {
      const [miMonth, miDay] = dateRange.min.split('/')
      const [maMonth, maDay] = dateRange.max.split('/')
      minDay = parseInt(miDay)
      maxDay = parseInt(maDay) + 1
      minMonth = parseInt(miMonth)
      maxMonth = parseInt(maMonth)
    }

    const returnArr = []
    let dayNum = weekNum === 0 ? 1 : (weekNum * 7) - startWeekday + 1
    for (let i = 0; i < 7; i++) {
      let minDayValid = true
      let maxDayValid = true
      const inMinMonth = curMonth === minMonth
      const inMaxMonth = curMonth === maxMonth

      if (inMinMonth) {
        minDayValid = dayNum > minDay
      }
      if (inMaxMonth) {
        maxDayValid = dayNum < maxDay
      }
      let validDay = minDayValid && maxDayValid

      if (curMonth < minMonth || curMonth > maxMonth) {
        validDay = false
      }

      if (weekNum === 0) {
        if (i < startWeekday) {
          returnArr.push(null)
          continue
        }
      }
      if (dayNum <= daysInMonth) {
        if (validDay) {
          returnArr.push(setDate(selectedDate, dayNum))
          dayNum++
        } else {
          returnArr.push(null)
          dayNum++
        }
      } else {
        returnArr.push(null)
      }
    }
    return returnArr
  }

  const generateMonth = () => {
    const daysInMonth = getDaysInMonth(selectedDate)
    const weeksInMonth = getWeeksInMonth(selectedDate)
    const startWeekday = getDay(startOfMonth(selectedDate))

    const weeks = []
    for (let i = 0; i < weeksInMonth; i++) {
      weeks.push(makeWeek({ selectedDate, weekNum: i, daysInMonth, startWeekday }))
    }

    return weeks
  }

  return (
    <S.Calendar>
      <S.Title>
        <S.Icons>
          <S.IconWrap
            tabIndex='0'
            onClick={setPreviousYear}
            onKeyPress={(e) => handleKeyPress(e, setPreviousYear)}
            role='button'
            aria-label='Previous year'
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </S.IconWrap>
          <S.IconWrap
            tabIndex='0'
            onClick={setPreviousMonth}
            onKeyPress={(e) => handleKeyPress(e, setPreviousMonth)}
            role='button'
            aria-label='Previous month'
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </S.IconWrap>
        </S.Icons>
        <S.Month role='heading'>
          <b>
            {fnsFormat(selectedDate, 'MMMM yyyy')}
          </b>
        </S.Month>
        <S.Icons>
          <S.IconWrap
            tabIndex='0'
            onClick={setNextMonth}
            onKeyPress={(e) => handleKeyPress(e, setNextMonth)}
            role='button'
            aria-label='Next year'
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </S.IconWrap>
          <S.IconWrap
            tabIndex='0'
            onClick={setNextYear}
            onKeyPress={(e) => handleKeyPress(e, setNextYear)}
            role='button'
            aria-label='Next year'
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </S.IconWrap>
        </S.Icons>
      </S.Title>
      <table
        id='grid'
        tabIndex='0'
        onKeyDown={handleTableKeyPress}
        role='grid'
        aria-label='Month'
      >
        <thead>
          <tr role='row'>
            <S.DaysOfWeek role='columnheader' aria-label='Sunday'><abbr title='Sunday'>Su</abbr></S.DaysOfWeek>
            <S.DaysOfWeek role='columnheader' aria-label='Monday'><abbr title='Monday'>Mo</abbr></S.DaysOfWeek>
            <S.DaysOfWeek role='columnheader' aria-label='Tuesday'><abbr title='Tuesday'>Tu</abbr></S.DaysOfWeek>
            <S.DaysOfWeek role='columnheader' aria-label='Wednesday'><abbr title='Wednesday'>We</abbr></S.DaysOfWeek>
            <S.DaysOfWeek role='columnheader' aria-label='Thursday'><abbr title='Thursday'>Th</abbr></S.DaysOfWeek>
            <S.DaysOfWeek role='columnheader' aria-label='Friday'><abbr title='Friday'>Fr</abbr></S.DaysOfWeek>
            <S.DaysOfWeek role='columnheader' aria-label='Saturday'><abbr title='Saturday'>Sa</abbr></S.DaysOfWeek>
          </tr>
        </thead>
        <tbody>
          {generateMonth().map((week, i) => (
            <tr className='week' key={`week-${i}`} role='row'>
              {week.map((day, i) => (day
                ? <S.Cell
                    $selected={isEqual(selectedDate, day)}
                    key={`day-cell-${i}`}
                    onClick={() => handleDateSelection(day)}
                    role='gridcell'
                    aria-selected={isEqual(selectedDate, day)}
                  >
                  {getDate(day)}
                </S.Cell>
                : <S.Cell $empty key={`day-cell-${i}`}>&nbsp;</S.Cell>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </S.Calendar>
  )
}
export default Calendar
