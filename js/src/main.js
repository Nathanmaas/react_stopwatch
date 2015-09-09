// jsx js/src js/build --watch
..
var TimeDisplay = React.createClass({
  getInitialState: function(){
    return { secondsElapsed: 0 };
  },

  getSeconds: function(){
    return ('00' + this.state.secondsElapsed % 60).slice(-2);
  },
  getMinutes: function(){
    return Math.floor(this.state.secondsElapsed / 60);
  },
  handleStartClick: function(){
    var _this = this;
    this.incrementer = setInterval(function(){
      _this.setState({
      secondsElapsed:
      (_this.state.secondsElapsed + 1)
    });
    }, 1000)
    // alert('starting....')
  },
  handleStopClick: function(){
    clearInterval(this.incrementer);
    this.setState({lastClearedIncrementer: this.incrementer});
    // alert('stopping...');
  },
  handleResetClick: function(){
    this.setState({ secondsElapsed: 0 });
  },
  render: function(){
    return <div style={this.props.style}>
      <h1>{this.getMinutes()}:{this.getSeconds()}</h1>
      {(this.state.secondsElapsed === 0 || this.incrementer === this.state.lastClearedIncrementer)
      ? <button className='btn-primary' type="button" onClick={this.handleStartClick}>start</button>
      : <button className='btn-danger' type="button" onClick={this.handleStopClick}>stop</button>
      }
      {(this.state.secondsElapsed !== 0)
      ? <button className='btn-success' type="button" onClick={this.handleResetClick}>reset</button>
      : null
      }
      </div>

  }
});

var displayStyles = {
    color: "green",
    fontStyle: "italic"
};

React.render(<TimeDisplay style={displayStyles} />, document.body);
