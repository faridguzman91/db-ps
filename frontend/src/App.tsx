import { BrowserRouter, Route, Routes } from "react-router-dom";
// add the beginning of your app entry
import React from "react";
import "vite/modulepreload-polyfill";
import "./input.css";
import BioPage from "./pages/bio";
import BlogPage from "./pages/blog";
import ContactPage from "./pages/contact";
import CVPage from "./pages/cv";
import ExhibitionsHomePage from "./pages/exhibitionhome";
import GalleryPage from "./pages/gallery";
import HomePage from "./pages/home";
import UploadImage from "./pages/subpages/uploadclient/uploadimage";
import UploadLogin from "./pages/subpages/uploadclient/uploadlogin";

// const prisma = new PrismaClient()

import Navbar from "./components/navbar/navbar";

function App(): JSX.Element {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bio" element={<BioPage />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/exhibitions" element={<ExhibitionsHomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/uploadlogin" element={<UploadLogin />} />
        <Route path="/uploadimage" element={<UploadImage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
