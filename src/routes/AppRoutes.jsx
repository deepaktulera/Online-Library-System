import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BrowseBooks from '../pages/BrowseBooks'
import AddBook from '../pages/AddBook'
import NotFound from '../pages/NotFound'

import Layout from '../components/Layout'

const AppRoutes = () => {
    return (
        <Routes>

            {/* Routes with Navbar */}
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/browse_books' element={<BrowseBooks />} />
                <Route path='/add_books' element={<AddBook />} />
            </Route>

            {/* Route without Navbar */}
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default AppRoutes