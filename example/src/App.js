import React from 'react'

import { DatePicker } from 'simplifa11y'
import 'simplifa11y/dist/index.css'

const App = () => {
  return (
    <DatePicker 
      format='MM/dd/yyyy' 
      placeholder='Enter a Date'
      formatHint='MM DD YYYY' 
    />
  )
}

export default App
