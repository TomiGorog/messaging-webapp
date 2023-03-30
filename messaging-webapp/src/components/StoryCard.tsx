import React, { useContext } from 'react'
import { AuthContext } from '../contexts/authContext'

type StoryCardProps = {
    title: string,
    link: string,
    image: string | undefined | null
}
const StoryCard = ({ title, link, image }: StoryCardProps) => {

    const { saveArticle } = useContext(AuthContext)
    return (
        <>
            <div>

                {image && <img src={image} alt={title} />}
                <h3>{title}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
                <button onClick={() => saveArticle({ title, link, image })}>Save</button>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
        </>
    )
}

export default StoryCard