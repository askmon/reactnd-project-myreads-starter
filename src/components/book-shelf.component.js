import React, { Component } from 'react'

import Book from './book.component'
import '../app.css'

class BookShelf extends Component {

  render() {
    const {title, books, updateShelf} = this.props;
    
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) =>
              <li key={book.id} >
                <Book
                  book={book}
                  updateShelf={updateShelf}
                />
              </li>
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;