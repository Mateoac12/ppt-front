import LoginForm from 'components/LoginForm'
import userContext from 'context/UserContext'
import React, { useContext } from 'react'
import './index.css'

const Login = () => {
  const { user } = useContext(userContext)

  return (
    <section className="login-form">
      {
        !Object.keys(user).length
          ? <LoginForm />
          : null
      }
    </section>
  )
}

export default Login