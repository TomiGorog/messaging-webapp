import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'

type Props = {}

const Navigation = (props: Props) => {
    const { userId, handleLogOut } = useContext(AuthContext)
    return (
        <div>Navigation
            <button onClick={() => {
                handleLogOut()
            }}>Logout</button>
        </div>
    )
}

export default Navigation