import React from 'react'

import Core from './Core'
import { defaultTheme as theme } from './theme'

export default {
  title: 'DatePicker',
  component: Core,
  argTypes: {
    inputId: {
      description: 'id for date input text',
      required: false,
      table: {
        defaultValue: {
          summary: 'a11y-date-input'
        }
      }
    },
    theme: {
      description: 'override for default theme',
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: "defaultTheme",
          detail: JSON.stringify(theme)
        }
      }
    },
    format: {
      description: '**not fully implemented** set as MM/dd/yyyy',
      type: {
        required: true
      },
      table: {
        defaultValue: {
          summary: 'MM/dd/yyyy'
        }
      },
      control: null
    },
    placeholder: {
      description: 'placeholder for date input text',
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: ''
        }
      }
    },
    formatHint: {
      description: 'format hint displayed below date input text',
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: ''
        }
      }
    },
    onSelect: {
      description: 'user selects a date',
      type: {
        required: false
      },
      table: {
        category: 'events',
        defaultValue: {
          summary: 'example',
          detail: 'const demoFunction = dateString => { }'
        }
      },
      control: null
    },
    dateRange: {
      description: 'min max values for date',
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: ""
        }
      }
    },
    onInvalidDate: {
      description: 'error in date input',
      detail: 'test',
      type: {
        required: false
      },
      table: {
        category: 'events',
        defaultValue: {
          summary: 'example',
          detail: `const onInvalidDate = (e) => { setError(e) }`
        }
      },
      control: null
    },
    initialDate: {
      description: '',
      type: {
        required: false
      },
      table: {
        defaultValue: {
          summary: ""
        }
      },
      control: null
    }
  }
}

const Template = (args) => <Core {...args} />

export const Default = Template.bind({})
Default.args = {
  inputId: 'pipeDr3am',
  theme,
  format: 'MM/dd/yyyy',
  placeholder: 'Enter a Date',
  formatHint: 'MM DD YYYY',
  onSelect: () => {},
  dateRange:{
    min: '08/02/2002',
    max: '08/31/2008'
  },
  onInvalidDate: () => {},
  initialDate: '03/03/2003'
}
const code =
`
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
/*
  e: {
    message: 'date outside of range',
    details: {
      dateRange: {
        max: '03/02/2025',
        min: '03/02/2000'
      },
      dateInput: '03/03/200'
    }
  }
*/
const onInvalidDate = (e) => {
  setError(e)
}
const setDateString = string => {
  // string is '03/02/2000' format
}
<DatePicker
  inputId='overrRideId'
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
`
Default.parameters = {
  docs: {
    source: {
      code
    }
  }
}