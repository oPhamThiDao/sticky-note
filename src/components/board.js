import React, { Component } from 'react';
import $ from 'jquery';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: $(document).height()
    };
  }

  render() {
    return (<div id="board" style={{height: this.state.height + 'px'}} ></div>);
  }
};
