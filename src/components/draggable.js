import React, { Component } from 'react';
import $ from 'jquery';
import "jquery-ui/ui/widgets/draggable.js"
require("jquery-ui/themes/base/all.css")

export default class Draggable extends Component {
  constructor(props) {
    super(props);
    this.state = { data: props.data };
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

  renderOptionBackgroundColor(color, obj) {
    let html = ''

    if (color === obj.color) {
      html = <span class="ui-icon ui-icon-check"></span>
    }

    return (
      <div className="background-color" style={{backgroundColor: color}} onClick={this.props.handleChangeBackgroundColor.bind(this, obj, color)} >
        { html }
      </div>
    )
  }

  renderNotes(v,i) {
    let someValidPath = null
    const backgroundColor = ["#FFFD75", "#FAAACA", "#69F098"]

    return (
      <div
        className="note" id={v.id} key={i}
        style={{background: v.color, zIndex: v.zindex, top: v.top, left: v.left, position: "absolute"}}>

        { backgroundColor.map((color) => this.renderOptionBackgroundColor(color, v)) }

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
      <div id="board" ref="draggable" >
        { this.state.data.map((v, i) => this.renderNotes(v, i)) }
      </div>
    );
  }
};
