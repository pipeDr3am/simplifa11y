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

const runTest = ({title, dateExp, callback}) => {
  test(`${title}`, () => {
    expectedDate = dateExp
    callback()
    expect(setSelectedDate.mock.calls.length).toBe(1)
  })
}

runTest({
  title: 'setPreviousMonth functional',
  dateExp: dateFromString({date: '03/01/2086'}),
  callback: () => { keyboardControl.setPreviousMonth() }
})

runTest({
  title: 'setNextMonth functional',
  dateExp: dateFromString({date: '05/01/2086'}),
  callback: () => { keyboardControl.setNextMonth() }
})

runTest({
  title: 'setPreviousYear functional',
  dateExp: dateFromString({date: '04/01/2085'}),
  callback: () => { keyboardControl.setPreviousYear() }
})

runTest({
  title: 'setNextYear functional',
  dateExp: dateFromString({date: '04/01/2087'}),
  callback: () => { keyboardControl.setNextYear() }
})
