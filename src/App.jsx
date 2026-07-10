import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Vision from './components/Vision'
import Footer from './components/Footer'
import Ourjourney from './components/Ourjourney'
import OurRecognition from './components/Our Recognition'
import SupportUs from './components/SupportUs'

import './App.css'

function App() {
  return (

      <Router>
        <Routes>
          <Route path="/" element={
            <>
            <Navbar />
            <div id="home"><Home /></div>
            <div id="vision"><Vision /></div>
            <div id ="footer"><Footer /></div>
            {/* <div></div> */}
            </>
            } />
          <Route path="/Ourjourney" element={
            <>
            <Navbar />
            <div id="our-journey"><Ourjourney /></div>

            <div id ="footer"><Footer /></div>
            {/* <div></div> */}
            </>
            } />
          <Route path="/OurRecognition" element={
            <>
            <Navbar />
            <div id="our-recognition"><OurRecognition /></div>

            <div id ="footer"><Footer /></div>
            {/* <div></div> */}
            </>
            } />
            <Route path="/SupportUs" element={
            <>
            <Navbar />
            <div id="support-us"><SupportUs /></div>
            </>
            } />
            
        </Routes>
      </Router>
  );
}

export default App
