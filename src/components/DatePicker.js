import React from 'react'

import * as S from './styles'

const Datepicker = ({ date, handleSelect }) => {
  const handleKeyPress = (e) => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      handleSelect()
    }
  }
  return (
    <S.DatePicker
      className='datepicker'
      tabIndex='0'
      onClick={handleSelect}
      onKeyPress={handleKeyPress}
      role='button'
      aria-label='Datepicker'
    >
      <S.Select>
        Select a date
      </S.Select>
      <S.Date aria-label='Selected date'>
        {date}
      </S.Date>
    </S.DatePicker>
  )
}
export default Datepicker
