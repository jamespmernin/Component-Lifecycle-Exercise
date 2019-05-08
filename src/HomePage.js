import React, { Component } from 'react'

// Update this component to use the Mounting Component Lifecycle methods

export default class HomePage extends Component {
  constructor() {
    super()
    console.log("Home: constructor")
  }

  componentDidMount() {
    console.log("Home: componentDidMount")
  }

  componentWillUnmount() {
    console.log("Home: componentWillUnmount")
  }

  render() {
    console.log("Home: In render")
    return (
      <div>
        <h2>{this.props.message}</h2>
      </div>
    )
  }

}