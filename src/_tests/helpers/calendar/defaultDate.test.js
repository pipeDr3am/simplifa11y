import { expect } from "@jest/globals"
import { getDefaultDate } from "../../../helpers/calendar/defaultDate"

test('returns current date if no dateRange is passed in', () => {
  const dateRange = undefined
  const defaultDate = getDefaultDate({dateRange})
  expect(defaultDate).toEqual(new Date())
})

test('returns current date if current date is within dateRange.max', () => {
  const dateRange = undefined
  const defaultDate = getDefaultDate({dateRange})
  expect(defaultDate).toEqual(new Date())
})

test('returns max date if current date is outside dateRange.max', () => {
  const dateRange = {
    max: '01/01/2002'
  }
  const defaultDate = getDefaultDate({dateRange})
  expect(defaultDate).toEqual(new Date(dateRange.max))
})
