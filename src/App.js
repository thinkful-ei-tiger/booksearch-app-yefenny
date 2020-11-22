import React, { Component } from 'react';
import Header from './header/header';
import Bars from './bars/bars';
import BookList from './booksList/bookList';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      loading: false,
      filter: null,
      error: null,
      printType: null,
      q: ''
    };
  }
  componentDidMount() {}
  handleSearch = () => {
    this.setState({
      loading: true,
      error: null
    });
    const { q, filter, printType } = this.state;

    const key = 'AIzaSyCUJGsqLUGxX9Hh1sfK4W3WU81Cnnu6EHs';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${q}&key=${key}${
      filter != null ? `&filter=${this.state.filter}` : ''
    }${printType != null ? `&printType=${printType}` : ''}`;
    console.log(url);
    if (q !== '') {
      fetch(url)
        .then((res) =>
          res.ok ? res.json() : Promise.reject('Something went wrong')
        )
        .then((books) => this.setState({ books: books.items, loading: false }))
        .catch((error) => this.setState({ error }));
    }
  };

  changeFilter = (filter) => {
    this.setState(
      {
        filter
      },
      () => {
        this.handleSearch();
      }
    );
  };
  changeTerm = (q) => {
    this.setState({
      q
    });
  };
  changePrintType = (printType) => {
    this.setState(
      {
        printType
      },
      () => {
        this.handleSearch();
      }
    );
  };
  render() {
    let display = null;
    if (this.state.error) {
      display = <div> Error: {this.state.error}</div>;
    } else if (this.state.loading) {
      display = <div> Loading</div>;
    } else if (this.state.books !== []) {
      display = <BookList books={this.state.books} />;
    }
    return (
      <div className='App'>
        <Header></Header>
        <main>
          <Bars
            changeFilter={this.changeFilter}
            changePrintType={this.changePrintType}
            changeTerm={this.changeTerm}
            handleSearch={this.handleSearch}
          />
          {display}
        </main>
      </div>
    );
  }
}
