import React, { Component } from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

interface Props extends RouteProps {}

const PrivateRoute: React.FC<Props> = ({ ...rest }) => {
  debugger
  return (
    <Route
      {...rest}
      render={props => (localStorage.getItem('user') === null ? <Redirect to="/login" /> : <Component {...props} />)}
    />
  )
}

export { PrivateRoute }
