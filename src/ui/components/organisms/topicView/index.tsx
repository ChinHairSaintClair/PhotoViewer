import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import './TopicView.css'

import Info from '../../../models/Topic';

import Topic from '../../atoms/topic';

type Props = {info: Info[], selectedId?: string, onClick: (id: string) => void}
const TopicView = ({ info, selectedId, onClick }: Props) => {
    const topicRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events: topicEvents } = useDraggable(topicRef);
    
    return (
        <nav>
            <div id='topics' ref={topicRef} {...topicEvents}>
                { info.map((e) => (
                    <Topic 
                        key={e.id} 
                        info={e} 
                        isSelected={e.id === selectedId} 
                        onClick={() => onClick(e.id)}
                    />
                ))}
            </div>
        </nav>
    )
}

export default TopicView