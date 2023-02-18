import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Creator from './components/Creator'
import NewAuth from './components/NewAuth'
import Dummy from './components/Dummy'

function App(props) {

  return (
    <Router>
      <div className='space-y-3'>
        {/* <Creator /> */}
        <Routes>
          <Route exact path='/' element={<NewAuth />} />
          <Route path='/dummy' element={<Dummy />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App


//  Tailwind setup
//  set up other dependencies
// 