import React, { Component } from 'react';


class MyForm extends Component {
  constructor(props) {
      super(props);

  }
 render() {
    return (<div>
       <input onChange={this.props.saveName} placeholder="name" />
       <input onChange={this.props.saveEmail} placeholder="email" />
      </div>
    );
  }

   }


export default MyForm;
