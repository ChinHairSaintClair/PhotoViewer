import { useRef } from 'react';
import './App.css';
import { useDraggable } from "react-use-draggable-scroll";

import PhotoView from './ui/components/molecules/photoView';

import Topic from './ui/components/atoms/topic';

function App() {
  const topicRef = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events: topicEvents } = useDraggable(topicRef);

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

  var topics = Array.from({length: 10},
    (v, k) => {
      return (<Topic key={k} info={{ id: k+'', name: 'Topic '+k, amountOfPhotos: 100 }} onClick={onTopicClick} />);
    }
  );

  var photoInfo = Array.from({length: 12},
    (v, k) => {
      return {
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
      };
    }
  );

  return (
    <div id="app" data-nav='false'>
      <PhotoView isLoading={false} info={photoInfo} onClick={onPhotoClick} isLoadingMore={false} loadMore={() => console.info('on load more')}/>
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
