import { savedArticleStructure } from "../interfaces";


export const fetchCategoryData = (category: string, setter: React.Dispatch<any>) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=${category}&language=en`).then(response => response.json())
        .then(data => {
            return setter(data)
        })
}




export const fetchSavedArticles = async (userId: string | null) => {

    return await fetch(`${import.meta.env.VITE_DATABASEURL}/users/${userId}/savedArticles.json`)
        .then(resp => resp.json())
        .then(articles => {
            let articleArray: savedArticleStructure[] = []
            Object.keys(articles).forEach((article: string) => {
                articleArray.push({ articleId: article, ...articles[article] })
            });
            return articleArray
        })
}

