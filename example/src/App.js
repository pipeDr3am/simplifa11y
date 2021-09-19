import React, { useState } from 'react'

import { DatePicker } from 'simplifa11y'

const App = () => {
  const [dateString, setDateString] = useState('')

  const theme = {
    dateInput: {
      wrap: {
        width: '300px'
      },
      input: {
        padding: '0 0 0 20px'
      },
      inputHint: {
        padding: '0 0 0 20px'
      }
    }
  }

  return (
    <>
      <DatePicker
        theme={theme}
        format='MM/dd/yyyy'
        placeholder='Enter a Date'
        formatHint='MM DD YYYY'
        onSelect={setDateString}
      />

      <p>dateString is {dateString}</p>

      <input 
        style={{
          position: 'absolute'
        }}
        type='text' 
        value='test z-index' 
      />

    </>
  )
}

export default App
