import React, { Component } from 'react';
import $ from 'jquery';

export default class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: $(document).height(),
      data: props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ data: nextProps.data })
  }

  renderNotes(v,i) {
    let someValidPath = null
    return (
      <div className="note" id={v.id} key={i} style={{background: v.color, zIndex: v.zindex}}>
        <a href={someValidPath} className="button remove" onClick={this.props.handleRemove.bind(this, i)}>X</a>
        <div className="note_cnt">
          <textarea className="title" placeholder="Enter note title" name="title" value={v.title} onChange={this.props.handleChange.bind(this, v.id)}></textarea>
          <textarea className="cnt" placeholder="Enter note description here" name="content" value={v.content} onChange={this.props.handleChange.bind(this, v.id)}></textarea>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id="board" style={{height: this.state.height + 'px'}} >
        {this.state.data.map((v, i) => this.renderNotes(v, i))}
      </div>
    );
  }
};
