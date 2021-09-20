import { dateFromString } from '../../../helpers/formatDate'
import makekeyControl from '../../../helpers/calendar/keyControl'

let keyControl = {}
let selectedDate = {}
let expectedDate = {}
let setSelectedDate = {}

beforeEach(() => {
  selectedDate = dateFromString({date: '04/30/2086'})
  setSelectedDate = jest.fn((date) => {
    expect(date).toStrictEqual(expectedDate)
  })
  keyControl = makekeyControl({selectedDate, setSelectedDate})
})

const runTest = ({title, dateExp, callback}) => {
  test(`${title}`, () => {
    expectedDate = dateExp
    callback()
    expect(setSelectedDate.mock.calls.length).toBe(1)
  })
}

test('handleKeyPress with charCode 13 runs callback', () => {
  const e = { charCode: 13 }
  const callback = jest.fn(() => {})
  keyControl.handleKeyPress({e, callback})
  expect(callback.mock.calls.length).toBe(1)
})

test('handleKeyPress with charCode 32 runs callback', () => {
  const e = { charCode: 32 }
  const callback = jest.fn(() => {})
  keyControl.handleKeyPress({e, callback})
  expect(callback.mock.calls.length).toBe(1)
})

test('handleKeyPress with !charCode 13 || 32 does not fire callback', () => {
  const e = { charCode: 86 }
  const callback = jest.fn(() => {})
  keyControl.handleKeyPress({e, callback})
  expect(callback.mock.calls.length).toBe(0)
})

runTest({
  title: 'setPreviousMonth functional',
  dateExp: dateFromString({date: '03/01/2086'}),
  callback: () => { keyControl.setPreviousMonth() }
})

runTest({
  title: 'setNextMonth functional',
  dateExp: dateFromString({date: '05/01/2086'}),
  callback: () => { keyControl.setNextMonth() }
})

runTest({
  title: 'setPreviousYear functional',
  dateExp: dateFromString({date: '04/01/2085'}),
  callback: () => { keyControl.setPreviousYear() }
})

runTest({
  title: 'setNextYear functional',
  dateExp: dateFromString({date: '04/01/2087'}),
  callback: () => { keyControl.setNextYear() }
})

runTest({
  title: 'setPreviousDay functional',
  dateExp: dateFromString({date: '04/29/2086'}),
  callback: () => { keyControl.setPreviousDay() }
})

runTest({
  title: 'setNextDay functional',
  dateExp: dateFromString({date: '04/31/2086'}),
  callback: () => { keyControl.setNextDay() }
})
