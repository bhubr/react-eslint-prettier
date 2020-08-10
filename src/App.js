import React, { Component } from 'react'
import './App.css'

class App extends Component {
  state = {
    count: 0
  }

  handleClick = () => this.setState(
    ({ count }) => ({ count: count + 1 })
  )

  render () {
    const { count } = this.state
    return (
      <div className="App">
        <button
          type="button"
          onClick={this.handleClick}
        >
          +1
        </button>
        <p>Count: {count}</p>
      </div>
    )
  }
}

export default App
