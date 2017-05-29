import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './myForm';
import MyButton from './MyButton';

class App extends Component {
  constructor(props) {
      super(props);
         this.state= {
             name: "",
             email: ""
         }
      this.saveName= this.saveName.bind(this);
      this.saveEmail= this.saveEmail.bind(this);
      this.delete= this.delete.bind(this);
     }
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to my React test</h2>
           <p>We are testing React </p>
           <MyForm  saveName={this.saveName}
                   saveEmail={this.saveEmail}
                   delete={this.delete}
                   name={this.state.name}
               email={this.state.email}/>

            <MyButton  delete={this.delete} />
            
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
    delete () {
        this.setState ({
            name: "",
            email: ""
        });
    }
}

export default App;
