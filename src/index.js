import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react')
  axe(React, ReactDOM, 1000)
}

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}
