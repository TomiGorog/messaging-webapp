import NewsCategory from './NewsCategory';
import SavedArticles from './SavedArticles';

const NewsHome = () => {
    return (
        <div>NewsHome
            <NewsCategory category='technology' />
            <NewsCategory category='finance' />
            <SavedArticles />
        </div>
    )
}

export default NewsHome