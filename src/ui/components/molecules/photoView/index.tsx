import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import { PhotoProvider, PhotoView as View } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import './PhotoView.css'

import Info from '../../../models/Photo';
import Photo from '../../atoms/photo';
import PhotoToolbar from '../../atoms/photoToolbar';

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
        <PhotoProvider 
            toolbarRender={({ rotate, onRotate, scale, onScale }) => (
                <PhotoToolbar 
                    onDownload={() => console.info('download')}
                    onRotate={() => onRotate(rotate+90 === 360 ? 0 : rotate+90)}
                    onScale={() => onScale(scale > 1 ? 1: 1.9)}
                />
            )}
            overlayRender={({ overlay }) => <div style={{    
                position: 'absolute',
                bottom: '0px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'white',
            }}>{overlay}</div>}
        >
            <div id='photos' ref={ref} {...events} onScroll={onScroll}>
                {info.map((e) => (
                    <View 
                    key={e.id} 
                    src={e.url} 
                    overlay={e.author.name}
                    >
                        <Photo
                            key={e.id}
                            info={e}
                            onClick={onClick}
                        />
                    </View>
                ))}
            </div>
        </PhotoProvider>
    )
}

export default PhotoView