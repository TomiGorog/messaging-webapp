import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/authContext'

type Props = {}

const ProtectedRoutes = (props: Props) => {
    const { status, userId } = useContext(AuthContext)

    return (status === "authenticated" && userId) ? <Outlet /> : <Navigate to="/" />
}

export default ProtectedRoutes