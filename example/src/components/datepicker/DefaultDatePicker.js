import { useState } from 'react'
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

const installCode = 'yarn add @pipedr3am/simplifa11y -s'
const importCode = 'import { DatePicker } from \'simplifa11y\''

const code =
`<DatePicker
  format='MM/dd/yyyy'
  placeholder='Enter a Date'
  formatHint='MM DD YYYY'
  onInvalidDate={e => console.log('onInvalidDate: ', e)}
/>
`

const onSelectCodeExample =
`import { useState } from 'react'

const DevComponent = () => {
  const [dateValue, setDateValue] = useState('')
  return (
    <DatePicker
    onSelect={setDateValue}
  )
}
/>
`

const onSelectCodeExample2 =
`const DevComponent = () => {
  const onSelect = string => {
    console.log(\`date-string selected: \$\{string\}\`)
  }
  return (
    <DatePicker
    onSelect={onSelect}
  )
}
/>
`

const dateRangeCodeExample =
`<DatePicker
  dateRange={{
    min: '08/02/2002',
    max: '08/31/2008'
  }}
/>
`

const invalidDateExample = {
  message: 'date outside of range',
  details: {
    dateInput: '03/'
  }
}

const invalidDateCodeExample =
`// will fire on all keydowns
const onInvalidDate = e => {
  console.log(e.message) // 'date outside of range'
  console.log(e.details.dateInput) // whatever is in input box at time i.e. '03/' or '03/2' etc.
  console.log(e.details.dateRange) // { min, max } if defined or undefined if not
}
`

const defaultDateRange = {
  min: '01/01/0000',
  max: '01/01/9999'
}

const themeExample =
`
const primaryDark = '#1E4147'
const activeBg = '#AAC789'

const defaultTheme = {
  calendar: {
    border: \`2px solid \${primaryDark}\`,
    margin: '.3em 0 0 .3em',
    background: '#FFFFFF',
    zIndex: 1,
    icon: {
      color: \`\${primaryDark}\`,
      backgroundColor: '#FFFFFF',
      border: '1px solid #CC0000',
      borderLeft: '0',
      padding: '.5em 20px 0 20px',
      width: 'auto',
      height: 'auto'
    },
    heading: {
      color: '#FFFFFF',
      backgroundColor: \`\${primaryDark}\`
    },
    days: {
      titles: {
        color: \`\${primaryDark}\`
      },
      selected: {
        backgroundColor: \`\${activeBg}\`
      },
      hover: {
        backgroundColor: \`\${activeBg}\`
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
      height: 'auto',
      outline: '1px solid #333',
      hover: {
        outline: '2px solid #999'
      }
    },
    input: {
      fontSize: '1em',
      backgroundColor: 'transparent',
      padding: '0 0 0 10px',
      margin: '0'
    },
    inputHint: {
      fontSize: '.8em',
      color: '#1E4147',
      padding: '0 0 0 10px'
    }
  }
}

<DatePicker
  theme={defaultTheme}
/>
`

const DefaultDatePicker = () => {
  const onInvalidDate = e => {
    console.log('onInvalidDate:', e)
  }

  return (
    <>

      <div className='component-demo'>
        <h1>DatePicker</h1>
      </div>

      <hr />
      <h2>quick-start</h2>
      <hr />

      <p>install</p>
      <CopyBlock
        text={installCode}
        {...CodeBlockDefaults}
      />

      <p>import</p>
      <CopyBlock
        text={importCode}
        {...CodeBlockDefaults}
      />

      <hr />
      <h2>minimal example</h2>
      <hr />
      <br />

      <DatePicker
        format='MM/dd/yyyy'
        placeholder='Enter a Date'
        formatHint='MM DD YYYY'
        onInvalidDate={onInvalidDate}
      />

      <br />

      <CopyBlock
        text={code}
        {...CodeBlockDefaults}
      />

      <hr />
      <h2>parameters [* = required]</h2>
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
            <td className='tg-0pky'>format*</td>
            <td className='tg-0pky'>!!! NOT IMPLEMENTED !!! - pass as `MM/dd/yyyy` for now</td>
            <td className='tg-0pky' />
          </tr>
          <tr>
            <td className='tg-0pky'>placeholder</td>
            <td className='tg-0pky'>placeholder for date input text field</td>
            <td className='tg-0pky'>&lt;empty string&gt;</td>
          </tr>
          <tr>
            <td className='tg-0pky'>formatHint</td>
            <td className='tg-0pky'>hint displayed below date input text field</td>
            <td className='tg-0pky'>&lt;empty string&gt;</td>
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
            <th className='tg-0pky'>example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tg-0pky'>onSelect(dateString)</td>
            <td className='tg-0pky'>fires when valid date input is selected or entered</td>
            <td className='tg-0pky'><strong>string :</strong> date in MM/dd/yyyy format</td>
            <td className='tg-0pky'>01/01/1986</td>
          </tr>
        </tbody>
      </table>

      <div className='indent'>
        <p>example using <strong>useState:</strong> (recommended)</p>
        <CopyBlock
          text={onSelectCodeExample}
          {...CodeBlockDefaults}
        />
      </div>

      <div className='indent'>
        <p>example using basic override</p>
        <CopyBlock
          text={onSelectCodeExample2}
          {...CodeBlockDefaults}
        />
      </div>

      <br />

      <table className='tg'>
        <thead className='tg-0pky'>
          <tr>
            <th className='tg-0pky'>name</th>
            <th className='tg-0pky'>description</th>
            <th className='tg-0pky'>return param(s)</th>
            <th className='tg-0pky'>example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tg-0pky'>onInvalidDate(e)*</td>
            <td className='tg-0pky'>fires whenever date input is invalid</td>
            <td className='tg-0pky'><strong>object</strong></td>
            <td className='tg-0pky'>{JSON.stringify(invalidDateExample)}</td>
          </tr>
        </tbody>
      </table>

      <div className='indent'>
        <p>example using basic override</p>
        <CopyBlock
          text={invalidDateCodeExample}
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

      <div className='indent'>
        <p>example</p>
        <CopyBlock
          text={dateRangeCodeExample}
          {...CodeBlockDefaults}
        />
      </div>

      <hr />
      <h2>theming</h2>
      <hr />

      <div className='indent'>
        <p>example</p>
        <CopyBlock
          text={themeExample}
          {...CodeBlockDefaults}
        />
      </div>

    </>
  )
}

export default DefaultDatePicker
