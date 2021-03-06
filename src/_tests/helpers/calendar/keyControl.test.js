import { dateFromString } from '../../../helpers/formatDate'
import makeKeyControl from '../../../helpers/calendar/keyControl'
import { expect } from '@jest/globals'

let keyControl = {}
let selectedDate = {}
let expectedDate = {}
let setSelectedDate = {}
let dateRange = {}

beforeEach(() => {
  dateRange = {
    min: '08/02/2002',
    max: '10/31/3044'
  }
  setSelectedDate = jest.fn((date) => {
    expect(date).toStrictEqual(expectedDate)
  })
})

test('handleKeyPress with charCode 13 runs callback', () => {
  const e = { charCode: 13 }
  const callback = jest.fn(() => {})
  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.handleKeyPress({ e, callback })
  expect(callback.mock.calls.length).toBe(1)
})

test('handleKeyPress with charCode 32 runs callback', () => {
  const e = { charCode: 32 }
  const callback = jest.fn(() => {})
  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.handleKeyPress({ e, callback })
  expect(callback.mock.calls.length).toBe(1)
})

test('handleKeyPress with !charCode 13 || 32 does not fire callback', () => {
  const e = { charCode: 86 }
  const callback = jest.fn(() => {})
  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.handleKeyPress({ e, callback })
  expect(callback.mock.calls.length).toBe(0)
})

test('setNextMonth: year valid && month valid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/3044'
  }
  selectedDate = dateFromString({ date: '04/15/2022' })
  expectedDate = dateFromString({ date: '05/01/2022' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setNextMonth: year valid && month blocked', () => {
  dateRange = {
    min: '01/02/2021',
    max: '03/31/2022'
  }
  selectedDate = dateFromString({ date: '02/15/2022' })
  expectedDate = dateFromString({ date: '03/01/2022' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setNextMonth: year blocked && month valid', () => {
  dateRange = {
    min: '01/02/2021',
    max: '03/31/2021'
  }
  selectedDate = dateFromString({ date: '02/15/2021' })
  expectedDate = dateFromString({ date: '03/01/2021' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setNextMonth: year blocked && month blocked', () => {
  dateRange = {
    min: '01/02/2021',
    max: '03/31/2021'
  }
  selectedDate = dateFromString({ date: '03/15/2021' })
  expectedDate = undefined

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(0)
  expect(setSelectedDate.mock.calls[0]).toEqual(expectedDate)
})

test('setNextMonth: year blocked && month - 1', () => {
  dateRange = {
    min: '01/02/2021',
    max: '04/31/2021'
  }
  selectedDate = dateFromString({ date: '03/15/2021' })
  expectedDate = dateFromString({ date: '04/01/2021' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setNextYear: year valid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/3044'
  }
  selectedDate = dateFromString({ date: '10/15/2022' })
  expectedDate = dateFromString({ date: '10/31/2023' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextYear()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setNextYear: year invalid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/2022'
  }
  selectedDate = dateFromString({ date: '04/15/2022' })
  expectedDate = undefined

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextYear()
  expect(setSelectedDate.mock.calls.length).toBe(0)
  expect(setSelectedDate.mock.calls[0]).toEqual(expectedDate)
})

test('setNextYear: next date valid when year is 1 less than max year and month is greater than max month', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/12/2022'
  }
  selectedDate = dateFromString({ date: '12/15/2021' })
  expectedDate = dateFromString({ date: '10/12/2022' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setNextYear()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setPreviousMonth: year valid && month valid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/3044'
  }
  selectedDate = dateFromString({ date: '04/15/2022' })
  expectedDate = dateFromString({ date: '03/01/2022' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setPreviousMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setPreviousMonth: year valid && month blocked', () => {
  dateRange = {
    min: '01/02/2021',
    max: '03/31/2024'
  }
  selectedDate = dateFromString({ date: '02/15/2022' })
  expectedDate = dateFromString({ date: '01/01/2022' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setPreviousMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setPreviousMonth: year blocked && month valid', () => {
  dateRange = {
    min: '01/02/2021',
    max: '03/31/2023'
  }
  selectedDate = dateFromString({ date: '02/15/2021' })
  expectedDate = dateFromString({ date: '01/01/2021' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setPreviousMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setPreviousYear: year valid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/3044'
  }
  selectedDate = dateFromString({ date: '10/15/2022' })
  expectedDate = dateFromString({ date: '10/01/2021' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setPreviousYear()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})

test('setPreviousYear: year invalid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/2022'
  }
  selectedDate = dateFromString({ date: '04/15/2021' })
  expectedDate = undefined

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setPreviousYear()
  expect(setSelectedDate.mock.calls.length).toBe(0)
  expect(setSelectedDate.mock.calls[0]).toEqual(expectedDate)
})

test('setPreviousYear: selectedDate valid when year is 1 greater than min year and month is before min month', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/2025'
  }
  selectedDate = dateFromString({ date: '02/15/2022' })
  expectedDate = dateFromString({ date: '03/02/2021' })

  keyControl = makeKeyControl({ dateRange, selectedDate, setSelectedDate })
  keyControl.setPreviousYear()
  expect(setSelectedDate.mock.calls.length).toBe(1)
  expect(setSelectedDate.mock.calls[0][0]).toEqual(expectedDate)
})
