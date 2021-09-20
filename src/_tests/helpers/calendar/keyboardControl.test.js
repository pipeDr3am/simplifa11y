import { dateFromString } from '../../../helpers/formatDate'
import { 
  setPreviousMonth,
  setNextMonth,
  setPreviousYear
} from '../../../helpers/calendar/keyboardControl'

let selectedDate = {}
let expectedDate = {}
let setSelectedDate = {}

beforeEach(() => {
  selectedDate = dateFromString({date: '04/30/2086'})
  setSelectedDate = jest.fn((date) => {
    expect(date).toStrictEqual(expectedDate)
  })
})

test('setPreviousMonth functional', () => {
  expectedDate = dateFromString({date: '03/01/2086'})
  setPreviousMonth({selectedDate, setSelectedDate})
  expect(setSelectedDate.mock.calls.length).toBe(1)
})

test('setNextMonth functional', () => {
  expectedDate = dateFromString({date: '05/01/2086'})
  setNextMonth({selectedDate, setSelectedDate})
  expect(setSelectedDate.mock.calls.length).toBe(1)
})