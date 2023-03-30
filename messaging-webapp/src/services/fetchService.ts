import { set, ref } from "firebase/database";
import { UUID } from "uuidjs";
import { database } from "../firebase/config";
import { savedArticleStructure } from "../interfaces";


export const fetchCategoryData = (category: string, setter: React.Dispatch<any>) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=${category}&language=en`).then(response => response.json())
        .then(data => {
            return setter(data)
        })
}

export const saveArticle = async ({ title, link, image, userId }: savedArticleStructure) => {
    const articleID = UUID.genV4();
    await set(ref(database, `users/${userId}/savedArticles/${articleID}`), {
        title: title,
        link: link,
        image: image
    });
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

export const deleteFromSavedArticles = async ({ title, link, image, userId, articleId }: savedArticleStructure) => {
    return await fetch(`${import.meta.env.VITE_DATABASEURL}/users/${userId}/savedArticles/${articleId}.json`, {
        method: "DELETE"
    }).then(resp => {
        console.log(resp)
    })
}