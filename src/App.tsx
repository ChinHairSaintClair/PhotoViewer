import { useEffect, useRef, useState } from 'react';
import './App.css';

import Driver from './interaction/Driver';

import Topic from './ui/models/Topic';
import Photo from './ui/models/Photo';

import NavButton from './ui/components/atoms/navButton';
import PhotoView from './ui/components/organisms/photoView';
import TopicView from './ui/components/organisms/topicView';
import Loader from './ui/components/atoms/loader';
import ErrorIndicator from './ui/components/molecules/errorIndicator';

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const selected = useRef<string>(); // Tracks selected topic
  const [hasTopicsLoading, setHasTopicsLoading] = useState<boolean>(true);
  const [topicError, setTopicError] = useState<string>();

  const [photos, setPhotos] = useState<Photo[]>([]);
  const INITIAL_PAGE = 1;
  const PER_PAGE = 12;
  const page = useRef<number>(INITIAL_PAGE); // Tracks current photo page
  const [hasPhotosLoading, setHasPhotosLoading] = useState<boolean>(true);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [photoError, setPhotoError] = useState<string>();

  // useEffect fires twice in dev mode not production due to 'strict'
  // https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
  useEffect(() => {
    initial();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const driver = Driver.getInstance();
  const initial = () => {
      setTopicError(undefined);
      setPhotoError(undefined);
      setTopics([]);
      setPhotos([]);
      setHasTopicsLoading(true);

      driver.getTopics()
      .then((topics) => {
        setTopics(topics);
        if(topics.length === 0) return;
        const topicId = topics[0].id;
        selected.current = topicId;
        
        setHasPhotosLoading(true);
        driver.getPhotos(topicId, INITIAL_PAGE, PER_PAGE)
        .then((photos) => setPhotos(photos))
        .catch((e) => {
          if(e instanceof Error)
            setPhotoError(e.message);
          else
            alert(`Severe error: ${e}`);
        })
        .finally(() => setHasPhotosLoading(false));
      })
      .catch((e) => {
        if(e instanceof Error)
          setTopicError(e.message);
        else 
          alert(`Severe error: ${e}`);
      })
      .finally(() => setHasTopicsLoading(false));
  } 

  const onTopicClick = (id: string) => {
    if(selected.current !== id){
      setHasPhotosLoading(true);
      driver.getPhotos(id, INITIAL_PAGE, PER_PAGE).then((photos) => {
        setPhotoError(undefined);
        setPhotos(photos);
        selected.current = id;
        page.current = INITIAL_PAGE;
      }).catch((e) => {
        if(e instanceof Error)
          setPhotoError(e.message);
        else
          alert(`Severe error: ${e}`);
      }).finally(() => {
        setHasPhotosLoading(false);
      })
    }
  };

  const onLoadMorePhotos = () => {
    const newPage = page.current + 1
    setIsLoadingMore(true)
    driver.getPhotos(selected.current!, newPage, PER_PAGE).then((photos) => {
      setPhotos((prev) => [...prev, ...photos]);
      page.current = newPage;
    }).catch((e) => {
      if(e instanceof Error)
        setPhotoError(e.message);
      else
        alert(`Severe error: ${e}`);
    }).finally(() => {
      setIsLoadingMore(false);
    })
  }

  const onViewPhoto = (id: string) => {
    // Perhaps track clicked photos
  }

  const onNavToggle = () => {
    document.getElementById('app')!.dataset.nav = 
    document.getElementById('app')!.dataset.nav === 'true' ? 'false' : 'true';
  }

  return (
    <div id="app" data-nav='false'>
      { (!hasTopicsLoading && !topicError) &&
        <>
          <PhotoView 
            isLoading={hasPhotosLoading}
            info={photos} 
            onViewPhoto={onViewPhoto} 
            isLoadingMore={isLoadingMore} 
            loadMore={onLoadMorePhotos}
            error={photoError}
            onRetry={() => console.info('onPhotoRetry')}
          />
          <TopicView
            info={topics}
            selectedId={selected.current}
            onClick={onTopicClick}
          />
          <NavButton topic='Topic' onToggle={onNavToggle}/>
        </>
      }
      <Loader visible={hasTopicsLoading} />
      {topicError && (
        <ErrorIndicator 
          error={`Startup Error: ${topicError}`}
          onRetry={() => initial()}
        />
      )}
    </div>
  )
}

export default App;
