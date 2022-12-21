import Topic from "./models/Topic"
import Photo from "./models/Photo"

type Hook = {
    getTopics: (page?: number, perPage?: number) => Promise<Topic[]>
    getPhotos: (topicId: string, page?: number, perPage?: number) => Promise<Photo[]>
}

export default Hook