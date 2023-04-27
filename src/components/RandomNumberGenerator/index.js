import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  onGenerator = () => {
    const x = Math.ceil(Math.random() * (100 - 0) + 0)
    this.setState({number: x})
  }

  render() {
    const {number} = this.state

    return (
      <div className="bg1">
        <div className="bg2">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onGenerator}>
            Generate
          </button>
          <p className="num">{number}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
