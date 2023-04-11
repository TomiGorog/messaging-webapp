import { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'
import typewriter from '../assets/images/typewriter.jpg'


type StoryCardProps = {
    title: string,
    link: string,
    image: string | undefined,
    description: string,
}
const StoryCard = ({ title, link, image, description }: StoryCardProps) => {

    const { saveArticle } = useContext(AuthContext)

    return (
        <>
            <div>
                <img src={image ? image : typewriter} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" >Read</a>
                <button onClick={() => {
                    let article = { title, description, image, link }
                    saveArticle(article)
                }}>Save</button>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default StoryCard