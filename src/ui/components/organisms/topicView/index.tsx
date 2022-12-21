import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import './TopicView.css'

import Info from '../../../models/Topic';

import Topic from '../../atoms/topic';
import Loader from '../../atoms/loader';
import ErrorIndicator from '../../molecules/errorIndicator';

type Props = {isLoading: boolean, info: Info[], selectedId?: string, onClick: (id: string) => void, error?: string, onRetry: () => void}
const TopicView = ({ isLoading, info, selectedId, onClick, error, onRetry }: Props) => {
    const topicRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events: topicEvents } = useDraggable(topicRef);
    
    return (
        <nav>
            <div id='topics' ref={topicRef} {...topicEvents} style={{ opacity: isLoading || error ? 0 : 1 }}>
                { info.map((e) => (
                    <Topic 
                        key={e.id} 
                        info={e} 
                        isSelected={e.id === selectedId} 
                        onClick={() => onClick(e.id)}
                    />
                ))}
            </div>
            <Loader visible={isLoading}/>
            {error && (
                <ErrorIndicator 
                    error={error} 
                    retryText={'Reload Topics'} 
                    onRetry={onRetry}
                />
            )}
        </nav>
    )
}

export default TopicView