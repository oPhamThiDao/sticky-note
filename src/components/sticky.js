const React = window.React;
const ReactDOM = window.ReactDOM;

export default class Sticky extends Component {
  noteTemp() {
    return (
      <div class="note">
        <a href="javascript:;" class="button remove">X</a>
        <div class="note_cnt">
          <textarea class="title" placeholder="Enter note title"></textarea>
          <textarea class="cnt" placeholder="Enter note description here"></textarea>
        </div>
      </div>
    );
  }

  handleNewNode() {
    console.log();
  }

  render() {
    return (<button type="button" className="btn button" id="add_new" onClick={this.handleNewNode}>Add New Note</button>);
  }
};
