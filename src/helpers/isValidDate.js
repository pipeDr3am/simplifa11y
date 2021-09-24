import { clearWhiteSpace } from "./strOps"

export const isValidDate = ({dateRange, str}) => {
  if (!dateRange) {
    return true
  }

  console.log('checking date:', {
    dateRange,
    strMod
  })

  let isValid = false
  const {min, max} = dateRange
  const strMod = clearWhiteSpace({str})

  try {

    let fDate,lDate,cDate
    fDate = Date.parse(min)
    lDate = Date.parse(max)
    cDate = Date.parse(strMod)
    isValid = (cDate <= lDate && cDate >= fDate)

  } catch(e) {
    console.error(`isValidDate err: ${e.message}`)
  }

  return isValid
}
