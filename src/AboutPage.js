import React, { Component } from 'react'

// Update this component to use the Updating Component Lifecycle methods

export default class AboutPage extends Component {
  constructor() {
    super()

    console.log('About: constructor')
    this.state = {
      counter: 0
    }

    this.incrementCounter = this.incrementCounter.bind(this)
    this.decrementCounter = this.decrementCounter.bind(this)
  }

  incrementCounter() {
    let { counter } = this.state
    counter++

    this.setState({
      counter
    })
  }

  decrementCounter() {
    let { counter } = this.state
    counter--

    this.setState({
      counter
    })
  }

  componentDidMount() {
    console.log("About: componentDidMount")
  }

  componentDidUpdate() {
    console.log("About: componentDidUpdate")
  }

  componentWillUnmount() {
    console.log('About: componentWillUnmount')
  }

  render() {

    console.log('About: render')
    return (
      <div>
        <h2>{this.props.message}</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
      </div>
    )
  }
}