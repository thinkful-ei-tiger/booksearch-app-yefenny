import React, { Component } from 'react';
import Book from '../book/book';
import './bookList.css';

export default class BookList extends Component {
  render() {
    const books = this.props.books.map((book, index) => {
      return <Book key={index} book={book} />;
    });
    return <div className='BookList'>{books}</div>;
  }
}
BookList.defaultProps = {
  books: []
};
