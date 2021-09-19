const primaryDark = '#1E4147'
const activeBg = '#AAC789'

export const defaultTheme = {
  calendar: {
    border: `2px solid ${primaryDark}`,
    margin: '.3em 0 0 .3em',
    background: '#FFFFFF',
    zIndex: 1,
    icon: {
      color: `${primaryDark}`,
      backgroundColor: '#FFFFFF',
      border: '1px solid #CC0000',
      borderLeft: '0',
      padding: '.5em 20px 0 20px',
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
    wrap: {
      color: '#000000',
      backgroundColor: '#FFFFFF',
      border: '1px solid #CC0000',
      padding: '0',
      width: '10em',
      height: 'auto'
    },
    input: {
      fontSize: '1em',
      backgroundColor: 'transparent',
      padding: '0 0 0 10px',
      margin: '0'
    },
    inputHint: {
      fontSize: '.8em',
      color: '#1E4147',
      padding: '0 0 0 10px'
    }
  }
}
