// import { Component } from 'react';
import React from 'react';

import styles from './Counter.module.css';
console.log(styles);
// this is an object of key/value pairs

// when we inherit from the component class
// we'll have access to this.props
class Counter extends React.Component {
  // let's play state!
  // set some sort of default value
  constructor(props) {
    // calling the parent class's constructor
    // super().__init__()
    super(props);
    // props is just an options object

    // this.count = 0;
    // React doesn't know when we change this!

    this.state = {
      // if not specified, use 0
      clickCount: props.initialCount || 0
    };
  }

  // calling this.setState tells React to rerender the component
  incrementCount = () => this.setState({ clickCount: this.state.clickCount + 1 })

  render() {
    const style = {
      background: this.props.color
    };

    // button.addEventListener('click', () => this.count++)
    return (
      <button
        className={styles.button}
        style={style}
        onClick={this.incrementCount}
      >
        {this.state.clickCount}
      </button>
    );
  }
}

export default Counter;