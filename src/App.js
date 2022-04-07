import React, { Component } from 'react';
import {Router} from '@reach/router'
import Home from './Home'

class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Router>
         <Home path="/"  />

        </Router>
      </div>
    );
  }
}

export default App;
