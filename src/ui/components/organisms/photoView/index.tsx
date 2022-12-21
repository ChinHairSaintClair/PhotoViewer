import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import { PhotoProvider, PhotoView as View } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import './PhotoView.css'

import Info from '../../../models/Photo';
import Photo from '../../atoms/photo';
import PhotoToolbar from '../../atoms/photoToolbar';
import PhotoOverlay, { OverlayEntry } from '../../atoms/photoOverlay';
import Loader from '../../atoms/loader';
import ErrorIndicator from '../../molecules/errorIndicator';

type Props = { 
    isLoading: boolean
    info: Info[]
    onViewPhoto: (id: string) => void
    isLoadingMore: boolean
    loadMore: () => void
    error?: string
    onRetry: () => void
}
const PhotoView = ({ isLoading, info, onViewPhoto, isLoadingMore, loadMore, error, onRetry } : Props) => {
    const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;
    const { events } = useDraggable(ref);

    const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
        const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
        if(bottom && !isLoading && !isLoadingMore) {
            loadMore();
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
            overlayRender={({ overlay }) => <PhotoOverlay node={overlay}/>}
            onIndexChange={(idx) => onViewPhoto(info[idx].id)}
        >
            <div id='photos'>
                <div id='inner' ref={ref} {...events} onScroll={onScroll} style={{ opacity: isLoading ? 0 : 1 }}>
                    {info.map((e) => (
                        <View 
                            key={e.id} 
                            src={e.url} 
                            overlay={<OverlayEntry text={e.author.name} url={e.author.portfolioUrl}/>}
                        >
                            <Photo
                                key={e.id}
                                info={e}
                                onClick={() => onViewPhoto(e.id)}
                            />
                        </View>
                    ))}
                </div>
                <Loader visible={isLoading}/>
                {isLoadingMore &&<h4 id='load_more'>Loading additional photos...</h4>}
                {error && <ErrorIndicator error={error} retryText='Reload Photos' onRetry={onRetry}/>}
            </div>
        </PhotoProvider>
    )
}

export default PhotoView