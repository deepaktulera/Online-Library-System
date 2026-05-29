import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../utils/books.json'

const Book = (props) => {

    const [loading, setLoading] = useState(true);
    <img
        src={data.image}
        alt={data.title}
        loading="lazy"
        onLoad={() => setLoading(false)}
        className="w-full h-60 object-cover"
    />

    {
        loading && (
            <div className="w-full h-60 animate-pulse bg-gray-300"></div>
        )
    }

    return (
        <Link to={`/book_detail/${props.data.id}`}>
            <div className='w-full p-4 m-auto rounded-3xl transition-all hover:scale-105 hover:shadow-emerald-300 hover:shadow-2xl duration-700'>
                <img src={props.data.image} alt="" className='w-62 h-62 object-contain' loading='lazy' />
                <div className='w-full flex flex-col items-center overflow-x-auto'>
                    <h1 className='text-center text-sm font-light overflow-x-auto'>{props.data.title}</h1>
                    <span><strong>by</strong></span>
                    <h1 className='text-center text-sm font-light overflow-x-auto'>{props.data.author}</h1>
                </div>
            </div>
        </Link>
    );
}

export default Book;
