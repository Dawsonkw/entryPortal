import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Creator from './components/Creator'
import NewAuth from './components/NewAuth'
import Dummy from './components/Dummy'
import PrivateRoutes from './components/PrivateRoutes'

function App() {
  return (
    <Router>
      <div className='space-y-3'>
        <Routes>
          <Route exact path='/' element={<NewAuth />} />
          {/* Route to dummy page is protected so users cannot bypass login verification */}
          <Route element={<PrivateRoutes/>}>
            <Route element={<Dummy />} path='/dummy' />
          </Route>
          <Route path='/creator' element={<Creator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App


//  TODO
//  
// 1. need to set up error handling so that it doesnt navigate away from creator page when account is unsuccessfully created and instead displays message


