import { getDatabase, onValue, ref,  } from 'firebase/database'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/authContext'
import { database } from '../firebase/config'
import { fetchSavedArticles } from '../services/fetchService'

const SavedArticles = () => {
  const { userId } = useContext(AuthContext)

  const [articles, setArticles] = useState([])
  useEffect(() => {
    fetchSavedArticles(userId).then(data => {
      console.log(data)
      // setArticles(data)
    })
  }, [])
  return (
    <div>SavedArticles</div>
  )
}

export default SavedArticles