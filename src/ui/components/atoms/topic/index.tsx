import './Topic.css'
import Info from "../../../models/Topic";

type Props = { info: Info, onClick: (id: string) => void }
const Topic = ({ info: { id, name, amountOfPhotos }, onClick }: Props) => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a className='topic selector' href='#' onClick={() => onClick(id)}>
          <h2 className="topic_title">{name}</h2>
          {/* TODO: implement amount of photos pill */}
          <img className='topic_cover_photo selector' alt='alt' src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80'/>
        </a>
      );
}

export default Topic