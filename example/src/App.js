import React, { useState } from 'react'

import { DatePicker } from 'simplifa11y'

const App = () => {
  const [dateString, setDateString] = useState('')

  const theme = {
    calendar: {
      zIndex: '2'
    },
    dateInput: {
      wrap: {
        outline: '2px solid yellow',
        hover: {
          outline: '5px solid green'
        }
      }
    }
  }

  const onInvalidDate = (e) => {
    console.log('received error:', e)
  }

  return (
    <>
      <DatePicker
        theme={theme}
        format='MM/dd/yyyy'
        placeholder='Enter a Date'
        formatHint='MM DD YYYY'
        onSelect={setDateString}
        dateRange={{
          min: '08/02/2002',
          max: '08/31/2008'
        }}
        onInvalidDate={onInvalidDate}
      />

      <p>dateString is {dateString}</p>

      <input
        style={{
          position: 'absolute'
        }}
        type='text'
        value='test z-index'
        onChange={() => {}}
      />

    </>
  )
}

export default App
