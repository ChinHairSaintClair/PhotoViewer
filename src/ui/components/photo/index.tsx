import './Photo.css'
import Info from "../../models/Photo";

type Props = {info: Info, onClick: () => void}
const Photo = ({ info: { id, description, averageColor, blurHash, url, urlLarge, author: { id: uId, name, portfolioUrl } }, onClick }: Props) => {
    return (
        <div
          className='photo' 
          style={{
            backgroundImage: `url(${url})`
          }}
          onClick={onClick}
        />
      );
}

export default Photo