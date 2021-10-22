import React, { useState, useEffect } from 'react'
import './app.css'

import { DatePicker } from 'simplifa11y'

const App = () => {
  const [dateString, setDateString] = useState('')
  const [initialDate, setInitialDate] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setTimeout(() => {
      setInitialDate('03/03/2003')
    }, 1000)
  }, [])

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
    console.log(e)
    setError(e)
  }

  return (
    <>
      {error && (
        <>
          <p>error: {error.message}</p>
          <p>dateInput: {error.details.dateInput}</p>
          <p>dateRange max: {error.details.dateRange.max}</p>
          <p>dateRange min: {error.details.dateRange.min}</p>
        </>
      )}
      <form onSubmit={e => e.preventDefault()}>
        <DatePicker
          inputId='test...'
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
          initialDate={initialDate}
        />

        <p>dateString is: [{dateString}]</p>
        <p>initialDate is: [{initialDate}]</p>

        <input
          style={{
            position: 'absolute'
          }}
          type='text'
          value='test z-index'
          onChange={() => {}}
        />

        <p className='section'>no initialDate</p>

        <DatePicker
          inputId='test...'
          theme={theme}
          format='MM/dd/yyyy'
          placeholder='Enter a Date'
          formatHint='MM DD YYYY'
          onSelect={setDateString}
          dateRange={{
            min: '08/02/2002',
            max: '08/31/2044'
          }}
          onInvalidDate={onInvalidDate}
        />

        <p className='section'>no dateRange</p>

        <DatePicker
          inputId='test...'
          theme={theme}
          format='MM/dd/yyyy'
          placeholder='Enter a Date'
          formatHint='MM DD YYYY'
          onSelect={setDateString}
          onInvalidDate={onInvalidDate}
          ariaLabelFormatHint='format into a pipe dream'
        />

        <p>dateString is: {dateString}</p>
      </form>

    </>
  )
}

export default App
