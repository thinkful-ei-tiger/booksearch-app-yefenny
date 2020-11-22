import React from 'react';
import './book.css';

export default function Book(props) {
  const { book } = props;
  let authors = book.volumeInfo.hasOwnProperty('authors')
    ? book.volumeInfo.authors.map((author) => author)
    : '';
  if (authors !== '') authors = authors.join(',');

  return (
    <div className='Book'>
      <div className='book-title'>
        <h2>{book.volumeInfo.title}</h2>
      </div>
      <div className='book-details'>
        <div className='book-img'>
          <img src={book.volumeInfo.imageLinks.smallThumbnail} />
        </div>
        <div className='book-description'>
          <span>Author: {authors}</span>
          <span>
            Price:{' '}
            {book.saleInfo.listPrice
              ? `$ ${book.saleInfo.listPrice.amount.toFixed(2)}`
              : 'Not for sale'}
          </span>
          <p>
            {book.volumeInfo.description !== undefined &&
              book.volumeInfo.description.substring(0, 250)}
          </p>
        </div>
      </div>
    </div>
  );
}
