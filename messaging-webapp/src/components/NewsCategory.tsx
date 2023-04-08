import { useEffect, useState } from 'react'
import { fetchCategoryData } from '../services/fetchService';
import StoryCard from './StoryCard';
type Props = {
    category: string
}
const NewsCategory = ({ category }: Props) => {
    const [news, setNews] = useState<any>(null);
    useEffect(() => {
        fetchCategoryData("technology", setNews)
    }, [])
    return (
        <div>{category} news
            {news &&
                <ul >
                    {news.results.map((story: any, index: number) => {
                        return <StoryCard key={index} title={story.title} link={story.link} image={story.image_url} description={story.description} country={story.country}></StoryCard>

                    })}
                </ul>
            }
        </div>
    )
}

export default NewsCategory