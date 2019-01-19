import React from 'react';

class Timer extends React.Component {
  static format(time) {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    minutes = minutes.toString().length === 1 ? `0${minutes}` : minutes;
    seconds = seconds.toString().length === 1 ? `0${seconds}` : seconds;
    return `${minutes}:${seconds}`;
  }

  constructor(props) {
    super(props);
    this.state = {
      count: 600,
      running: false
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      const newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0,
        running: true
      });
    }, 1000);
  }

  render() {
    const { count } = this.state;
    const { endTime } = this.props;
    if (endTime) endTime(Timer.format(count));
    return (
        <div className="displayedTime">
          {Timer.format(count)}
        </div>
    );
  }
}

export default Timer;
