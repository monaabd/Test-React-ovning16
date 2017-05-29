import React, { Component } from 'react';


class MyForm extends Component {
  constructor(props) {
      super(props);

  }
 render() {
    return (<div>
      <input value={this.props.name} className="name" onChange={this.props.saveName} placeholder="name" />
      <input value={this.props.email} className="email" onChange={this.props.saveEmail} placeholder="email" />
      </div>
    );
  }

   }


export default MyForm;
