import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import myForm from './myForm';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to my React test</h2>
           <p>We are testing React </p>
       <myForm />
      </div>
    );
  }
}

export default App;
