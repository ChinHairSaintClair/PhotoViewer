import './Topic.css'
import Info from "../../../models/Topic";

type Props = { info: Info, onClick: (id: string) => void }
const Topic = ({ info: { id, name, amountOfPhotos, coverPhoto: { description, averageColor, url } }, onClick }: Props) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className='topic' href='#' onClick={() => onClick(id)}>
          <h2 className="topic_title">{name}</h2>
          {/* TODO: implement amount of photos pill */}
          <img 
            className='topic_cover_photo selector'
            style={{ backgroundColor: averageColor }}
            alt={description??'alt'} 
            src={url}
          />
        </a>
      );
}

export default Topic