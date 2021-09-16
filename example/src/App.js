import React, {useState} from 'react'

import { DatePicker } from 'simplifa11y'

const App = () => {

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

export default App
