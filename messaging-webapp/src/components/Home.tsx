import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"
import NewsHome from "./NewsHome"

export const HomePage = () => {
  const { userId, handleLogOut } = useContext(AuthContext)
  
  return (
    <section>
      <h5>Your ID is: <span>{userId}</span></h5>
      <button onClick={handleLogOut}>Log out</button>
      <NewsHome />
    </section>
  )
}