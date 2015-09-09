
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
  console.log('mounted yo')

    this.timer = setInterval(this.tick, 100);
  },
  componentWillUnMount: function(){
    clearInterval(this.timer);
  },

})