import { format as fnsFormat } from 'date-fns'

export const formatDate = ({ date, format }) => {
  try {
    const [month, day, year] = date.substr(0, 10).split('/')
    return fnsFormat(new Date(year, (month - 1), day), format)
  } catch (e) {
    console.error(e.message)
  }
}

export const dateFromString = ({ date }) => {
  try {
    // remove whitespace
    const dateStr = date.replace(/\s+/g, '')
    const [month, day, year] = dateStr.substr(0, 10).split('/')
    return new Date(year, (month - 1), day)
  } catch (e) {
    console.error(e.message)
  }
}
