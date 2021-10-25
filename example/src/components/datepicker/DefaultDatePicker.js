import {useState} from 'react'
import { 
  CopyBlock,
  anOldHope
} from 'react-code-blocks'

import { DatePicker } from 'simplifa11y'

const CodeBlockDefaults = {
  language: 'jsx',
  theme: anOldHope,
  showLineNumbers: false
}

const code = 
`<DatePicker
  format='MM/dd/yyyy'
  placeholder='Enter a Date'
  formatHint='MM DD YYYY'
  onInvalidDate={onInvalidDate}
/>
`

const onSelectCodeExample = `
import { useState } from 'react'
...
const [dateValue, setDateValue] = useState('')
...
<DatePicker
  onSelect={setDateValue}
  ...
/>
`

const dateRangeCodeExample = `
...
<DatePicker
  dateRange={{
    min: '08/02/2002',
    max: '08/31/2008'
  }}
  ...
/>
`

const defaultDateRange = {
  min: '01/01/0000',
  max: '01/01/9999'
}

const DefaultDatePicker = () => {

  const [dateValue, setDateValue] = useState('')
  
  const onInvalidDate = e => {
    console.log('onInvalidDate:', e)
  }

  return (
    <>

      <div className='component-demo'>
        <h2>Default DatePicker</h2>

        <DatePicker
          format='MM/dd/yyyy'
          placeholder='Enter a Date'
          formatHint='MM DD YYYY'
          onInvalidDate={onInvalidDate}
        />

        <hr />
      </div>

      <hr />
      <h2>example</h2>
      <hr />

      <CopyBlock
        text={code}
        {...CodeBlockDefaults}
      />
      
      <hr />
      <h2>parameters</h2>
      <hr />

      <h3>strings</h3>

      <table className='tg'>
        <thead className='tg-0pky'>
          <tr>
            <th className='tg-0pky'>name</th>
            <th className='tg-0pky'>description</th>
            <th className='tg-0pky'>default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tg-0pky'>inputId</td>
            <td className='tg-0pky'>id override of date input text field</td>
            <td className='tg-0pky'>a11y-date-input</td>
          </tr>
          <tr>
            <td className='tg-0pky'>format</td>
            <td className='tg-0pky'>!!! NOT IMPLEMENTED !!! - pass as `MM/dd/yyyy` for now</td>
            <td className='tg-0pky'>t</td>
          </tr>
          <tr>
            <td className='tg-0pky'>placeholder</td>
            <td className='tg-0pky'>placeholder for date input text field</td>
            <td className='tg-0pky'>t</td>
          </tr>
          <tr>
            <td className='tg-0pky'>formatHint</td>
            <td className='tg-0pky'>hint displayed below date input text field</td>
            <td className='tg-0pky'>t</td>
          </tr>
        </tbody>
      </table>

      <h3>events (functions)</h3>

      <table className='tg'>
        <thead className='tg-0pky'>
          <tr>
            <th className='tg-0pky'>name</th>
            <th className='tg-0pky'>description</th>
            <th className='tg-0pky'>return param(s)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tg-0pky'>onSelect(dateString)</td>
            <td className='tg-0pky'>fires when date input value changes</td>
            <td className='tg-0pky'><strong>string :</strong> date in MM/dd/yyyy format</td>
          </tr>
        </tbody>
      </table>

      <div className = 'indent'>
        <p>example using <strong>useState:</strong></p>
        <CopyBlock
          text={onSelectCodeExample}
          {...CodeBlockDefaults}
        />
      </div>

      <h3>objects</h3>

      <table className='tg'>
        <thead className='tg-0pky'>
          <tr>
            <th className='tg-0pky'>name</th>
            <th className='tg-0pky'>description</th>
            <th className='tg-0pky'>default</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tg-0pky'>dateRange</td>
            <td className='tg-0pky'>minimum and maximum selectable dates</td>
            <td className='tg-0pky'>{JSON.stringify(defaultDateRange)}</td>
          </tr>
        </tbody>
      </table>

      <div className = 'indent'>
        <p>example</p>
        <CopyBlock
          text={dateRangeCodeExample}
          {...CodeBlockDefaults}
        />
      </div>

    </>
  )
}

export default DefaultDatePicker
