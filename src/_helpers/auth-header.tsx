export const authHeader = (): Record<string, string> => {
  //return auth header with jwt token
  const userItem = localStorage.getItem('user')

  if (userItem === null) {
    return {}
  } else {
    const user = JSON.parse(userItem)
    return { Authorization: 'Bearer ' + user.token }
  }
}
