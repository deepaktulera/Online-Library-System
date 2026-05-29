import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import BrowseBooks from '../pages/BrowseBooks'
import AddBook from '../pages/AddBook'
import NotFound from '../pages/NotFound'
import Layout from '../components/Layout'
import BookDetail from '../pages/BookDetail'

const AppRoutes = () => {
    return (
        <Routes>

            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/browse_books' element={<BrowseBooks />} />
                <Route path='/add_books' element={<AddBook />} />
                <Route path='/book_detail/:id' element={<BookDetail />} />
            </Route>
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}

export default AppRoutes