import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Book from './book.component'
import * as booksApi from '../books.api'

class Search extends Component {

  state = {
    searchBooks: []
  };

  async handleSearch(searchString) {
    const searchBooks = await booksApi.search(searchString)
    this.setState({ searchBooks })
  }

  render() {
    const { updateShelf } = this.props;
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
        <Link className="close-search" to="/" />
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text"
              placeholder="Search by title or author"
              onChange={(event) => this.handleSearch(event.target.value)}
            />

          </div>
        </div>
        <div className="search-books-results">
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
        </div>
      </div>
    );
  }
}

export default Search;