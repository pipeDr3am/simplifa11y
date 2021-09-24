import React, { useState } from 'react'
import {
  format as fnsFormat,
  startOfMonth,
  getDaysInMonth,
  getWeeksInMonth,
  getDay,
  setDate,
  getDate,
  isEqual,
  toDate
} from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import * as S from './Calendar.styles'
import { dateFromString } from '../helpers/formatDate'
import makeKeyControl from '../helpers/calendar/keyControl'

const Calendar = ({
  date,
  format,
  handleSelectDate,
  closeCalendar,
  dateRange,
  calendarShown
}) => {
  const [selectedDate, setSelectedDate] = useState(dateFromString({ date }))
  const keyControl = makeKeyControl({
    dateRange,
    selectedDate,
    setSelectedDate
  })

  // @TODO move to keyControl + unit tests
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
        control ? keyControl.setDatePreviousYear() : keyControl.setDatePreviousMonth()
        return
      case 34: // Page Down
        control ? keyControl.setDateNextYear() : keyControl.setDateNextMonth()
        return
      case 35: // End
        keyControl.setMonthEnd()
        return
      case 36: // Home
        keyControl.setMonthStart()
        return
      case 37: // Left
        keyControl.setPreviousDay()
        return
      case 38: // Up
        keyControl.setPreviousWeek()
        return
      case 39: // Right
        keyControl.setNextDay()
        return
      case 40: // Down
        keyControl.setNextWeek()
        break
      default:
        break
    }
  }
  const handleDateSelection = (date) => {
    const dateString = fnsFormat(date, format)
    handleSelectDate(dateString)
  }

  // @TODO refactor this, extract + unit test
  const makeWeek = ({ selectedDate, weekNum, daysInMonth, startWeekday }) => {
    const curYear = toDate(new Date(selectedDate)).getFullYear()
    const curMonth = toDate(new Date(selectedDate)).getMonth() + 1
    let minDay = 0
    let maxDay = 0
    let minMonth = 0
    let maxMonth = 0
    let minYear = 0
    let maxYear = 0

    const [miMonth, miDay, miYear] = dateRange ? dateRange.min.split('/') : ['01', '01', '0000']
    const [maMonth, maDay, maYear] = dateRange ? dateRange.max.split('/') : ['01', '01', '9999']
    minDay = parseInt(miDay)
    maxDay = parseInt(maDay) + 1
    minMonth = parseInt(miMonth)
    maxMonth = parseInt(maMonth)
    minYear = parseInt(miYear)
    maxYear = parseInt(maYear)

    const inMinYear = curYear === minYear
    const inMaxYear = curYear === maxYear

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

      if (curMonth < minMonth && inMinYear) {
        validDay = false
      } else if (curMonth > maxMonth && inMaxYear) {
        validDay = false
      }

      if (curYear < minYear || curYear > maxYear) {
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

  // @TODO same refactor somewhere
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
    <S.Calendar id='calendarDisplay' aria-expanded={calendarShown}>
      <S.Title>
        <S.Icons>
          <S.IconWrap
            tabIndex='0'
            role='button'
            aria-label='previous year'
            onClick={keyControl.setPreviousYear}
            onKeyPress={(e) => keyControl.handleKeyPress({ e, callback: keyControl.setPreviousYear })}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </S.IconWrap>
          <S.IconWrap
            tabIndex='0'
            role='button'
            aria-label='previous month'
            onClick={keyControl.setPreviousMonth}
            onKeyPress={(e) => keyControl.handleKeyPress({ e, callback: keyControl.setPreviousMonth })}
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
            role='button'
            aria-label='next month'
            onClick={keyControl.setNextMonth}
            onKeyPress={(e) => keyControl.handleKeyPress({ e, callback: keyControl.setNextMonth })}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </S.IconWrap>
          <S.IconWrap
            tabIndex='0'
            role='button'
            aria-label='next year'
            onClick={keyControl.setNextYear}
            onKeyPress={(e) => keyControl.handleKeyPress({ e, callback: keyControl.setNextYear })}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </S.IconWrap>
        </S.Icons>
      </S.Title>
      <table
        tabIndex='0'
        role='grid'
        aria-label='select day via arrow keys'
        onKeyDown={handleTableKeyPress}
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
