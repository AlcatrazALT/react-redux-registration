import { alertConstants } from '../_types'

const success = (message: string) => {
  return { type: alertConstants.SUCCESS, message }
}

const error = (message: string) => {
  return { type: alertConstants.ERROR, message }
}

const clear = () => {
  return { type: alertConstants.CLEAR }
}

export const alertActions = {
  success,
  error,
  clear,
}
