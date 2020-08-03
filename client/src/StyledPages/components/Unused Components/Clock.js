import React from "react";


class Clock extends React.Component {
  state = {
    time : new Date()
  };

  changeTime(){
    this.setState({time : new Date()});
  }

  componentDidMount(){
    this.counter = setInterval(() => this.changeTime(), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.counter);
  }


  render(){
    return(
    <h1>{this.state.time.toLocaleTimeString()}</h1>
    );
  }
}

export default Clock;