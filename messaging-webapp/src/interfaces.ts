export interface articleToSave {
    title: string,
    link: string,
    image?: string | null,
    userId?: string | null
    description: string,
}

export interface savedArticleCorrect {
    [articleId: string]: {
        title: string,
        link: string,
        image?: string | undefined | null,

    }
}