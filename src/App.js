import React, { Component } from 'react';
import {Router} from '@reach/router'
import Home from './Home'
import DatawatcherType from './datawatchertype/DatawatcherType';
import Navigation from './Navigation';
import CreateDatawatcherType from './datawatchertype/CreateDatawatcherType';
import Datawatcher from './datawatcher/Datawatcher';
import CreateDatawatcher from './datawatcher/CreateDatawatcher';
import Parameter from './parameters/Parameter';

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

         <Parameter path="/parameters" />

         <DatawatcherType path="/datawatchertypes"/>
         <CreateDatawatcherType path="/createdatawatchertype"/>

         <Datawatcher path="/datawatchers"/> 
         <CreateDatawatcher path="/createdatawatcher"/>
         
        </Router>
      </div>
    );
  }
}

export default App;
