import React from 'react'
import { Route } from 'react-router-dom';
import * as booksApi from './books.api'
import './app.css'

import Home from './components/home.component'
import Search from './components/search.component'

class App extends React.Component {

  state = {
    allBooks: [],
  };

  async componentDidMount() {
    const allBooks = await booksApi.getAll();
    this.setState({
      allBooks
    });
  }

  async updateShelf(book,newShelf) {
    booksApi.update(book,newShelf);

    this.setState((prevState) => {
        return prevState;
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
