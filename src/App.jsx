import './styles/App.css'
import Header from './components/header'
import Main from './components/main'
import Data from './data.js'
import { useState } from 'react'

function App() {
  const [nav, setNav] = useState("All");

  return (
    <>
      <Header nav={nav} setNav={setNav}></Header>
      <Main nav={nav} data={Data} episodesStatus ></Main>
    </>
  )
}

export default App

