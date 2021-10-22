import React from 'react';

import Core from './Core';

export default {
  title: 'Core',
  component: Core,
}

const Template = (args) => <Core {...args} />

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

const setDateString = date => {
  console.log('setting date string:', date)
}

const onInvalidDate = (e) => {
  console.log('setting error:', e)
}

export const AnotherTest = Template.bind({})
AnotherTest.args = {
  test: 'hello'
}

export const DevTest = Template.bind({})
DevTest.args = {
  inputId: 'test...',
  theme,
  format: 'MM/dd/yyyy',
  placeholder: 'Enter a Date',
  formatHint: 'MM DD YYYY',
  onSelect: setDateString,
  dateRange:{
    min: '08/02/2002',
    max: '08/31/2008'
  },
  onInvalidDate: onInvalidDate,
  initialDate: '03/03/2003'
}