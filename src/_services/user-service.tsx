import { authHeader } from '../_helpers'

const config = {
  apiUrl: 'http://localhost:4000',
}

const logout = () => {
  localStorage.removeItem('user')
}

const handleResponse = async (response: Response) => {
  const text = await response.text()
  const data = text && JSON.parse(text)
  if (!response.ok) {
    if (response.status === 401) {
      logout()
      location.reload(true)
    }

    const error = (data && data.message) || response.statusText
    return Promise.reject(error)
  }
  return data
}

const login = async (username: string, password: string) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  }

  const response = await fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
  const user = await handleResponse(response)
  localStorage.setItem('user', JSON.stringify(user))
  return user
}

const getAll = async () => {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: authHeader(),
  }
  const response = await fetch(`${config.apiUrl}/users`, requestOptions)
  return handleResponse(response)
}

const getById = async (id: string) => {
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: authHeader(),
  }
  const response = await fetch(`${config.apiUrl}/users/${id}`, requestOptions)
  return handleResponse(response)
}

const register = async (user: string) => {
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(`${config.apiUrl}/users/register`, requestOptions)
  return handleResponse(response)
}

const update = async (user: string) => {
  const requestOptions: RequestInit = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }

  const response = await fetch(`${config.apiUrl}/users/${user.id}`, requestOptions)
  return handleResponse(response)
}

const _delete = async (id: string) => {
  const requestOptions: RequestInit = {
    method: 'DELETE',
    headers: authHeader(),
  }

  const response = await fetch(`${config.apiUrl}/users/${id}`, requestOptions)
  return handleResponse(response)
}

export const userService = {
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
}
