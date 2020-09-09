import React, { Component } from 'react'
import { Route, Redirect, RouteProps, RouteComponentProps } from 'react-router-dom'

interface Props extends RouteProps {}

const PrivateRoute: React.FC<Props> = ({ location, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props: RouteComponentProps) => {
        if (!localStorage.getItem('user')) {
          return <Redirect to={{ pathname: 'login', state: { from: location } }} />
        }
        return <Component {...props} />
      }}
    />
  )
}

export { PrivateRoute }
