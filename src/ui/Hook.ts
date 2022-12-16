import Topic from "./models/Topic"
import Photo from "./models/Photo"

type Hook = {
    getTopics: (signal: AbortSignal, page?: number, perPage?: number) => Promise<Topic[]>
    getPhotos: (signal: AbortSignal, topicId: string, page?: number, perPage?: number) => Promise<Photo[]>
}

export default Hook