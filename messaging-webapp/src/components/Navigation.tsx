import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
import { Link } from 'react-router-dom'

type Props = {}

const Navigation = (props: Props) => {
    const { userId, handleLogOut } = useContext(AuthContext)
    return (
        <div>Navigation
            <button onClick={() => {
                handleLogOut()
            }}>Logout</button>
            <Link to={"saved"}
                color="primary" rel="noreferrer noreferrer">Saved News</Link>
        </div>
    )
}

export default Navigation