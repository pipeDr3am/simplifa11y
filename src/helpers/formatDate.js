import { format as fnsFormat } from 'date-fns'

export const formatDate = ({date, format}) => {
  const [ year, month, day ] = date.substr(0, 10).split('-')
  return fnsFormat(new Date(year, (month-1), day), format)
}

export const dateFromString = ({date}) => { 
  console.log('returning date from str:', date)
  const [ year, month, day ] = date.substr(0, 10).split('-')
  return new Date(year, (month-1), day) 
}