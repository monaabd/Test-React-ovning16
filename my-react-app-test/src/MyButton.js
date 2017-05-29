import React, { Component } from 'react';

class MyButton extends Component {
  constructor(props) {
     super(props);

  }
  render() {
    return (
        <div>
            <button className="buttonClass" >Delete</button>
        </div>

    );
  }

}

export default MyButton;
