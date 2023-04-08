import { articleToSave } from "../interfaces";


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
            let articleArray: articleToSave[] = []
            Object.keys(articles).forEach((article: string) => {
                articleArray.push({ articleId: article, ...articles[article] })
            });
            return articleArray
        })
}

export const findAlternativeImage = async (country: string) => {

    return await fetch(`https://flagcdn.com/en/codes.json`)
        .then(res => res.json())
        .then(res => {
            let alternative = "";
            Object.keys(res).forEach((key: string) => {
                let capitalized = country.charAt(0).toUpperCase() + country.slice(1)
                if (res[key] == capitalized) {
                    alternative = key
                }
            })
            return alternative
        })

}

