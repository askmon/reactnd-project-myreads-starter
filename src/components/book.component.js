import React from 'react'
import '../app.css'

const Book  = ({book, updateShelf}) => {
  
  const processUpdateShelfEvent = (event) => {
    updateShelf(book, event.target.value);
  };

  const coverStyle = {
    width: 128,
    height: 193,
    backgroundImage: book.imageLinks ? `url("${book.imageLinks.thumbnail}")` : `linear-gradient(black, white)`
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={coverStyle}
          >
        </div>
        <div className="book-shelf-changer">
          <select 
            defaultValue={book.shelf}
            onChange={processUpdateShelfEvent}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
    </div>
  )

}

export default Book;