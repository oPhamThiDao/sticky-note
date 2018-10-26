import React from 'react';
import ReactDOM from 'react-dom';
import Sticky from './components/sticky';
import Board from './components/board';

require('./stylesheets/main.scss');

ReactDOM.render(
  <div>
    <Sticky />
		<Board />
  </div>,
  document.getElementById("root")
);
