import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './book-shelf.component';

const shelves = [
  { title: 'Currently Reading', statusName: 'currentlyReading' },
  { title: 'Want to Read', statusName: 'wantToRead' },
  { title: 'Read', statusName: 'read' }
];

class Home extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf => (
            <BookShelf
              key={shelf.title}
              title={shelf.title}
              books={books.filter( book => book.shelf === shelf.statusName )}
            />
          ))}
        </div>
        <div className="open-search">
        <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home;