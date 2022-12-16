import BE_Photo from "../models/Photo";
import Photo from "../../../ui/models/Photo";

const map = (be: BE_Photo[]): Photo[] => {
    return be.map(({ id, description, color, blur_hash, urls: { regular, full }, user: { id: uId, first_name, last_name, portfolio_url } }) => {
     return {
        id: id,
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
     };      
    })
}

export default map