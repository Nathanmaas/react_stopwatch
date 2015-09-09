
// componentWillMount: function(){
//   console.log('mount this yo');
//   },
// componentDidMount: function(){
//   console.log('mounted yo')
//   },


var TimeDisplay = React.createClass({displayName: "TimeDisplay",
  getInitialState: function(){
    return { elapsed: 0 }
  },
  componentDidMount: function(){
  console.log('mounted yo');

    this.timer = setInterval(this.tick, 50);
  },
  componentWillUnMount: function(){
    clearInterval(this.timer);
  },
  tick: function(){
    this.setState({elapsed: new Date() - this.props.start});
  },
  render: function(){
    var elapsed = Math.round(this.state.elapsed / 100);
    var seconds = (elapsed /10).toFixed(1);

    return React.createElement("p", null, "This example ", React.createElement("b", null, seconds, " seconds"), " ago.");

  }
});