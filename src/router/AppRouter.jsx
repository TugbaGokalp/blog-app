import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../pages/About'

const AppRouter = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default AppRouter