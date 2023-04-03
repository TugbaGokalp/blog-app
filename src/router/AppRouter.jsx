import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const AppRouter = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default AppRouter