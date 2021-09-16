import { format as fnsFormat } from 'date-fns'

export const formatDate = ({date, format}) => {
  try{
    const [ month, day, year ] = date.substr(0, 10).split('/')
    console.log('formatDate:', {
      month,day,year
    })
    return fnsFormat(new Date(year, (month-1), day), format)
  } catch(e) {
    console.error(e.message)
  }
}

export const dateFromString = ({date}) => { 
  try {
    console.log('returning date from str:', date)
    const [ month, day, year ] = date.substr(0, 10).split('/')
    console.log('dateFromString:', {
      month,day,year
    })
    return new Date(year, (month-1), day)
  } catch(e) {
    console.error(e.message)
  }
}