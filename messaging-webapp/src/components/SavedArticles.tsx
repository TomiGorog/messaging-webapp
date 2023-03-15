import { collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { db } from '../firebase/config'

const SavedArticles = () => {

    const [articles, setArticles] = useState([])
    const articleCollectionRef  = collection(db, 'users')
    useEffect(() => {
      const getArticles = async () => {
        const data = await getDocs(articleCollectionRef)
        data.forEach((doc) => {
          console.log(`${doc.id} => ${doc.data()}`);
        });
      }

      getArticles()
    }, [])
  return (
    <div>SavedArticles</div>
  )
}

export default SavedArticles