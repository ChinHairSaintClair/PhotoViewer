import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import './PhotoView.css'

import Info from '../../../models/Photo';
import Photo from '../../atoms/photo';

type Props = { isLoading: boolean, info: Info[], onClick: () => void, isLoadingMore: boolean, loadMore: () => void }
const PhotoView = ({ isLoading, info, onClick, isLoadingMore, loadMore } : Props) => {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events } = useDraggable(ref);

    const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if(bottom) {
          console.info('Reached bottom of list');
          if(!isLoading && !isLoadingMore){
            loadMore();
          }
        }
    }
    
    return (
        <div id='photos' ref={ref} {...events} onScroll={onScroll}>
            {info.map((e) => (
                <Photo
                    key={e.id}
                    info={e}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}

export default PhotoView