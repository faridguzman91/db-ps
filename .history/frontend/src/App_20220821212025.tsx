import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './input.css'
import BioPage from './pages/bio'
import CVPage from './pages/cv'
import ExhibitionsHomePage from './pages/exhibitionhome'
import GalleryPage from './pages/gallery'
import HomePage from './pages/home'
import UploadClient from './pages/uploadclient'



import Navbar from './components/navbar/navbar'

function App(): JSX.Element {
  return (
    <div className="App">

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/exhibitions" element={<ExhibitionsHomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/uploadclient" element={<UploadClient />} />
      </Routes>






    </div>
  )
}

export default App
