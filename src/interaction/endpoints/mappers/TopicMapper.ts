import BE_Topic from "../models/Topic"
import Topic from "../../../ui/models/Topic"

const map = (be: BE_Topic[]): Topic[] => {
    return be.map(({ 
        id, title, total_photos, 
        cover_photo: { 
            id: pId, description, color, blur_hash, 
            urls: { regular, full }, 
            user: { id: uId, first_name, last_name, portfolio_url }
        }
    }) => {
        return {
            id: id,
            name: title,
            amountOfPhotos: total_photos,
            coverPhoto: {
                id: pId,
                description: description,
                averageColor: color,
                blurHash: blur_hash,
                url: regular,
                urlLarge: full,
                author: {
                    id: uId,
                    name: first_name + last_name,
                    portfolioUrl: portfolio_url,
                }
            },
        };
    });
}

export default map