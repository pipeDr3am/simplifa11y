import { dateFromString } from '../../../helpers/formatDate'
import makeKeyboardControl from '../../../helpers/calendar/keyboardControl'

let keyboardControl = {}
let selectedDate = {}
let expectedDate = {}
let setSelectedDate = {}

beforeEach(() => {
  selectedDate = dateFromString({date: '04/30/2086'})
  setSelectedDate = jest.fn((date) => {
    expect(date).toStrictEqual(expectedDate)
  })
  keyboardControl = makeKeyboardControl({selectedDate, setSelectedDate})
})

test('setPreviousMonth functional', () => {
  expectedDate = dateFromString({date: '03/01/2086'})
  keyboardControl.setPreviousMonth({selectedDate, setSelectedDate})
  expect(setSelectedDate.mock.calls.length).toBe(1)
})

test('setNextMonth functional', () => {
  expectedDate = dateFromString({date: '05/01/2086'})
  keyboardControl.setNextMonth({selectedDate, setSelectedDate})
  expect(setSelectedDate.mock.calls.length).toBe(1)
})