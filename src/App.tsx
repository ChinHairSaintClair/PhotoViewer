import { useRef } from 'react';
import './App.css';
import { useDraggable } from "react-use-draggable-scroll";

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
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a key={k} className='topic selector' href='#' onClick={onTopicClick}>
          <h2 className="topic_title">Topic 1</h2>
          <img className='topic_cover_photo selector' alt='alt' src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80'/>
        </a>
      );
    }
  );

  var topicPhotos = Array.from({length: 12},
    (v, k) => {
      return (
        <div
          key={k}
          className='photo' 
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80)'
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
