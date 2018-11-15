import React, { Component } from 'react';
import Draggable from './draggable';

export default class Sticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteZindex: 1,
      numberOfNote: 2,
      data: [
              {id: 1, zindex: 1, color: "#FFFD75", title: "Note1", content: "description"},
              {id: 2, zindex: 2, color: "#FAAACA", title: "Note2", content: "Pink background"},
              {id: 3, zindex: 3, color: "#69F098", title: "Note3", content: "description"}
            ]
    }
  }

  handleClick() {
    const backgroundColor = ["#FFFD75", "#FAAACA", "#69F098"]

    let maxId = Math.max(...this.state.data.map(obj => obj.id));
    let maxZindex = Math.max(...this.state.data.map(obj => obj.zindex));

    let obj = {
                id: ++maxId,
                zindex: ++maxZindex,
                color: backgroundColor[Math.floor((Math.random()*backgroundColor.length))],
                title: "Note" + +maxId,
                content: ""
              }

    let data = [...this.state.data];
    data.push(obj)
    this.setState({ data });
  }

  handleChange(id, event) {
    let data = this.state.data

    data.map(obj => {
      if (obj.id === id) {
        obj[event.target.name] = event.target.value
      }
      return obj
    });

    this.setState({ data })
  }

  handleRemove(index, event) {
    let data = [...this.state.data]

    data.splice(index, 1)
    this.setState({ data })
  }

  render() {
    let someValidPath = null
    return (
      <div>
        <a href={someValidPath} className="btn button" id="add_new_note" onClick={this.handleClick.bind(this)}>Add New Note</a>
        <Draggable
          data={this.state.data}
          handleRemove={this.handleRemove.bind(this)}
          handleChange={this.handleChange.bind(this)} />
      </div>
    );
  }
};
