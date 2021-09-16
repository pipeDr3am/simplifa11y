import React from 'react'

import { DatePicker } from 'simplifa11y'
import 'simplifa11y/dist/index.css'

const App = () => {
  return (
    <DatePicker 
      format='yyyy-MM-dd' 
      placeholder='Enter a Date'
      formatHint='YYYY MM DD' 
    />
  )
}

export default App
