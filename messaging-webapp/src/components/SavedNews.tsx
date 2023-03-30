import React, { useContext } from 'react'
import { AuthContext } from '../contexts/authContext';
import StoryCard from './StoryCard';

const SavedNews = () => {
    const { savedArticles } = useContext(AuthContext);
    console.log(savedArticles);
    Object.keys(savedArticles).forEach((art: any) => {

    })

    savedArticles.forEach((article: any) => {
        console.log(article);
        for (let propery in article) {
            console.log(propery, "propery", article[propery]);
        }
    })
    return (
        <div>Saved Articles


            {savedArticles.forEach((article: any) => {
                console.log(article);
                for (let propery in article) {
                    console.log(propery, "propery", article[propery]);
                    return (
                        <StoryCard key={article.id} title={article[propery].title} link={article[propery].link} image={article[propery].image} />
                    )
                }
            })}


        </div>
    )
}

export default SavedNews