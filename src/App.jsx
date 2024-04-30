import Header from './components/header'
import Main from './components/main'
import Data from './data.js'
import { useState } from 'react'

function App() {
  const [nav, setNav] = useState("All");
  const [data, setData] = useState(Data);

  const startFollow = (target) => {
    setData(data.map(serie => {
      if (serie.title === target) {
          return { ...serie, isFollowed: true, lastSeen : [1,0] };
      }
      return serie;
    }))

    console.log("follow");
  }

  const nextEpisode = (target) => {
    setData(data.map(serie => {
      if (serie.title === target){
        if (serie.lastSeen[1] < serie.nbEpisodes[serie.lastSeen[0]-1]){
          serie.lastSeen[1] ++;
        } else {
          serie.lastSeen[0] ++;
          serie.lastSeen[1] = 1;
        }
      }
      return serie;
    }))
    console.log("next");
  }

  return (
    <>
      <Header nav={nav} setNav={setNav}></Header>
      <Main nav={nav} data={data} startFollow={startFollow} nextEpisode={nextEpisode} ></Main>
    </>
  )
}

export default App

