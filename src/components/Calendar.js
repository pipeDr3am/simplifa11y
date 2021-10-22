import React, { useState, useEffect } from 'react'
import {
  format as fnsFormat,
  startOfMonth,
  getDaysInMonth,
  getWeeksInMonth,
  getDay,
  getMonth,
  getYear,
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

const ariaDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

const ariaMonths = [
  'January', 
  'February', 
  'March', 
  'April', 
  'May', 
  'June', 
  'July', 
  'August', 
  'September', 
  'October', 
  'November', 
  'December'
]

const Calendar = ({
  date,
  format,
  handleSelectDate,
  closeCalendar,
  dateRange,
  calendarShown
}) => {
  const [selectedDate, setSelectedDate] = useState(dateFromString({ date }))
  const [focusDay, setFocusDay] = useState({
    focus: true,
    previousDate: ''
  })
  const keyControl = makeKeyControl({
    format,
    dateRange,
    selectedDate,
    setSelectedDate,
    setFocusDay
  })

  useEffect(() => {
    if (calendarShown && focusDay.focus) {
      setFocusDay({ focus: false })
      keyControl.focusSelectedDate({ previousDate: focusDay.previousDate })
    }
  }, [calendarShown, focusDay])

  const previousYearKeyPress = e => {
    const keyCode = e.keyCode
    const control = e.shiftKey

    if (keyCode === 13 || keyCode === 32) {
      e.preventDefault()
      keyControl.setPreviousYear()
    } else if (keyCode === 9) { // TAB
      if (control) {
        // shift held
        e.preventDefault()
        if (document.activeElement === document.getElementById('previousYear')) {
          keyControl.focusSelectedDate({ previousDate: '' })
        }
      }
    }
  }

  // @TODO move to keyControl + unit tests
  const handleDayKeyPress = e => {
    e.preventDefault()
    const keyCode = e.keyCode
    const control = e.shiftKey
    switch (keyCode) {
      case 9: // TAB
        if (!control) {
          document.getElementById('previousYear').focus()
          e.stopPropagation()
          e.preventDefault()
        }
        break
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
    const yearValid = curYear >= minYear && curYear <= maxYear

    const returnArr = []
    let dayNum = weekNum === 0 ? 1 : (weekNum * 7) - startWeekday + 1
    for (let i = 0; i < 7; i++) {
      let minDayValid = true
      let maxDayValid = true
      const inMinMonth = curMonth === minMonth
      const inMaxMonth = curMonth === maxMonth

      if (inMinMonth && yearValid) {
        minDayValid = dayNum > minDay
      }
      if (inMaxMonth && yearValid) {
        maxDayValid = dayNum < maxDay
      }
      let validDay = true

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

  const getWrittenDay = ({ day }) => {
    const dateString = fnsFormat(day, format)
    const dateObj = new Date(dateString)
    const dayIdx = getDay(dateObj)
    const monthIdx = getMonth(dateObj)
    const year = getYear(dateObj)

    const writtenDay = ariaDays[dayIdx]
    const writtenMonth = ariaMonths[monthIdx]
    return `${writtenDay} ${writtenMonth} ${year}`
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

  const onBlur = e => {
    //@Recall was trying to close calendar on clicking off of it ... getting there
    // leaving this as its not needed atm
    //console.log('blur')
    // if user is not focusing on a calendar button, they have clicked outside the calendar
    // const activeFocus = document.activeElement['data-focus']
    // console.log('activeFocus:', document.activeElement)
    // if (!activeFocus) {
    //   console.log('hide ui')
    // }

  }

  return (
    <S.Calendar 
      id='calendarDisplay' 
      aria-expanded={calendarShown}
      onBlur={onBlur}
    >
      <S.Title>
        <S.Icons>
          <S.IconWrap
            type='button'
            id='previousYear'
            data-focus='cal'
            aria-label='previous year'
            onClick={keyControl.setPreviousYear}
            onKeyDown={(e) => previousYearKeyPress(e)}
          >
            <FontAwesomeIcon icon={faAngleDoubleLeft} />
          </S.IconWrap>
          <S.IconWrap
            type='button'
            data-focus='cal'
            aria-label='previous month'
            onClick={keyControl.setPreviousMonth}
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
            type='button'
            data-focus='cal'
            aria-label='next month'
            onClick={keyControl.setNextMonth}
            onKeyUp={(e) => keyControl.handleKeyPress({ e, callback: keyControl.setNextMonth })}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </S.IconWrap>
          <S.IconWrap
            type='button'
            data-focus='cal'
            aria-label='next year'
            onClick={keyControl.setNextYear}
            onKeyUp={(e) => keyControl.handleKeyPress({ e, callback: keyControl.setNextYear })}
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} />
          </S.IconWrap>
        </S.Icons>
      </S.Title>
      <table
        role='grid'
        aria-label='select day via arrow keys'
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
                    id={`${getDate(day)} ${getWrittenDay({ day })}`}
                    aria-selected={isEqual(selectedDate, day)}
                    $selected={isEqual(selectedDate, day)}
                    key={`day-cell-${i}`}
                    onClick={() => handleDateSelection(day)}
                  >
                  <button
                    type='button'
                    id={fnsFormat(day, format)}
                    data-focus='cal'
                    aria-label={`${getDate(day)} ${getWrittenDay({ day })}`}
                    onKeyDown={handleDayKeyPress}
                    tabIndex={`${isEqual(selectedDate, day) ? '0' : '-1'}`}
                  >
                    {getDate(day)}
                  </button>
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
