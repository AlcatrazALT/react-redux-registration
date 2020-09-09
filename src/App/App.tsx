import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { HomePage } from '../HomePage'
import { LoginPage } from '../LoginPage'
import { RegisterPage } from '../RegisterPage/RegisterPage'

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export { App }
