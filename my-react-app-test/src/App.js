import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './myForm';

class App extends Component {
  constructor(props) {
      super(props);
         this.state= {
             name: "",
             email: ""
         }
      this.saveName= this.saveName.bind(this);
      this.saveEmail= this.saveEmail.bind(this);
     }
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to my React test</h2>
           <p>We are testing React </p>
           <MyForm  saveName={this.saveName}
                   saveEmail={this.saveEmail} />
      </div>
    );
  }
  saveName (event) {
        let name= event.target.value;
        this.setState ({
            name: name
        });
         console.log(name);

    }
     saveEmail (event) {
        let email= event.target.value;
       this.setState ({
           email: email
        });
         console.log(email);
    }
}

export default App;
