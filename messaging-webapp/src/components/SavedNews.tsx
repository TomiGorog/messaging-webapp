import { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/authContext';
import SavedNewsCard from './SavedNewsCard';

const SavedNews = () => {
    const { savedArticles } = useContext(AuthContext);

    useEffect(() => {
    }, [savedArticles]);

    return (
        <div>Saved Articles
            <>
                {
                    savedArticles.map((article: any) => {
                        for (let property in article) {
                            console.log(property)
                            return (
                                <SavedNewsCard articleId={property} title={article[property].title} link={article[property].link} image={article[property].image} />
                            )
                        }
                    })
                }
            </>
        </div>
    )
}

export default SavedNews