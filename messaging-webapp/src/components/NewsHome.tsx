import { useEffect, useState } from 'react'

const NewsHome = () => {

    const [news, setNews] = useState<any>(null);
    useEffect(() => {
        fetch(`https://content.guardianapis.com/tags?q=Tech&api-key=${import.meta.env.VITE_GUARDIAN_API_KEY}`).then(response => response.json())
            .then(data => {
                return setNews(data.response)
            })
        console.log(news)
    }, [])
    return (
        <div>NewsHome
            {news && 
            <ul>
                {news.results.map((story: any) => {
                    return <li key={story.id}>{story.id}</li>

                })}
            </ul>
}
        </div>
    )
}

export default NewsHome