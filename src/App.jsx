import './styles/App.css'
import Header from './components/header'
import Main from './components/main'
import Data from './data.js'
import { useState } from 'react'

function App() {
  const [nav, setNav] = useState("All");
  const [data, setData] = useState(Data);
  

  return (
    <>
      <Header nav={nav} setNav={setNav}></Header>
      <Main nav={nav} data={data} setData={setData} ></Main>
    </>
  )
}

export default App

