import NewsCategory from './NewsCategory';
import Profile from './Profile';
import SavedNews from './SavedNews';

const NewsHome = () => {
    return (
        <div>NewsHome
            <Profile></Profile>
            {/* <NewsCategory category='technology' /> */}
            {/*  <NewsCategory category='finance' /> */}
        </div>
    )
}

export default NewsHome