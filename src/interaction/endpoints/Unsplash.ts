import axios, { AxiosError } from "axios";

import BE_Topic from "./models/Topic";
import BE_Photo from './models/Photo';

import Hook from "../../ui/Hook";
import Topic from "../../ui/models/Topic";
import Photo from "../../ui/models/Photo";

import mapTopic from "./mappers/TopicMapper";
import mapPhotos from "./mappers/PhotoMapper";

class Unsplash implements Hook{
    private readonly BASE: string = 'https://api.unsplash.com'
    private readonly headers = {
        "Authorization": "Client-ID " + process.env.REACT_APP_API_KEY
    }
    async getTopics (page?: number, perPage?: number): Promise<Topic[]>{
        console.info(`Driver -> getTopics with ${page} & ${perPage}`);
        try{
            const response = await axios.get<BE_Topic[]>(`${this.BASE}/topics`, {headers: this.headers});
            return mapTopic(response?.data ?? []);
        }
        catch(e){
            throw Unsplash.processError(e);
        }
        // throw Error('Testing')
    }

    async getPhotos (topicId: string, page?: number, perPage?: number): Promise<Photo[]>{
        console.info(`Driver -> getPhotos with ${page} & ${perPage}`);
        try{
            const response = await axios.get<BE_Photo[]>(
                `${this.BASE}/topics/${topicId}/photos`, 
                {
                    headers: this.headers,
                    params: {
                        page,
                        per_page: perPage
                    }
                }
            );
            return mapPhotos(response?.data ?? []);
        }
        catch(e){
            throw Unsplash.processError(e)
        }
        // throw Error('Testing')
    }

    static processError (e: unknown) {
        console.info(e)
        if(e instanceof AxiosError){
            const data = e.response?.data;

            let error = "Unexpected error occurred";
            if(Array.isArray(data?.['errors'])){
                const errors: string[] | undefined = data?.['errors'];
                error = (errors??[]).reduce((accumulator, currentValue) => `${accumulator}\n${currentValue}`);
            }
            else if(typeof data === 'string'){
                error = data;
            }
            return Error(`${error}`);
        }
        return e
    }
}

export default Unsplash