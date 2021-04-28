import userContext from 'context/UserContext'
import React, { useContext, useState } from 'react'
import { PostLogin } from 'services/postLogin'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(userContext)

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault()

    PostLogin({ username, password })
      .then(data => setUser(data))
  }

  return (
    <form className="form" onSubmit={handleLogin}>
      <h2>Puedes logearte!</h2>
      <p>Al loguearte, puedes ver tu puntuacion sea donde estes</p>

      <input
        onChange={handleChangeUsername}
        placeholder="Nombre de usuario"
        type="text"
        value={username}
      />

      <input
        onChange={handleChangePassword}
        placeholder="Increse una clave"
        type="password"
        value={password}
      />

      <button>Iniciar sesion</button>

      <a href="/">No tienes una cuenta?</a>
      <button type="button">Tambien puedes jugar sin registrarte</button>
    </form>
  )
}

export default LoginForm
