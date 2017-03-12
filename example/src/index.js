import React, { Component } from 'react';
import { render } from 'react-dom';
import AsyncBranch from '../../dist';

class Example extends Component {
  state = { condition: true };
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ condition: !this.state.condition })}>
          click to change component
        </button>
        <AsyncBranch
          condition={this.state.condition}
          left={() => import('./a.js')}
          right={() => import('./b.js')}
        />
      </div>
    );
  }
}

render(<Example />, document.getElementById('app'));