import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'

const SavedArticles = () => {

    const [articles, setArticles] = useState([])
    useEffect(() => {
      
    }, [])
  return (
    <div>SavedArticles</div>
  )
}

export default SavedArticles