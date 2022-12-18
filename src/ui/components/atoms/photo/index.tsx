import './Photo.css'
import Info from "../../../models/Photo";
import React from 'react';

type Props = {info: Info, onClick: () => void}
const Photo = React.forwardRef<HTMLDivElement, Props>(({ info: { id, description, averageColor, blurHash, url, urlLarge, author: { id: uId, name, portfolioUrl } }, onClick }, ref) => {
  return (
    <div
      ref={ref}
      className='photo' 
      style={{
        backgroundImage: `url(${url})`
      }}
      onClick={onClick}
    />
  );
})

export default Photo