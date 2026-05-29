import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../utils/books.json';

const BookDetail = () => {

    const { id } = useParams();

    const singleBook = data.books.find(
        (item) => item.id === Number(id)
    );

    return (
        <div className='h-auto flex justify-center items-center'>
            <div className='flex flex-col gap-4 p-4 w-fit rounded-2xl  justify-center items-center'>
                <img src={singleBook.image} alt="" className='w-80 h-80 object-contain object-center hover:shadow-emerald-300 hover:scale-105 transition-all duration-1000 shadow-xl rounded-4xl' />
                <div className='flex flex-col items-center gap-4 justify-center'>
                    <h1><strong>Title :- </strong>{singleBook.title}</h1>
                    <h1><strong>Author :- </strong>{singleBook.author}</h1>
                    <p><strong>Description :- </strong>{singleBook.description}</p>
                    <h3><strong>Published :- </strong>{singleBook.published}</h3>
                    <h3><strong>Rating :- </strong>{singleBook.rating}</h3>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;