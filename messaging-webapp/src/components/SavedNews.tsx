import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/authContext';
import StoryCard from './StoryCard';

const SavedNews = () => {
    const { savedArticles } = useContext(AuthContext);

    useEffect(() => {
    }, [savedArticles]);

    return (
        <div>Saved Articles
            <>
                {
                    savedArticles.map((article: any) => {
                        for (let propery in article) {
                            return (
                                <StoryCard key={propery} title={article[propery].title} link={article[propery].link} image={article[propery].image} />
                            )
                        }
                    })
                }
            </>
        </div>
    )
}

export default SavedNews