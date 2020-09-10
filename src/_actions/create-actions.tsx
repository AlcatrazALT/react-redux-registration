import { Action } from 'redux'

interface RAction<T> extends Action<string> {
  payload: T
}

export const createAction = <T,>(type: string) => {
  return (request: T): RAction<T> => {
    return {
      type: type,
      payload: request,
    }
  }
}

export const createEmptyAction = (type: string) => () => createAction<undefined>(type)(undefined)
// => Generate example
// const loginRequestAction = (request: LoginRequest): RAction<LoginRequest> => ({
//   type: LOGIN_REQUEST_ACTION,
//   payload: request,
// })
