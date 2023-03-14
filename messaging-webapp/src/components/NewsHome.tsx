import { useEffect, useState } from 'react'
import { fetchCategoryData } from '../services/fetchService';
import NewsCategory from './NewsCategory';

const NewsHome = () => {

    const [news, setNews] = useState<any>(null);
    
        return (
        <div>NewsHome
            <NewsCategory category='technology'/>
            
            

        </div>
    )
}

export default NewsHome