// Write your code here

import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }
  rendor() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="Speedometer"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max limit is 200mph</p>
        <div>
          <button
            className="accButton"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="breakButton"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
