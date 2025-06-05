import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/Home'

import DestinationPage from './pages/Destination'
import CrewPage from './pages/crew'
import TechPage from './pages/tech'


function App() {
  return(
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/destination' element={<DestinationPage/>} />
      <Route path='/crew' element={<CrewPage /> } />
      <Route path='/tech' element={<TechPage /> } />


    </Routes>
    </BrowserRouter>
  )
}

export default App
