import React, { Component } from 'react';
import $ from 'jquery';
import "jquery-ui/ui/widgets/draggable.js"

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

  componentDidMount() {
    this.$node = $(this.refs.draggable.children)
    this.$node.draggable(
      {
        stack: ".note",
        stop: this.props.handleDragOver.bind(this)
      }
    )
  }

  componentDidUpdate() {
    this.$node = $(this.refs.draggable.children)
    this.$node.draggable(
      {
        stack: ".note",
        stop: this.props.handleDragOver.bind(this)
      }
    )
  }

  renderNotes(v,i) {
    let someValidPath = null
    return (
      <div
        className="note" id={v.id} key={i}
        style={{background: v.color, zIndex: v.zindex, top: v.top, left: v.left, position: "absolute"}}>

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
      <div id="board" ref="draggable" style={{height: this.state.height + 'px'}} >
        {this.state.data.map((v, i) => this.renderNotes(v, i))}
      </div>
    );
  }
};
