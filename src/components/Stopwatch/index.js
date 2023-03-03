import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {isTimerRunning: false, timeElapsedInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  startTimer = () => {
    this.timerId = setInterval(this.updateTime, 1000)
    this.setState({isTimerRunning: true})
  }

  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false})
  }

  resetTimer = () => {
    clearInterval(this.timerId)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="stop-watch">Stopwatch</h1>
          <div className="timer-container">
            <div className="timer">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-image"
              />
              <p className="timer-text">Timer</p>
            </div>
            <h1 className="time">{time}</h1>
            <div className="buttons-container">
              <button
                className="button start-button"
                type="button"
                onClick={this.startTimer}
                disabled={isTimerRunning}
              >
                Start
              </button>

              <button
                className="button stop-button"
                type="button"
                onClick={this.stopTimer}
              >
                Stop
              </button>

              <button
                className="button reset-button"
                type="button"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
