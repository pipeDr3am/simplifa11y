# simplifa11y

> a11y-ready react component library using styled-components for theming

## install

```bash
yarn add @pipeDr3am/simplifa11y -s
```

## use

### DatePicker
themeable datepicker using styled-components

```jsx
import React from 'react'

import { DatePicker } from 'simplifa11y'

const Example = () => {
  const [dateString, setDateString] = useState('')

  return (
    <>
      <DatePicker 
        format='MM/dd/yyyy' 
        placeholder='Enter a Date'
        formatHint='MM DD YYYY' 
        onSelect={setDateString}
      />

      <p>dateString is {dateString}</p>

    </>
  )
}
```

### custom theme
pass a theme obj into DatePicker, overrides currently available:

```jsx
const defaultTheme = {
  calendar: {
    border: `2px solid ${primaryDark}`,
    margin: `.3em 0 0 .3em`,
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
      width: '10em',
      fontSize: '1em',
      backgroundColor: 'transparent',
      padding: '0',
      margin: '0'
    },
    inputHint: {
      fontSize: '.8em',
      color: '#1E4147'
    }
  }
}
```

pass in i.e.
```jsx
<DatePicker 
  ...
  theme={customTheme}
  ...
/>
```

### 

## License

GNU General Public License v3.0 © [dr-mimic](https://github.com/dr-mimic)

### code adapted/refactored from
- https://blog.logrocket.com/how-to-build-an-accessible-date-picker-component-in-react/
- https://github.com/jkithome/accessible-datepicker