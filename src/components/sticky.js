import React, { Component } from 'react';
import Draggable from './draggable';

export default class Sticky extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteZindex: 1,
      numberOfNote: 2,
      data: [
              {id: 1, zindex: 1, color: "#FFFD75", title: "Note1", content: "description", top: 40, left: 20 },
              {id: 2, zindex: 2, color: "#FAAACA", title: "Note2", content: "Pink background", top: 50, left: 30 },
              {id: 3, zindex: 3, color: "#69F098", title: "Note3", content: "description", top: 60, left: 40 }
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
                content: "",
                top: 40,
                left: 20 + this.state.data.length*10
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

  handleDragOver(event, ui) {
    let data = [...this.state.data]

    data.map(obj => {
      if (obj.id === parseInt(event.target.id)) {
        obj["top"] = ui.offset.top
        obj["left"] = ui.offset.left
        obj["zindex"] = event.target.style.zIndex
      }
      return obj
    })

    this.setState({ data })
  }

  handleChangeBackgroundColor(obj, color) {
    if (obj.color === color) { return; }

    let data = [...this.state.data]
    data.map(i => {
      if (i.id === obj.id) { i.color = color }
      return i
    })

    this.setState({ data })
  }

  render() {
    let someValidPath = null
    return (
      <div>
        <a href={someValidPath} className="btn button" id="add_new_note" onClick={this.handleClick.bind(this)}>+</a>
        <Draggable
          data={this.state.data}
          handleRemove={this.handleRemove.bind(this)}
          handleChange={this.handleChange.bind(this)}
          handleDragOver={this.handleDragOver.bind(this)}
          handleChangeBackgroundColor={this.handleChangeBackgroundColor.bind(this)} />
      </div>
    );
  }
};
