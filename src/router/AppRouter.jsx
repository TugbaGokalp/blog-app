import React from 'react'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import About from '../pages/About'
import NewBlog from '../pages/NewBlog'
import Detail from '../pages/Detail'

const AppRouter = () => {
  return (
    <div>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/new-blog' element={<NewBlog/>}/>
                <Route path='/detail:id' element={<Detail/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  )
}

export default AppRouter