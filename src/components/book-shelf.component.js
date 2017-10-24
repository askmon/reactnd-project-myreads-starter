import React from 'react'

import Book from './book.component'
import '../app.css'

const BookShelf  = ({title, books, updateShelf}) => {
    
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

export default BookShelf;