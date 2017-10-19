import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './book-shelf.component';

const shelves = [
  { title: 'Currently Reading' },
  { title: 'Want to Read' },
  { title: 'Read' }
];

class Home extends Component {
  render() {
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