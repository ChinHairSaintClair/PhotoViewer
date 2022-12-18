import { useRef } from 'react';
import './App.css';
import { useDraggable } from "react-use-draggable-scroll";

import Topic from './ui/components/topic';
import Photo from './ui/components/photo';

function App() {
  const topicRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events: topicEvents } = useDraggable(topicRef);

  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const onNavToggle = () => {
    document.getElementById('app')!.dataset.nav = 
    document.getElementById('app')!.dataset.nav === 'true' ? 'false' : 'true';
  }

  const onTopicClick = () => {
    console.log('The link was clicked.');
  };

  const onPhotoClick = () => {
    console.info('The photo was clicked.')
  }

  const onScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const bottom = e.currentTarget.scrollHeight - e.currentTarget.scrollTop === e.currentTarget.clientHeight;
    if(bottom) {
      console.info('Reached bottom of list');
    }
  }

  var topics = Array.from({length: 10},
    (v, k) => {
      return (<Topic key={k} info={{ id: k+'', name: 'Topic '+k, amountOfPhotos: 100 }} onClick={onTopicClick} />);
    }
  );

  var topicPhotos = Array.from({length: 12},
    (v, k) => {
      return (
        <Photo
          key={k}
          info={{
            id: k+'',
            description: 'description',
            averageColor: '#B00',
            blurHash: undefined,
            url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
            urlLarge: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
            author: {
              id: '123',
              name: 'Author',
              portfolioUrl: undefined,
            }
          }}
          onClick={onPhotoClick}
        />
      );
    }
  );

  return (
    <div id="app" data-nav='false'>
      {/* Photo view */}
      <div id='photos' ref={ref} {...events} onScroll={onScroll}>
        {topicPhotos}
      </div>
      {/* Topic nav */}
      <nav>
        <div id='topics' ref={topicRef} {...topicEvents}>
          {topics}
        </div>
      </nav>
      {/* Navigation toggle button */}
      <button id='nav_toggle' type='button' onClick={onNavToggle}>
        <i className="open">Topic</i>
        <i className="close">X</i>
      </button>
    </div>
  )
}

export default App;
