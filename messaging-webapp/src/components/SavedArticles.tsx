import { getDatabase, onValue, ref, } from 'firebase/database'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/authContext'
import { database } from '../firebase/config'
import { savedArticleStructure } from '../interfaces'
import { fetchSavedArticles } from '../services/fetchService'
import SavedArticleCard from './SavedArticleCard'
import StoryCard from './StoryCard'

const SavedArticles = () => {
  const { userId } = useContext(AuthContext)

  const [articles, setArticles] = useState<savedArticleStructure[]>([])
  useEffect(() => {
    fetchSavedArticles(userId)
      .then((actualData) => setArticles(actualData));

  }, [])
  return (
    <div>SavedArticles:
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {articles.map(article => {
        return (
          <ul>
            <SavedArticleCard  title={article.title} link={article.link} image={article.image} articleId={article.articleId} />
          </ul>
        )
      })}

      {/* {articles.map(article => {
        console.log(article)
        // return <li>{article}</li>
      })} */}
    </div>
  )
}

export default SavedArticles