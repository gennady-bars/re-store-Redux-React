import React from 'react';


import './BookListItem.css'

const BookListItem = ({ book, booksAdded }) => {
    const { title, author, price, coverImage } = book;
    return (
      <div className="book-list-item">
        <div className="book-cover">
          <img src={coverImage} alt="cover" />
        </div>
        <div className="book-details">
          <h2 className="book-title">{title}</h2>
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
          <button 
          className="btn btn-info add-to-cart"
          onClick={booksAdded}>Add to cart</button>
        </div>
  
      </div>
    );
  };
  
export default BookListItem;