import { userConstants } from '../_constants'
import { userService } from '../_services'
import { alertActions } from './alert-actions'
import { history } from '../_helpers'

const login = (username: string, password: string, from: string) => {
  //action creators
  const request = user => {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  const success = user => {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  const failure = (error: string) => {
    return { type: userConstants.LOGIN_FAILURE, error }
  }

  return dispatch => {
    dispatch(request({ username }))
    userService.login(username, password).then(
      user => {
        dispatch(success(user))
        history.push(from)
      },
      error => {
        dispatch(failure(error))
        dispatch(alertActions.error(error))
      },
    )
  }
}

const logout = () => {
  userService.logout()
  return { type: userConstants.LOGOUT }
}

const register = user => {
  const request = user => {
    return { type: userConstants.REGISTER_REQUEST, user }
  }
  const success = user => {
    return { type: userConstants.REGISTER_SUCCESS, user }
  }
  const failure = (error: string) => {
    return { type: userConstants.REGISTER_FAILURE, error }
  }

  return dispatch => {
    dispatch(request(user))
    userService.register(user).then(
      user => {
        dispatch(success(user))
        history.push('/login')
        dispatch(alertActions.success('Registration successful'))
      },
      error => {
        dispatch(failure(error))
        dispatch(alertActions.error(error))
      },
    )
  }
}

const getAll = () => {
  const request = () => {
    return { type: userConstants.GET_ALL_REQUEST }
  }
  const success = users => {
    return { type: userConstants.GET_ALL_SUCCESS, users }
  }
  const failure = (error: string) => {
    return { type: userConstants.GET_ALL_FAILURE, error }
  }

  return dispatch => {
    dispatch(request())
    userService.getAll().then(
      users => dispatch(success(users)),
      error => dispatch(error(error)),
    )
  }
}

// prefixed function name with underscore because delete is a reserved word in js
const _delete = (id: string) => {
  const request = id => {
    return { type: userConstants.DELETE_REQUEST }
  }
  const success = id => {
    return { type: userConstants.DELETE_SUCCESS, id }
  }
  const failure = (id: string, error: string) => {
    return { type: userConstants.DELETE_FAILURE, error }
  }

  return dispatch => {
    dispatch(request(id))
    userService.delete(id).then(
      user => dispatch(success(id)),
      error => dispatch(failure(id, error)),
    )
  }
}

export const userActions = {
  login,
  logout,
  register,
  getAll,
  delete: _delete,
}
