import React from 'react'
import { Route } from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './app.css'

import Home from './components/home.component'
import Search from './components/search.component'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home
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
