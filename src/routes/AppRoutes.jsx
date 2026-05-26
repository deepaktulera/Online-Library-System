import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BrowseBooks from '../pages/BrowseBooks'
import AddBook from '../pages/AddBook'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse_books' element={<BrowseBooks />} />
        <Route path='/add_books' element={<AddBook />} />
    </Routes>
  )
}

export default AppRoutes
