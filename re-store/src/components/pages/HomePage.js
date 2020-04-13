import React from 'react';
import BookList from '../BookList/BookList'

const HomePage = () => {
    const books = [
        {id: 1, title: 'Production', author: 'Susan'},
        {id: 2, title: 'Release it', author: 'Michael'}
    ]
    return (
        <BookList books={books}/>
    );
}

export default HomePage;