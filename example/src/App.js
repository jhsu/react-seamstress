import React, { Component } from 'react';

import Toggler from './Toggler';

const RED_STYLE = {
  border: '2px solid #c66',
  backgroundColor: '#fbb',
  ':toggled': {
    backgroundColor: '#c66',
  },
};

const GREEN_STYLE = {
  border: '2px solid #6c6',
  backgroundColor: '#bfb',
  ':toggled': {
    backgroundColor: '#6c6',
  },
};

const BLUE_STYLE = {
  border: '2px solid #66c',
  backgroundColor: '#bbf',
  ':toggled': {
    backgroundColor: '#66c',
  },
};

export default class App extends Component {
  render() {
    return (
      <div>
        <div>
          <p>Without style:</p>
          <Toggler />
          <Toggler toggled={true} />
          <Toggler />
        </div>
        <div>
          <p>With style:</p>
          <Toggler style={RED_STYLE} />
          <Toggler style={GREEN_STYLE} toggled={true} />
          <Toggler style={BLUE_STYLE} />
        </div>
      </div>
    );
  }
}