import './Topic.css'
import Info from "../../../models/Topic";
import { useState } from 'react';

type Props = { info: Info, onClick: (id: string) => void }
const Topic = ({ info: { id, name, amountOfPhotos, coverPhoto: { description, averageColor, url, } }, onClick }: Props) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a className='topic' href='#' onClick={() => onClick(id)}>
        <h2 className="topic_title">{name}</h2>
        <div className='topic_cover_photo' 
          style={{
            position: 'absolute',
            backgroundColor: averageColor, 
            visibility: isLoaded ? 'hidden' : 'visible'
          }}
        />
        <img
          onLoad={() => setIsLoaded(true)}
          className='topic_cover_photo selector'
          alt={description??'alt'} 
          src={url}
          style={{ visibility: isLoaded ? 'visible' : 'hidden' }}
        />
        <h5 className="topic_photo_count">{amountOfPhotos}</h5>
      </a>
    );
}

export default Topic