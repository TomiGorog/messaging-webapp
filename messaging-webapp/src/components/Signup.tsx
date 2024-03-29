import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext'
import { useForm } from '../hooks/useForm'

const Signup = () => {
    const { handleRegisterWithCredentials } = useContext(AuthContext)
    const navigate = useNavigate()
    const { handleChange, pass, email } = useForm({
        initialState: {
            email: '',
            pass: ''
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleRegisterWithCredentials(pass, email).then(res => {
            res ? navigate('/home') : navigate('/')
        })
    }
    return (
        <div className="container-auth">
            <h2>Create an account</h2>

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
                    <button type="submit">Sign up</button>
                </div>
            </form>
        </div>
    )
}

export default Signup