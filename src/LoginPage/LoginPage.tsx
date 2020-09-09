import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export const LoginPage: React.FC = () => {
  const [inputs, setInputs] = useState({
    username: '',
    password: '',
  })

  const { username, password } = inputs

  //const loggingIn = useSelector(state => state.authentication.loggingIn)
  const loggingIn = true
  //const dispatch = useDispatch()
  const location = useLocation()

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputs(inputs => ({ ...inputs, [name]: value }))
  }

  return (
    <div className="col-lg-8 offset-lg-2">
      <h2>Login</h2>
      <form name="form">
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            className={'form-control' + (submitted && !username ? ' is-invalid' : '')}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            className={'form-control' + (submitted && !password ? ' is-invalid' : '')}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-primary">
            {loggingIn && <span className="spinner-border spinner-border-sm mr-1"></span>}
            Login
          </button>
          <Link to="/register" className="btn btn-link">
            Register
          </Link>
        </div>
      </form>
    </div>
  )
}
