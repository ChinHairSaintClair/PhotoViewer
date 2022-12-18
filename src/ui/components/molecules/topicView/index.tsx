import { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import './TopicView.css'

import Info from '../../../models/Topic';
import Topic from '../../atoms/topic';

type Props = {info: Info[], onClick: () => void}
const TopicView = ({ info, onClick }: Props) => {
    const topicRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
    const { events: topicEvents } = useDraggable(topicRef);
    
    return (
        <nav>
            <div id='topics' ref={topicRef} {...topicEvents}>
                {info.map((e) => <Topic key={e.id} info={e} onClick={onClick} />)}
            </div>
        </nav>
    )
}

export default TopicView