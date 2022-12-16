import Author from "./Author"

type Photo = {
    id: string
    description?: string
    averageColor: string
    blurHash?: string
    url: string,
    urlLarge: string,
    author: Author,
}

export default Photo