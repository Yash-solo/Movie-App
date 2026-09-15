import './App.css'
import Navbar from './componants/Navbar.jsx'
import SearchBar from './componants/Search.jsx'
import Latest from './componants/Latest.jsx'
import Recommanded from './componants/Recommanded.jsx'
function App() {

  return (
    <>
      <Navbar/>
      <SearchBar/>
      <Latest/>
      <Recommanded/>
    </>
  )
}

export default App
