import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'

type StoryCardProps = {
    title: string,
    link: string,
    image: string | undefined | null,
    description: string
}
const StoryCard = ({ title, link, image, description }: StoryCardProps) => {

    const { saveArticle } = useContext(AuthContext)
    return (
        <>
            <div>

                {image && <img src={image} alt={title} />}
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" >Read</a>
                <button onClick={() => saveArticle({ title, link, image, description })}>Save</button>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default StoryCard