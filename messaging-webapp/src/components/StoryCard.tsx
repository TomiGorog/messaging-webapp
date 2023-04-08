import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/authContext'
import { findAlternativeImage } from '../services/fetchService'

type StoryCardProps = {
    title: string,
    link: string,
    image: string | undefined | null,
    description: string,
    country: string[]
}
const StoryCard = ({ title, link, image, description, country }: StoryCardProps) => {

    const { saveArticle } = useContext(AuthContext)
    const [altImage, setAltImage] = useState<string>("")
    useEffect(() => {
        if (image === undefined || image === null || image === '') {
            findAlternativeImage(country[0])
                .then((key) => {
                    key ? setAltImage(`https://flagcdn.com/160x120/${key}.png`) : image && setAltImage(image)
                })
        }
    }, [])

    return (
        <>
            <div>

                <img src={image ? image : altImage} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" >Read</a>
                <button onClick={() => {
                    let article
                    if (image) {
                        article = { title, description, image, link, country: country[0] }
                    } else {
                        article = { title, description, image: altImage, link, country: country[0] }
                    }
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