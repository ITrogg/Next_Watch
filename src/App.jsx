import './styles/App.css'
import Header from './components/header'
import Main from './components/main'
import Data from './data.js'

function App() {

  return (
    <>
      <Header></Header>
      <Main data={Data}></Main>
    </>
  )
}

export default App
