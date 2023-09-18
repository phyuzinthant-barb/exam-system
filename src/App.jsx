import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AdminLogin from './components/AdminLogin'
import Create from './components/students/Create'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<AdminLogin/>}></Route>
        <Route path='/student/create' element={<Create/>}></Route>
      </Routes>
    </Router>
  )
}

export default App