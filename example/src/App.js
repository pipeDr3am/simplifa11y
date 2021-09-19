import React, { useState } from 'react'

import { DatePicker } from 'simplifa11y'

const App = () => {
  const [dateString, setDateString] = useState('')

  const theme = {
    calendar: {
      zIndex: '2'
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
