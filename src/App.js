import React from 'react'
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router ,Route ,Routes} from 'react-router-dom'


function App() {
  return (
    <React.Fragment>
      <Router>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
        </Routes>

      </Router>
    </React.Fragment>
  );
}

export default App;
