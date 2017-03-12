# React Async Branch

A component that asynchronously loads a component depending on result of condition.

### Install
` npm install react-async-branch`

###  Props

#### `condition`
if true loads and renders left, if false loads and renders right
#### `left`
component to render if condition is true
#### `right`
component to render if condition is false
#### `loadingComponent`
component to render while async component loads
#### `...rest`
additional props will be passed on to rendered component

### Use

```js
import React, { Component } from 'react';
import AsyncBranch from 'react-async-branch';
export default class SoCool extends Component {
	state = { condition: false };
	render() {
		return (
			<div onClick={() => this.setState({ shouldShow: true })}
				<AsyncBranch
					condition={this.state.condition}
					left={() => import('./left')}
					right={() => import('./right')}
					otherProp={"nice"}
				/>
			</div>
		);
	}
}
```
