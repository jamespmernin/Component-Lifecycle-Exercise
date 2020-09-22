import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ErrorPage from './ErrorPage';

export default class App extends Component {
  render() {
    return (
      <div className="page-container">
        <header>
          <h1>Component Lifecycle</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <HomePage message="Home" />
            </Route>
            <Route path="/about">
              <AboutPage message="About" />
            </Route>
            <Route path="/:notfound">
              <ErrorPage message="Error" />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}
