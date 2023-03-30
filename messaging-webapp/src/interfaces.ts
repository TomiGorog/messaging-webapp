export interface savedArticleStructure {
    title: string,
    link: string,
    image?: string | undefined,
    userId?: string | null
    articleId?: string
}

export interface savedArticleCorrect {
    [articleId: string]: {
        title: string,
        link: string,
        image?: string | undefined,
    }
}