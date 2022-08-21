import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './input.css'
import BioPage from './pages/bio'
import CVPage from './pages/cv'
import ExhibitionsHomePage from './pages/exhibitionhome'
import GalleryPage from './pages/gallery'
import HomePage from './pages/home'



import Navbar from './components/navbar/navbar'

function App() {


  return (
    <div className="App">

      <Navbar />


    </div>
  )
}

export default App
