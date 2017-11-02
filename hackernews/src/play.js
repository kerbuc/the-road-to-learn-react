import React, { Component } from 'react';

class ExplainDingindsComponent extends Component {
  constructor() {
    super();

    this.onClickMe = this.onClickMe.bind(this);
  }
  onClickMe() {
    console.log(this, 'bla');
  }

  render() {
    this.onClickMe();
    return (
      <button
        onClick={this.onClickMe}
        type="button"
      >
        Click Me
      </button>
    )
  }
}

export default ExplainDingindsComponent;