import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Book from './book.component'
import * as booksApi from '../books.api'

class Search extends Component {

  state = {
    searchBooks: null,
    searchString: ""
  };

  async handleSearch(searchString) {
    if (searchString.length > 0) {
      const searchBooks = await booksApi.search(searchString)
      this.setState({ searchBooks, searchString })
    }
    else {
      this.setState({ searchBooks: null, searchString })
    }
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