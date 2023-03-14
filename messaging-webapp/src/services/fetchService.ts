export const fetchCategoryData = (category: string, setter: React.Dispatch<any>) => {
    fetch(`https://newsdata.io/api/1/news?apikey=${import.meta.env.VITE_NEWSDATA_API_KEY}&q=${category}&language=en`).then(response => response.json())
        .then(data => {
            return setter(data)
        })
}