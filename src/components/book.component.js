import React, { Component } from 'react'
import '../app.css'

class Book extends Component {
  
  updateShelf = (event) => {
    this.props.updateShelf(this.props.book.id, event.target.value);
  };

  render() {
    const { book } = this.props;
    
    // For some reason the search endpoint is not returning the shelf sometimes.
    // The following condition is used to add a default value to the book shelf
    if (!book.shelf) {
      book.shelf = 'none';
    }
    
    return (
      <div className="book">
      <div className="book-top">
        <div className="book-cover"
          style={{ width: 128,
            height: 193,
            backgroundImage: `url("${book.imageLinks.thumbnail}")` }}
          >
        </div>
        <div className="book-shelf-changer">
          <select 
            defaultValue={book.shelf}
            onChange={this.updateShelf}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
    );
  }

}

export default Book;