import { compareAsc } from "date-fns"

export const getDefaultDate = ({dateRange}) => {
  let returnDate = new Date()
  try {
    if (dateRange) {
      const compareCurrentAndMaxDate = compareAsc(new Date(), new Date(dateRange.max))
      if ( compareCurrentAndMaxDate === 1 ) {
        // cur date is after max
        returnDate = new Date(dateRange.max)
      } 
    }
  } catch(e) {
    console.error(e.message)
  }
  return returnDate
}