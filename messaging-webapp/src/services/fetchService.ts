import { articleToSave } from "../interfaces";





export const fetchCategoryData = (category: string, newsSetter: React.Dispatch<any>, nextPageSetter: React.Dispatch<any>) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=${category}&language=en`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            nextPageSetter(data.nextPage)
            return newsSetter(data.results)
        })
}

export const fetchNextPage = (category: string, newsSetter: React.Dispatch<any>, nextPageIdSetter: React.Dispatch<any>, pageToLoadId: React.Dispatch<any>) => {
    console.log(`https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=${category}&language=en&page=${pageToLoadId}`)
    fetch(`https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=${category}&language=en&page=${pageToLoadId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            nextPageIdSetter(data.nextPage)
            return newsSetter((prev: any) => [...prev, ...data.results])
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
    const capitalized = capitalizeWords(country)
    console.log(capitalized)
    return await fetch(`https://flagcdn.com/en/codes.json`)
        .then(res => res.json())
        .then((res: any) => {
            let alternative = "";
            Object.keys(res).forEach((key: string) => {

                if (res[key] == capitalized) {
                    alternative = key
                }
            })
            return alternative
        })

}

function capitalizeWords(str: string) {
    if (str == "United States of America") {
        str = "United States"
    }
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}