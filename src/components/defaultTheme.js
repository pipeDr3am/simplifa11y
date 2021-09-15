const primaryDark = '#1E4147'
const activeBg = '#AAC789'

export const defaultTheme = {
  calendar: {
    border: `2px solid ${primaryDark}`,
    margin: `.3em 0 0 .3em`,
    icon: {
      color: `${primaryDark}`,
      backgroundColor: '#FFFFFF',
      border: '1px solid #CC0000',
      borderLeft: '0',
      padding: '.4em 20px 0 20px',
      width: 'auto',
      height: 'auto'
    },
    heading: {
      color: '#FFFFFF',
      backgroundColor: `${primaryDark}`
    },
    days: {
      titles: {
        color: `${primaryDark}`
      },
      selected: {
        backgroundColor: `${activeBg}`
      },
      hover: {
        backgroundColor: `${activeBg}`
      }
    }
  },
  dateInput: {
    color: '#000000',
    backgroundColor: '#FFFFFF',
    border: '1px solid #CC0000',
    padding: '10px 20px',
    width: '6em',
    height: 'auto'
  }
}