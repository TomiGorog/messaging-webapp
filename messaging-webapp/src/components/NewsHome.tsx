import NewsCategory from './NewsCategory';
import SavedNews from './SavedNews';

const NewsHome = () => {
    return (
        <div>NewsHome
            <NewsCategory category='technology' />
            {/*  <NewsCategory category='finance' /> */}
        </div>
    )
}

export default NewsHome