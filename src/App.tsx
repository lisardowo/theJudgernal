import './index.css'
import LetterGlitch from './backtround';
import Home from './Home.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatIbring from './WhatIbring/Whatibring.tsx';


function App() {
  
  return (
    <div>
    <LetterGlitch
      glitchColors={['#465a12ff', '#0e7e9dff', '#480958ff']}
      glitchSpeed={75}
      centerVignette = {false}
      outerVignette = {true}
      smooth = {true}
      characters='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdef0123456789'
    />
    <Router>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/AboutMe" element = {<WhatIbring />}/>
      </Routes>
    </Router>
    

    </div>
  )
}

export default App
