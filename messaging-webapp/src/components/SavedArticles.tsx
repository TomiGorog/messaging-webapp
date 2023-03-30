import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/authContext'
import { savedArticleStructure } from '../interfaces'
import { fetchSavedArticles } from '../services/fetchService'
import SavedArticleCard from './SavedArticleCard'

const SavedArticles = () => {
  const { userId, savedArticles } = useContext(AuthContext)

  const [articles, setArticles] = useState<savedArticleStructure[]>([])
  useEffect(() => {
    fetchSavedArticles(userId)
      .then((actualData) => setArticles(actualData));
    console.log(articles)
  }, [savedArticles])
  return (
    <div>SavedArticles:
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <ul>
        {articles.map(article => {

          return (

            <li key={article.articleId}>

              <SavedArticleCard title={article.title} link={article.link} image={article.image} articleId={article.articleId} />
            </li>
          )
        })}
      </ul>

    </div>
  )
}

export default SavedArticles