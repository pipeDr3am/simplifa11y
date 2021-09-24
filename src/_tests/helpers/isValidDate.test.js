// @Todo implement
import { isValidDate } from '../../helpers/isValidDate'

let str = ''
let dateRange = {
  min: '01/01/2000',
  max: '01/20/2000'
}

test('date valid - day', () => {
  str = '01/14/2000'
  const isValid = isValidDate({ dateRange, str })
  expect(isValid).toBe(true)
})

test('date invalid - day', () => {
  str = '01/22/2000'
  const isValid = isValidDate({ dateRange, str })
  expect(isValid).toBe(false)
})

test('date valid - month', () => {
  dateRange = {
    min: '01/01/2000',
    max: '03/01/2000'
  }
  str = '02/01/2000'
  const isValid = isValidDate({ dateRange, str })
  expect(isValid).toBe(true)
})

test('date invalid - month', () => {
  dateRange = {
    min: '01/01/2000',
    max: '03/01/2000'
  }
  str = '04/01/2000'
  const isValid = isValidDate({ dateRange, str })
  expect(isValid).toBe(false)
})

test('date valid - year', () => {
  dateRange = {
    min: '01/01/1999',
    max: '01/20/2001'
  }
  str = '01/01/2000'
  const isValid = isValidDate({ dateRange, str })
  expect(isValid).toBe(true)
})

test('date invalid - year', () => {
  dateRange = {
    min: '01/01/1999',
    max: '01/20/2001'
  }
  str = '01/01/2003'
  const isValid = isValidDate({ dateRange, str })
  expect(isValid).toBe(false)
})
