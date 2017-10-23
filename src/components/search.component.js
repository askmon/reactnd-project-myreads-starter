import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Debounce } from 'react-throttle'

import Book from './book.component'
import * as booksApi from '../books.api'

class Search extends Component {

  state = {
    searchBooks: null,
    searchString: ""
  };

  async handleSearch(searchString, myBooks) {
    if (searchString.length > 0) {
      let searchBooks = await booksApi.search(searchString)
      searchBooks = this.updateBookShelves(searchBooks, myBooks)
      this.setState({ searchBooks, searchString })
    }
    else {
      this.setState({ searchBooks: null, searchString })
    }
  }

  updateBookShelves(searchBooks, myBooks) {
    return searchBooks.map((searchBook) => {
      const book = myBooks.find((myBook) => myBook.id === searchBook.id)
      searchBook.shelf = book ? book.shelf : 'none'
      return searchBook
    })
  }

  render() {
    const { books, updateShelf } = this.props;
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input type="text"
                placeholder="Search by title or author"
                onChange={(event) => this.handleSearch(event.target.value, books)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          {this.state.searchString.length > 0 && !this.state.searchBooks.length &&
            <div>
              <p>No results found for "{this.state.searchString}"</p>
            </div>
          }
          {this.state.searchBooks && this.state.searchBooks.length &&
            <ol className="books-grid">
              { this.state.searchBooks.map((book) => (
                <li key={book.id}>
                    <Book 
                      book={book}
                      updateShelf={updateShelf}
                    />
                </li> 
              ))}                            
              </ol>
          }                  
        </div>
      </div>
    );
  }
}

export default Search;