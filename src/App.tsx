import './App.css';
import { useScrollContainer } from 'react-indiana-drag-scroll';

function App() {
  const topicScrollContainer = useScrollContainer();
  const photoScrollContainer = useScrollContainer();

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
      return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a key={k} className='topic selector' href='#' onClick={onTopicClick}>
          <h2 className="topic_title">Topic 1</h2>
          <img className='topic_cover_photo selector' alt='alt' src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80'/>
        </a>
      );
    }
  );

  var topicPhotos = Array.from({length: 10},
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
      <div id='photos' ref={photoScrollContainer.ref}>
        {topicPhotos}
      </div>
      {/* Topic nav */}
      <nav>
        <div id='topics' ref={topicScrollContainer.ref}>
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
