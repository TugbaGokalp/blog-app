import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'

const AppRouter = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default AppRouter