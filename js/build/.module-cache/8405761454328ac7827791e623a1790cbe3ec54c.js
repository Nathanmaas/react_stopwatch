
var TimeDisplay = React.createClass({displayName: "TimeDisplay",
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
    // alert('stopping...');
  },
  render: function(){
    return React.createElement("div", null, 
      React.createElement("h1", null, this.getMinutes(), ":", this.getSeconds()), 
      React.createElement("button", {className: "btn-primary", type: "button", onClick: this.handleStartClick}, "start"), 
      React.createElement("button", {type: "button", onClick: this.handleStopClick}, "stop")
      )
  }
});

React.render(React.createElement(TimeDisplay, null), document.body);
