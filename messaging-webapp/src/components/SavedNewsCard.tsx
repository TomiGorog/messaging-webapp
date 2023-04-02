import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext';

type newsCardProps = {
    title: string,
    link: string,
    image: string | undefined | null,
    articleId: string,
}
const SavedNewsCard = ({
    articleId,
    title,
    image,
    link
}: newsCardProps) => {

    const { deleteFromSavedArticles, userId } = useContext(AuthContext)
    return (
        <>
            <div>

                {image && <img src={image} alt={title} />}
                <h3>{title}</h3>
                <a href={link} target="_blank" >{link}</a>
                <button onClick={() => deleteFromSavedArticles(userId, articleId)} >Remove</button>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default SavedNewsCard