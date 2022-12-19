import './App.css';

import NavButton from './ui/components/atoms/navButton';
import PhotoView from './ui/components/molecules/photoView';
import TopicView from './ui/components/molecules/topicView';

import Topic from './ui/models/Topic';
import Photo from './ui/models/Photo';

function App() {
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

  var topics: Topic[] = Array.from({length: 10},
    (v, k) => {
      return { id: k+'', name: 'Topic '+k, amountOfPhotos: 100, coverPhoto: {
        id: k+'',
        description: 'description'+k,
        averageColor: '#000',
        blurHash: undefined,
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
        downloadUrl: 'https://unsplash.com/photos/tA9FfKRaH-c/download?ixid=MnwzOTAxOTB8MHwxfHRvcGljfHw2c01WalRMU2tlUXx8fHx8Mnx8MTY3MTQ0OTM0MA',
        author: {
          id: '123',
          name: 'Author' + k,
          portfolioUrl: k % 2 === 0 ? 'https://www.google.com' : undefined,
        }
      } };
    }
  );

  var photos: Photo[] = Array.from({length: 12},
    (v, k) => {
      return {
        id: k+'',
        description: 'description',
        averageColor: '#B00',
        blurHash: undefined,
        url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
        urlLarge: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1574&q=80',
        downloadUrl: 'https://unsplash.com/photos/tA9FfKRaH-c/download?ixid=MnwzOTAxOTB8MHwxfHRvcGljfHw2c01WalRMU2tlUXx8fHx8Mnx8MTY3MTQ0OTM0MA',
        author: {
          id: '123',
          name: 'Author' + k,
          portfolioUrl: k % 2 === 0 ? 'https://www.google.com' : undefined,
        }
      };
    }
  );

  return (
    <div id="app" data-nav='false'>
      <PhotoView isLoading={false} info={photos} onClick={onPhotoClick} isLoadingMore={false} loadMore={() => console.info('on load more')}/>
      <TopicView isLoading={false} info={topics} onClick={onTopicClick}/>
      <NavButton topic='Topic' onToggle={onNavToggle}/>
    </div>
  )
}

export default App;
