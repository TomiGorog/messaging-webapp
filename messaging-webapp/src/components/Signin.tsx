import React, { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
import { useForm } from '../hooks/useForm'

const Signin = () => {

  const {  handleLoginWithCredentials } = useContext(AuthContext)

  const { handleChange, pass, email } = useForm({
    initialState: {
      email: '',
      pass: ''
    }
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleLoginWithCredentials(pass, email)
  }


  return (
    <div className="container-auth">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="E-mail"
          onChange={handleChange}
          value={email}
        />
        <input
          name="pass"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={pass}
        />

        <div className="container-buttons">
          <button type="submit">Log In</button>
          
        </div>
      </form>
    </div>

  )
}

export default Signin