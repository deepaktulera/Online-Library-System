import React from 'react';
import { Link } from 'react-router-dom';

const Book = (props) => {
    return (
        <Link>
            <div className='p-4 rounded-3xl shadow-2xl'>
                <img src={props.data.image} alt="" className='w-62 h-62 object-cover' />
                <div className='flex justify-between items-center'>
                    <span className='text-center text-sm font-light'>{props.data.title}</span>
                    <span><strong>by</strong></span>
                    <span className='text-center text-sm font-light'>{props.data.author}</span>
                </div>
            </div>
        </Link>
    );
}

export default Book;
