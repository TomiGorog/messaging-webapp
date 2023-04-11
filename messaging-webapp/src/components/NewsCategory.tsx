import { useEffect, useState } from 'react'
import { fetchCategoryData, fetchNextPage } from '../services/fetchService';
import StoryCard from './StoryCard';
type Props = {
    category: string
}
const NewsCategory = ({ category }: Props) => {
    const [news, setNews] = useState<any>(null);
    const [nextPageId, setNextPageId] = useState<any>(null)
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        fetchCategoryData(category, setNews, setNextPageId)
    }, [])

    console.log(news)

    return (
        <div>{category} news
            {news &&
                <ul >
                    {news.slice(startIndex, startIndex + 5).map((story: any, index: number) => {
                        return <StoryCard key={index} title={story.title} link={story.link} image={story.image_url} description={story.description}></StoryCard>

                    })}
                </ul>
            }
            <button onClick={() => {

                fetchNextPage(category, setNews, setNextPageId, nextPageId)
                setStartIndex(startIndex + 5);
            }}>Arrow next</button>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

export default NewsCategory