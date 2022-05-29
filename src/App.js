import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
          <div className=''>
              <Navbar />
              <main className=''>
                <Alert />
                <Routes>
                  <Route path='/' element={< Home />} />
                  <Route path='/about' element={< About />} />
                  <Route path='/user/:login' element={<User />}></Route>
                  <Route path='/notfound' element={< NotFound />} />
                  <Route path='/*' element={< NotFound />} />
                </Routes>
              </main>
              <Footer />
            </div>
        </Router>
  );
}

export default App;
