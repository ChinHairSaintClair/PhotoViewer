import './App.css';

import Driver from './interaction/Driver';

import NavButton from './ui/components/atoms/navButton';
import PhotoView from './ui/components/molecules/photoView';
import TopicView from './ui/components/molecules/topicView';

import Topic from './ui/models/Topic';
import Photo from './ui/models/Photo';
import { useEffect, useRef, useState } from 'react';

function App() {
  const driver = Driver.getInstance();
  const topicController = new AbortController();
  const getTopics = async () => await driver.getTopics(topicController.signal).then((items) => {
    setTopics(items)
    return items; // To chain impl specific actions
  }).catch((e) => console.error('Error: ', e));
  const photoController = new AbortController();
  const getPhotos = async (topicId: string, page: number, append?: boolean) => await driver.getPhotos(photoController.signal, topicId, page, 12).then((items) => append ? setPhotos((prev) => [...prev, ...items]) : setPhotos(items)).catch((e) => console.error('Error: ', e));

  const [topics, setTopics] = useState<Topic[]>([]);
  const selected = useRef<string>(); // Tracks selected topic
  const [hasTopicsLoading, setHasTopicsLoading] = useState<boolean>(true)

  const [photos, setPhotos] = useState<Photo[]>([])
  const page = useRef<number>(1) // Tracks current photo page
  const [hasPhotosLoading, setHasPhotosLoading] = useState<boolean>(true)
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false)

  // useEffect fires twice in dev mode not production due to 'strict'
  // https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
  useEffect(() => {
    setHasTopicsLoading(true)
    getTopics().then((items) => {
      if(items !== undefined){
        setHasPhotosLoading(true);
        const id = items[0].id;
        getPhotos(id, 1).then(() => {
          selected.current = id;
          setHasPhotosLoading(false);
        });

        setHasTopicsLoading(false);
      }
    })

    return () => {
      // TODO: abort controller impl
      // topicController.abort();
      // photoController.abort();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onNavToggle = () => {
    document.getElementById('app')!.dataset.nav = 
    document.getElementById('app')!.dataset.nav === 'true' ? 'false' : 'true';
  }

  const onTopicClick = (id: string) => {
    if(selected.current !== id){
      setHasPhotosLoading(true);
      getPhotos(id, page.current).then(() => {
        selected.current = id;
        setHasPhotosLoading(false);
      })
    }
  };

  const onViewPhoto = (id: string) => {
    // Perhaps track clicked photos
  }

  const onLoadMorePhotos = () => {
    const newPage = page.current + 1
    setIsLoadingMore(true)
    getPhotos(selected.current!, newPage, true).then(() => {
      page.current = newPage;
      setIsLoadingMore(false)
    })
  }

  return (
    <div id="app" data-nav='false'>
      <PhotoView 
        isLoading={hasPhotosLoading}
        info={photos} 
        onViewPhoto={onViewPhoto} 
        isLoadingMore={isLoadingMore} 
        loadMore={onLoadMorePhotos}
      />
      <TopicView isLoading={hasTopicsLoading} info={topics} onClick={onTopicClick}/>
      <NavButton topic='Topic' onToggle={onNavToggle}/>
    </div>
  )
}

export default App;
