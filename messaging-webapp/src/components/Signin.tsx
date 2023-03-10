import React from 'react'
import { useForm } from '../hooks/useForm'

const Signin = () => {

const { handleChange, pass, email } = useForm({
  initialState: {
    email: '',
    pass: ''
  }
})

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
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
          <button type="button"> Google </button>
        </div>
      </form>
    </div>

  )
}

export default Signin