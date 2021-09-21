import { dateFromString } from '../../../helpers/formatDate'
import makeKeyControl from '../../../helpers/calendar/keyControl'

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

const runTest = ({selDate, title, dateExp, callback}) => {
  selectedDate = selDate || dateFromString({date: '04/30/2086'})
  test(`${title}`, () => {
    expectedDate = dateExp
    callback()
    expect(setSelectedDate.mock.calls.length).toBe(1)
  })
}

test('handleKeyPress with charCode 13 runs callback', () => {
  const e = { charCode: 13 }
  const callback = jest.fn(() => {})
  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.handleKeyPress({e, callback})
  expect(callback.mock.calls.length).toBe(1)
})

test('handleKeyPress with charCode 32 runs callback', () => {
  const e = { charCode: 32 }
  const callback = jest.fn(() => {})
  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.handleKeyPress({e, callback})
  expect(callback.mock.calls.length).toBe(1)
})

test('handleKeyPress with !charCode 13 || 32 does not fire callback', () => {
  const e = { charCode: 86 }
  const callback = jest.fn(() => {})
  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.handleKeyPress({e, callback})
  expect(callback.mock.calls.length).toBe(0)
})

test('setNextMonth: year valid && month valid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/3044'
  }
  selectedDate = dateFromString({date: '04/15/2022'})
  expectedDate = dateFromString({date: '05/01/2022'})

  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(1)
})

test('setNextMonth: year valid && month blocked', () => {
  dateRange = {
    min: '01/02/2021',
    max: '03/31/2022'
  }
  selectedDate = dateFromString({date: '02/15/2022'})
  expectedDate = dateFromString({date: '03/01/2022'})

  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(0)
})

test('setNextMonth: year blocked && month valid', () => {
  dateRange = {
    min: '01/02/2021',
    max: '03/31/2021'
  }
  selectedDate = dateFromString({date: '02/15/2021'})
  expectedDate = dateFromString({date: '03/01/2021'})

  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.setNextMonth()
  expect(setSelectedDate.mock.calls.length).toBe(0)
})

test('setNextYear: year valid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/3044'
  }
  selectedDate = dateFromString({date: '10/15/2022'})
  expectedDate = dateFromString({date: '10/01/2023'})

  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.setNextYear()
  expect(setSelectedDate.mock.calls.length).toBe(1)
})

test('setNextYear: year invalid', () => {
  dateRange = {
    min: '03/02/2021',
    max: '10/31/2022'
  }
  selectedDate = dateFromString({date: '04/15/2022'})
  expectedDate = dateFromString({date: '04/01/2023'})

  keyControl = makeKeyControl({dateRange, selectedDate, setSelectedDate})
  keyControl.setNextYear()
  expect(setSelectedDate.mock.calls.length).toBe(0)
})