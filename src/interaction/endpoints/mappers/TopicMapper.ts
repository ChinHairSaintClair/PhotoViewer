import BE_Topic from "../models/Topic"
import Topic from "../../../ui/models/Topic"

const map = (be: BE_Topic[]): Topic[] => {
    return be.map(({ id, title, total_photos }) => {
        return {
            id: id,
            name: title,
            amountOfPhotos: total_photos
        };
    });
}

export default map