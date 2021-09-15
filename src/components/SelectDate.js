import React from 'react'

import * as S from './styles'

const SelectDate = ({ 
  date, 
  placeholder,
  handleSelect,
  hasSelected
}) => {
  const handleKeyPress = (e) => {
    const charCode = e.charCode
    if (charCode === 13 || charCode === 32) {
      handleSelect()
    }
  }
  return (
    <S.DatePicker
      tabIndex='0'
      onClick={handleSelect}
      onKeyPress={handleKeyPress}
      role='button'
      aria-label='Datepicker'
    >
      {!hasSelected && (
        <S.Select>
          {placeholder}
        </S.Select>
      )}
      
      {hasSelected && (
        <S.Date aria-label='Selected date'>
          {date}
        </S.Date>
      )}
    </S.DatePicker>
  )
}
export default SelectDate
