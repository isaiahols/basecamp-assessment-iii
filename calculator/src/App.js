import React, { Component } from 'react';
import './App.css';
import {MakeStuff} from './Brains/MakeStuff';
import {GetNames} from './Brains/GetNames';


class App extends Component {
  whichOne(){

  }


  render() {
    return (
      <div className="App">
        <GetNames/>
        <MakeStuff />
      </div>
    );
  }
}

export default App;
