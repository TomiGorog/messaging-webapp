import { createContext } from "react";

export interface userContextType {
    id: string;
    savedArticles: {
        title: string,
        link: string,
        image?: string | undefined,
        userId?: string | null
        articleId?: string
    }
}
export const userContext = createContext({} as userContextType)