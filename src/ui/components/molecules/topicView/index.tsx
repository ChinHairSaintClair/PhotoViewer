import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import './TopicView.css'

import Info from '../../../models/Topic';

import Topic from '../../atoms/topic';
import Loader from '../../atoms/loader';

type Props = {isLoading: boolean, info: Info[], onClick: (id: string) => void}
const TopicView = ({ isLoading, info, onClick }: Props) => {
    const topicRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events: topicEvents } = useDraggable(topicRef);
    
    return (
        <nav>
            <div id='topics' ref={topicRef} {...topicEvents} style={{ opacity: isLoading ? 0 : 1 }}>
                {info.map((e) => <Topic key={e.id} info={e} onClick={() => onClick(e.id)} />)}
            </div>
            <Loader visible={isLoading}/>
        </nav>
    )
}

export default TopicView