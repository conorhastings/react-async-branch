import React, { Component } from 'react';

export default class AsyncBranch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Component: props.loadingComponent || (() => null) };
  }

 loadComponent = props => (
  (props.condition ? props.left : props.right)().then(file => (
    this.setState({ Component: file.default || file })
  ))
 );

 componentDidMount() {
  this.loadComponent(this.props);
 } 

 componentWillReceiveProps(nextProps) {
  if ((nextProps.condition !== this.props.condition) || (nextProps.left !== this.props.left) || (nextProps.right !== this.props.right)) {
   this.loadComponent(nextProps);
  }
 }

 render() {
  const { Component } = this.state;
  const { condition, left, right, loadingComponent, ...rest } = this.props;
  return <Component {...rest} />;
 }
}
