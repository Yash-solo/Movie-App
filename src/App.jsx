import './App.css'
import Navbar from './componants/Navbar.jsx'
import SearchBar from './componants/Search.jsx'
import Latest from './componants/Latest.jsx'
import Recommanded from './componants/Recommanded.jsx'
import ContinueWatch from './componants/ContinueWatch.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Latest/>
      <Recommanded/>
      <ContinueWatch/>
    </>
  )
}

export default App
