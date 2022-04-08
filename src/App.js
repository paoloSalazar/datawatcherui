import React, { Component } from 'react';
import {Router} from '@reach/router'
import Home from './Home'
import DatawatcherType from './datawatchertype/DatawatcherType';
import Navigation from './Navigation';

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
        <Navigation />
        <Router>
         <Home path="/"  />
         <DatawatcherType path="datawatchertypes"/>
        </Router>
      </div>
    );
  }
}

export default App;
