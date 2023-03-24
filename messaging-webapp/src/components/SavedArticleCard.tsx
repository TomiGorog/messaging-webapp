import { useContext } from "react"
import { AuthContext } from "../contexts/authContext"
import { deleteFromSavedArticles } from "../services/fetchService"

type Props = {
    link: string,
    title: string,
    image: string | undefined,
    articleId: string | undefined
}
const SavedArticleCard = ({ title, link, image, articleId }: Props) => {
    const { userId } = useContext(AuthContext)
    return (
        <div key={articleId}>
            <h3>{title}</h3>
            <img src={image}></img>
            <a href={link} target="_blank" >Read full story</a>
            <button onClick={() => deleteFromSavedArticles({ title, link, image, userId, articleId })}>Delete from saved</button>
        </div>
    )
}

export default SavedArticleCard