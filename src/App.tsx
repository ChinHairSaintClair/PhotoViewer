import './App.css';

function App() {
  const onNavToggle = () => {
    document.getElementById('app')!.dataset.nav = 
    document.getElementById('app')!.dataset.nav === 'true' ? 'false' : 'true';
  }

  const handleTopicClick = (e: unknown) => {
    console.log('The link was clicked.');
  };

  var topics = Array.from({length: 10},
  (v, k) => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a key={k} className='topic selector' href='#' onClick={handleTopicClick}>
        <h2 className="topic_title">Topic 1</h2>
        <img className='topic_cover_photo selector' alt='alt' src='https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80'/>
      </a>
    ); // Return k(ey) as value for this index
  }
);

  return (
    <div id="app" data-nav='false'>
      {/* Photo view */}
      <div id='photo_container'></div>
      {/* Topic nav */}
      <nav>
        <div id='topics'>
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
