import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/assets/Navbar';
import Footer from './components/assets/Footer';

function App() {
  return (
    <Router>
          <div className=''>
              <Navbar title='Terra Nova Expedition'/>
              <main className=''>
                <Routes>
                  <Route path='/' element={< Home />} />
                  <Route path='/scotts-journal' element={< ScottsJournal />} />
                  <Route path='/timeline-map' element={< TimelineMap />} />
                  <Route path='/*' element={< NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
        </Router>
  );
}

export default App;
