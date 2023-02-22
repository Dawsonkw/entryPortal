import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Creator from './components/Creator'
import NewAuth from './components/NewAuth'
import Dummy from './components/Dummy'

function App() {

  return (
    <Router>
      <div className='space-y-3'>
        <Routes>
          <Route exact path='/' element={<NewAuth />} />
          <Route path='/dummy' element={<Dummy />} />
          <Route path='/creator' element={<Creator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App


//  TODO
//  
// 1. need to figure out how to protect routes using react router. The protected routes function is not letting me push a successful login, but does protect the routes itself
