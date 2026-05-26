import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';


const Navbar = () => {
    const [menu, setmenu] = useState(false);
    function closeMenu() {
        setmenu(false);
    }

    return (
        <nav className='w-full flex items-center justify-between sm:flex-col sm:gap-2 pb-2'>
            <h1 className="text-2xl p-1 md:text-4xl font-extrabold text-center bg-linear-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg animate-pulse">Online Library System</h1>
            <ol className='hidden sm:flex gap-4 text-xl text-center py-1 text-gray-500 leading-relaxed max-w-2xl'>
                <Link to={'/'} >Home</Link>
                <Link to={'/browse_books'} >Browse Books</Link>
                <Link to={'/add_books'} >Add Books</Link>
            </ol>
            <div 
                className='block sm:hidden cursor-pointer'
                onClick={() => setmenu(!menu)}
            >
                <Menu />
            </div>
            {
                menu && (
                    <ol className='absolute top-10 right-4 bg-white shadow-lg p-4 rounded-lg flex flex-col gap-3 sm:hidden text-center py-1 text-gray-500 leading-relaxed max-w-2xl'>
                        <Link to='/' onClick={closeMenu}>Home</Link>
                        <Link to='/browse_books' onClick={closeMenu}>Browse Books</Link>
                        <Link to='/add_books' onClick={closeMenu}>Add Books</Link>
                    </ol>
                )
            }
        </nav>
    );
}

export default Navbar;
