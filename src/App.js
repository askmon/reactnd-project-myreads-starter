import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import * as booksApi from './books.api'
import './app.css'

import Home from './components/home.component'
import Search from './components/search.component'

class App extends Component {

  state = {
    allBooks: [],
  };

  async componentDidMount() {
    const allBooks = await booksApi.getAll();
    this.setState({
      allBooks
    });
  }

  updateShelf = async (bookId, newShelf) => {
    await booksApi.update({ id: bookId }, newShelf);

    this.setState((previousState) => {
      const bookToUpdate = previousState.allBooks.find((book) => {
        return book.id === bookId;
      });
      bookToUpdate.shelf = newShelf;
      return previousState;
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home
            books={this.state.allBooks}
            updateShelf={this.updateShelf}
          />
        )}/>
        <Route path="/search" render={() => (
          <Search
          />
        )}/>
      </div>
    )
  }
}

export default App
