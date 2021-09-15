const primaryDark = '#1E4147'
const activeBg = '#AAC789'

export const defaultTheme = {
  text: {
    heading: '#FFFFFF',
    daysOfWeek: `${primaryDark}`,
    dateDisplay: '#000000'
  },
  bg: {
    heading: `${primaryDark}`,
    selectedDay: `${activeBg}`,
    dateDisplay: '#FFFFFF'
  },
  hover: {
    day: `${activeBg}`
  },
  border: {
    dateDisplay: `1px solid ${primaryDark}`,
    dateSelect: `2px solid ${primaryDark}`,
    calendar: `2px solid ${primaryDark}`
  }
}