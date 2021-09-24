# simplifa11y

> a11y-ready react component library using styled-components for theming

## install

```bash
yarn add @pipedr3am/simplifa11y -s
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
        dateRange={{
          min: '08/02/2002',
          max: '12/31/2030'
        }}
      />

      <p>dateString is {dateString}</p>

    </>
  )
}
```

### theming
pass a [theme obj](./src/components/defaultTheme.js) into DatePicker:

```jsx
<DatePicker 
  ...
  theme={customTheme}
  ...
/>
```

single param updates will only modify params passed in and will use defaultTheme for rest:
```jsx
const theme = {
  calendar: {
    zIndex: '2'
  }
}
```

no theme:
`const theme = 'none'`

### onInvalidDate
```jsx
const onInvalidDate = (e) => {
  /*
    e.message
    e.details.dateRange
    e.details.dateInput
  */
}
...
  <DatePicker
    ...
    onInvalidDate={onInvalidDate}
    ...
  />
```

### dateInput width
```jsx
const theme = {
  dateInput: {
    wrap: {
      width: '300px'
    }
  }
}
```

### dateInput & inputHint padding
```jsx
const theme = {
  dateInput: {
    input: {
      padding: '0 0 0 20px'
    },
    inputHint: {
      padding: '0 0 0 20px'
    }
  }
}
```

### dateInput outline && :hover outline
```jsx
const theme = {
  dateInput: {
    wrap: {
      outline: '2px solid yellow',
      hover: {
        outline: '5px solid green'
      }
    }
  }
  }
```

## License

GNU General Public License v3.0 © [dr-mimic](https://github.com/dr-mimic)

### code adapted/refactored from
- https://blog.logrocket.com/how-to-build-an-accessible-date-picker-component-in-react/
- https://github.com/jkithome/accessible-datepicker