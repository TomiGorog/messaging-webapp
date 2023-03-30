import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
import { saveArticle } from '../services/fetchService';

type Props = {
  link: string,
  title: string,
  image: string
}
const StoryCard = ({ title, link, image }: Props) => {
  const { userId, saveArticleContext } = useContext(AuthContext)

  return (
    <div>
      <h3>{title}</h3>
      <img src={image}></img>
      <a href={link} target="_blank" >Read full story</a>
      <button onClick={() => saveArticleContext({ title, link, image, userId })}>Save for later</button>
    </div>
  )
}

export default StoryCard