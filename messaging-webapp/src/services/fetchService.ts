import { set, ref, onValue, DataSnapshot } from "firebase/database";
import { UUID } from "uuidjs";
import { database } from "../firebase/config";
import { saveArticleStructure } from "../interfaces";


export const fetchCategoryData = (category: string, setter: React.Dispatch<any>) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=${category}&language=en`).then(response => response.json())
        .then(data => {
            return setter(data)
        })
}

export const saveArticle = async ({ title, link, image, userId }: saveArticleStructure) => {
    const articleID = UUID.genV4();
    await set(ref(database, `users/${userId}/savedArticles/${articleID}`), {
        title: title,
        link: link,
        image: image
    });
}

export const fetchSavedArticles = async (userId: string | null) => {
    
    const newsRef = ref(database, `users/${userId}/savedArticles/`)
    onValue(newsRef, (snapshot: DataSnapshot) => {
      const data = snapshot.val()
      console.log(data)
      return data
    })
  }