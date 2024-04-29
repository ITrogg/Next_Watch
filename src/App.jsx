import './styles/App.css'
import Header from './components/header'
import Main from './components/main'
import Data from './data.js'
import { useState } from 'react'

function App() {
  const [nav, setNav] = useState("All");
  const [followedTitles, setFollow] = useState(()=> {
    const followed = Data.filter(series => series.isFollowed).map(series => series.title);
    return followed;
  });  
  const [currentEpisodes, setCurrent] = useState(() => {
    const episodes = Data.filter(series => series.lastSeen !== undefined).map(series => ({
      title: series.title,
      current: series.lastSeen
    }));
    return episodes;
  });

  return (
    <>
      <Header nav={nav} setNav={setNav}></Header>
      <Main nav={nav} data={Data} followedTitles={followedTitles} setFollow={setFollow} currentEpisodes={currentEpisodes} setCurrent={setCurrent} ></Main>
    </>
  )
}

export default App

