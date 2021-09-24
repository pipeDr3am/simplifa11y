import { clearWhiteSpace } from './strOps'

export const isValidDate = ({ dateRange, str }) => {
  if (!dateRange) {
    return true
  }

  let isValid = false
  const { min, max } = dateRange
  const strMod = clearWhiteSpace({ str })

  try {
    const fDate = Date.parse(min)
    const lDate = Date.parse(max)
    const cDate = Date.parse(strMod)
    isValid = (cDate <= lDate && cDate >= fDate)
  } catch (e) {
    console.error(`isValidDate err: ${e.message}`)
  }

  return isValid
}
